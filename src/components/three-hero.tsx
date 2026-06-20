"use client";

import { Float, Stars, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const points = new Float32Array(900);
    for (let i = 0; i < points.length; i += 3) {
      points[i] = (Math.random() - 0.5) * 12;
      points[i + 1] = (Math.random() - 0.5) * 8;
      points[i + 2] = (Math.random() - 0.5) * 8;
    }
    return points;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.035;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.04;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#67e8f9"
        size={0.026}
        transparent
        opacity={0.72}
        sizeAttenuation
      />
    </points>
  );
}

function CloudInfrastructure() {
  const groupRef = useRef<THREE.Group>(null);
  const nodePositions = useMemo(
    () => [
      { label: "AWS", position: [0, 1.28, 0] as const, radius: 0.22 },
      { label: "API", position: [-1.65, 0.32, -0.25] as const, radius: 0.16 },
      { label: "Queue", position: [1.7, 0.28, -0.3] as const, radius: 0.16 },
      { label: "DB", position: [-0.95, -1.05, 0.2] as const, radius: 0.15 },
      { label: "Workers", position: [0.98, -1.02, 0.18] as const, radius: 0.15 },
      { label: "Lambda", position: [0, -0.02, 0.46] as const, radius: 0.18 },
    ] as const,
    [],
  );
  const connectionLines = useMemo(
    () => [
      { position: [-0.78, 0.8, -0.12] as const, rotation: [0, 0, -0.55] as const, length: 1.86 },
      { position: [0.8, 0.78, -0.14] as const, rotation: [0, 0, 0.55] as const, length: 1.92 },
      { position: [-1.25, -0.36, -0.02] as const, rotation: [0, 0, 0.82] as const, length: 1.72 },
      { position: [1.32, -0.36, -0.02] as const, rotation: [0, 0, -0.8] as const, length: 1.78 },
      { position: [0, -0.5, 0.28] as const, rotation: [0, 0, 0] as const, length: 1.78 },
      { position: [0, 0.55, 0.22] as const, rotation: [0, 0, 1.57] as const, length: 1.2 },
    ] as const,
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.16;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.04;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.06;
  });

  return (
    <group ref={groupRef} scale={1.25}>
      {connectionLines.map((line, index) => (
        <mesh key={index} position={line.position} rotation={line.rotation}>
          <boxGeometry args={[line.length, 0.012, 0.012]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#67e8f9" : "#60a5fa"}
            emissive={index % 2 === 0 ? "#0891b2" : "#1d4ed8"}
            emissiveIntensity={0.45}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

      {nodePositions.map((node, index) => (
        <Float key={node.label} speed={1.1 + index * 0.08} floatIntensity={0.24}>
          <mesh position={node.position}>
            <sphereGeometry args={[node.radius, 32, 32]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? "#67e8f9" : "#60a5fa"}
              emissive={index % 2 === 0 ? "#0891b2" : "#1d4ed8"}
              emissiveIntensity={0.58}
              roughness={0.22}
              metalness={0.42}
            />
          </mesh>
          <mesh position={node.position} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[node.radius + 0.12, 0.008, 8, 56]} />
            <meshStandardMaterial color="#22d3ee" transparent opacity={0.42} />
          </mesh>
          <Text
            position={[node.position[0], node.position[1] - node.radius - 0.22, node.position[2] + 0.02]}
            fontSize={0.12}
            color="#dffbff"
            anchorX="center"
            anchorY="middle"
            outlineColor="#020617"
            outlineWidth={0.006}
          >
            {node.label}
          </Text>
        </Float>
      ))}

      <mesh position={[0, 0.05, -0.45]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.35, 0.01, 12, 96]} />
        <meshStandardMaterial color="#22d3ee" transparent opacity={0.16} />
      </mesh>
      <mesh position={[0, 0.05, -0.5]} rotation={[Math.PI / 2, 0, Math.PI / 5]}>
        <torusGeometry args={[1.58, 0.008, 12, 96]} />
        <meshStandardMaterial color="#60a5fa" transparent opacity={0.16} />
      </mesh>
    </group>
  );
}

export function ThreeHero() {
  return (
    <Canvas
      dpr={[1, 1.7]}
      camera={{ position: [0, 0.55, 6], fov: 42 }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      }}
      shadows
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 5, 5]} intensity={2.4} castShadow />
        <pointLight position={[-3, 2, 3]} intensity={3.2} color="#22d3ee" />
        <pointLight position={[3, -1, 2]} intensity={2.6} color="#2563eb" />
        <Stars radius={80} depth={30} count={450} factor={2.4} fade speed={0.28} />
        <ParticleField />
        <CloudInfrastructure />
      </Suspense>
    </Canvas>
  );
}
