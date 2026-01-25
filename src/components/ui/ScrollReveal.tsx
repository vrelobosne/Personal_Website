'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directions[direction].y,
        x: directions[direction].x,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : directions[direction].y,
        x: isInView ? 0 : directions[direction].x,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated counter component
interface AnimatedCounterProps {
  value: number | string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Parse the numeric part
  const numericValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) || 0 : value;
  const prefix = typeof value === 'string' ? value.replace(/[0-9]/g, '').replace('+', '') : '';
  const hasPlus = typeof value === 'string' && value.includes('+');

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {prefix}
        <motion.span
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {isInView ? (
            <CountUp end={numericValue} duration={duration} />
          ) : (
            '0'
          )}
        </motion.span>
        {hasPlus && '+'}
        {suffix}
      </motion.span>
    </motion.span>
  );
}

// Simple count up component
function CountUp({ end, duration }: { end: number; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  // Use motion to animate
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      onAnimationStart={() => {
        if (!ref.current) return;
        let start = 0;
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / (duration * 1000), 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * end);
          if (ref.current) {
            ref.current.textContent = current.toString();
          }
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else if (ref.current) {
            ref.current.textContent = end.toString();
          }
        };
        requestAnimationFrame(animate);
      }}
    >
      0
    </motion.span>
  );
}
