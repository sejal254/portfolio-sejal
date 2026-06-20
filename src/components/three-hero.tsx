"use client";

import { Float, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function LaptopModel() {
  const groupRef = useRef<THREE.Group>(null);
  const screenMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0f172a",
        emissive: "#0ea5e9",
        emissiveIntensity: 0.36,
        metalness: 0.45,
        roughness: 0.22,
      }),
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.18;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.06;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.32} floatIntensity={0.9}>
      <group ref={groupRef} scale={1.18} rotation={[0.18, -0.42, 0]}>
        <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[3.3, 0.12, 2.1]} />
          <meshStandardMaterial color="#1e293b" metalness={0.72} roughness={0.24} />
        </mesh>
        <mesh position={[0, -0.42, 0.96]} castShadow>
          <boxGeometry args={[3.1, 0.05, 0.12]} />
          <meshStandardMaterial color="#64748b" metalness={0.85} roughness={0.18} />
        </mesh>
        <mesh position={[0, 0.64, -0.9]} rotation={[-0.18, 0, 0]} castShadow>
          <boxGeometry args={[3.1, 2, 0.12]} />
          <meshStandardMaterial color="#020617" metalness={0.64} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.64, -0.82]} rotation={[-0.18, 0, 0]}>
          <planeGeometry args={[2.72, 1.62]} />
          <primitive object={screenMaterial} attach="material" />
        </mesh>
        <mesh position={[0, -0.41, 0.08]}>
          <boxGeometry args={[0.82, 0.018, 0.52]} />
          <meshStandardMaterial color="#0f172a" metalness={0.4} roughness={0.36} />
        </mesh>
        {[-0.9, -0.3, 0.3, 0.9].map((x) => (
          <mesh key={x} position={[x, -0.385, -0.32]}>
            <boxGeometry args={[0.38, 0.02, 0.12]} />
            <meshStandardMaterial color="#38bdf8" emissive="#0891b2" emissiveIntensity={0.32} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

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
      [-2.6, 1.35, -0.8],
      [-1.7, 2.1, -1.2],
      [1.85, 1.9, -1.1],
      [2.55, 1.1, -0.7],
      [0, 2.55, -1.45],
    ] as const,
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {nodePositions.map(([x, y, z], index) => (
        <Float key={`${x}-${y}`} speed={1.2 + index * 0.1} floatIntensity={0.32}>
          <mesh position={[x, y, z]}>
            <sphereGeometry args={[0.13, 24, 24]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? "#67e8f9" : "#60a5fa"}
              emissive={index % 2 === 0 ? "#0891b2" : "#1d4ed8"}
              emissiveIntensity={0.65}
              roughness={0.28}
              metalness={0.35}
            />
          </mesh>
          <mesh position={[x, y, z]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.22, 0.008, 8, 48]} />
            <meshStandardMaterial color="#22d3ee" transparent opacity={0.42} />
          </mesh>
        </Float>
      ))}
      <mesh position={[0, 1.78, -1.14]} rotation={[0, 0, -0.08]}>
        <boxGeometry args={[4.9, 0.018, 0.018]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0891b2" emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[0, 2.18, -1.3]} rotation={[0, 0, 0.18]}>
        <boxGeometry args={[3.7, 0.014, 0.014]} />
        <meshStandardMaterial color="#60a5fa" emissive="#1d4ed8" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0, 0.1, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.95, 0.01, 12, 96]} />
        <meshStandardMaterial color="#22d3ee" transparent opacity={0.18} />
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
        <Stars radius={80} depth={35} count={900} factor={3.5} fade speed={0.45} />
        <ParticleField />
        <CloudInfrastructure />
        <LaptopModel />
      </Suspense>
    </Canvas>
  );
}
