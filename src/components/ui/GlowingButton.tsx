'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function GlowingButton({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
}: GlowingButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = variant === 'primary'
    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border border-cyan-400/50'
    : 'bg-white dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 text-black dark:text-white dark:border dark:border-cyan-400/50';

  const content = (
    <motion.span
      className={`relative inline-flex items-center justify-center px-10 py-4 font-semibold tracking-wide overflow-hidden ${baseStyles} ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated border glow */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{
          boxShadow: isHovered
            ? '0 0 30px rgba(0, 217, 255, 0.6), 0 0 60px rgba(0, 217, 255, 0.4), inset 0 0 30px rgba(0, 217, 255, 0.1)'
            : '0 0 15px rgba(0, 217, 255, 0.3), 0 0 30px rgba(0, 217, 255, 0.15)',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Pulse ring animation */}
      <motion.span
        className="absolute inset-0 border-2 border-cyan-400 opacity-0 pointer-events-none"
        animate={isHovered ? {
          scale: [1, 1.1, 1.2],
          opacity: [0.5, 0.3, 0],
        } : {}}
        transition={{
          duration: 0.8,
          repeat: isHovered ? Infinity : 0,
          ease: 'easeOut',
        }}
      />

      {/* Shimmer effect */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
        initial={{ x: '-200%' }}
        animate={isHovered ? { x: '200%' } : { x: '-200%' }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
          repeat: isHovered ? Infinity : 0,
          repeatDelay: 0.5,
        }}
      />

      {/* Electric spark particles on hover */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full pointer-events-none"
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              animate={{
                x: (Math.random() - 0.5) * 100,
                y: (Math.random() - 0.5) * 60,
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 0.3,
              }}
            />
          ))}
        </>
      )}

      {/* Button text */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <motion.span
          animate={isHovered ? { x: [0, 4, 0] } : { x: 0 }}
          transition={{ duration: 0.4, repeat: isHovered ? Infinity : 0 }}
        >
          &rarr;
        </motion.span>
      </span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}

// Simpler version for secondary CTAs
export function PulsingButton({
  children,
  href,
  className = '',
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const content = (
    <motion.span
      className={`relative inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold tracking-wide ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Continuous subtle pulse */}
      <motion.span
        className="absolute inset-0 bg-cyan-500/20 dark:bg-cyan-400/20"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.span>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <button>{content}</button>;
}
