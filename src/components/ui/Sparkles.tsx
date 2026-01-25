"use client";

import React, { useEffect, useState, useMemo } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  animationDuration: number;
  animationDelay: number;
}

interface SparklesProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  count?: number;
  disabled?: boolean;
}

interface SparklesCoreProps {
  className?: string;
  color?: string;
  count?: number;
  minSize?: number;
  maxSize?: number;
  background?: string;
  opacity?: number;
}

export function SparklesCore({
  className = "",
  color = "#00D9FF",
  count = 15,
  minSize = 1,
  maxSize = 2,
  background = "transparent",
  opacity = 0.3,
}: SparklesCoreProps) {
  // Generate sparkles once on mount - no re-renders
  const sparkles = useMemo<Sparkle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      animationDuration: 3 + Math.random() * 4,
      animationDelay: Math.random() * 5,
    }));
  }, [count, minSize, maxSize]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ background }}
    >
      <style jsx>{`
        @keyframes sparkle-fade {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: ${opacity};
            transform: scale(1);
          }
        }
      `}</style>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: color,
            boxShadow: `0 0 ${sparkle.size * 2}px ${color}`,
            animation: `sparkle-fade ${sparkle.animationDuration}s ease-in-out ${sparkle.animationDelay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

export default function Sparkles({
  children,
  className = "",
  color = "#00D9FF",
  count = 20,
  disabled = false,
}: SparklesProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {!disabled && (
        <SparklesCore
          color={color}
          count={count}
          className="absolute inset-0 -m-2"
        />
      )}
      <span className="relative z-10">{children}</span>
    </span>
  );
}
