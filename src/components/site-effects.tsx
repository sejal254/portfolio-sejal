"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-1 origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-600"
      style={{ scaleX, width: "100%" }}
    />
  );
}

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow || window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(glow, "x", { duration: 0.35, ease: "power3" });
    const yTo = gsap.quickTo(glow, "y", { duration: 0.35, ease: "power3" });

    const onMove = (event: PointerEvent) => {
      xTo(event.clientX - 160);
      yTo(event.clientY - 160);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-80 w-80 rounded-full bg-cyan-400/14 blur-3xl md:block"
    />
  );
}

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1050);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="relative grid place-items-center">
        <motion.div
          className="absolute h-28 w-28 rounded-full border border-cyan-300/30"
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="h-16 w-16 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-300 to-blue-600 shadow-2xl shadow-cyan-500/30"
          animate={{ rotate: [0, 18, -18, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />
        <p className="mt-40 font-display text-sm uppercase tracking-[0.42em] text-cyan-100/80">
          Loading Portfolio
        </p>
      </div>
    </motion.div>
  );
}
