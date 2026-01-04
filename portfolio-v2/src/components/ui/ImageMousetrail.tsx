"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

interface SimpleMousetrailProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  dotSize?: number;
  trailLength?: number;
}

export function SimpleMousetrail({
  children,
  className = "",
  color = "#00D9FF",
  dotSize = 12,
  trailLength = 10,
}: SimpleMousetrailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const idCounter = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      idCounter.current += 1;
      const newDot: TrailDot = {
        id: idCounter.current,
        x,
        y,
      };

      setTrail((prev) => [...prev.slice(-trailLength + 1), newDot]);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [trailLength]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AnimatePresence>
          {trail.map((dot, index) => (
            <motion.div
              key={dot.id}
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{ opacity: 0, scale: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute rounded-full"
              style={{
                left: dot.x - dotSize / 2,
                top: dot.y - dotSize / 2,
                width: dotSize * (1 - index * 0.05),
                height: dotSize * (1 - index * 0.05),
                backgroundColor: color,
                boxShadow: `0 0 ${dotSize}px ${color}`,
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SimpleMousetrail;
