'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, memo } from 'react';

interface Metric {
  label: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

const baseMetrics: Metric[] = [
  { label: 'Systems Online', value: 847, unit: '', trend: 'up' },
  { label: 'Data Flow', value: 2.4, unit: 'TB/s', trend: 'up' },
  { label: 'Latency', value: 12, unit: 'ms', trend: 'down' },
  { label: 'Uptime', value: 99.97, unit: '%', trend: 'stable' },
];

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState<Metric[]>(baseMetrics);
  const [activeIndex, setActiveIndex] = useState(0);

  // Simulate live data updates - slower interval for performance
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.label === 'Uptime'
          ? metric.value
          : metric.value + (Math.random() - 0.5) * (metric.value * 0.02),
      })));
    }, 5000); // Slowed from 2s to 5s

    return () => clearInterval(interval);
  }, []);

  // Cycle through metrics for mobile/compact view
  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % metrics.length);
    }, 4000); // Slowed from 3s to 4s

    return () => clearInterval(cycleInterval);
  }, [metrics.length]);

  return (
    <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
      {/* Desktop: Show all metrics */}
      <div className="hidden md:flex justify-between gap-2">
        {metrics.map((metric, i) => (
          <MetricCard key={metric.label} metric={metric} index={i} />
        ))}
      </div>

      {/* Mobile: Cycle through metrics */}
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <MetricCard
            key={metrics[activeIndex].label}
            metric={metrics[activeIndex]}
            index={0}
            fullWidth
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

// Memoized MetricCard to prevent unnecessary re-renders
const MetricCard = memo(function MetricCard({
  metric,
  index,
  fullWidth = false
}: {
  metric: Metric;
  index: number;
  fullWidth?: boolean;
}) {
  const trendColors = {
    up: 'text-green-400',
    down: 'text-cyan-400',
    stable: 'text-gray-400',
  };

  const trendIcons = {
    up: '↑',
    down: '↓',
    stable: '→',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className={`backdrop-blur-md bg-black/60 border border-cyan-400/30 rounded-lg px-3 py-2 ${fullWidth ? 'w-full' : ''}`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] uppercase tracking-wider text-gray-300">
          {metric.label}
        </span>
        <span className={`text-[10px] ${trendColors[metric.trend]}`}>
          {trendIcons[metric.trend]}
        </span>
      </div>
      <div className="flex items-baseline gap-1 mt-0.5">
        <span className="text-sm font-mono font-bold text-white">
          {metric.label === 'Data Flow' || metric.label === 'Uptime'
            ? metric.value.toFixed(2)
            : Math.round(metric.value).toLocaleString()}
        </span>
        <span className="text-[10px] text-gray-400">{metric.unit}</span>
      </div>

      {/* Static activity indicator - no animation */}
      <div className="flex gap-0.5 mt-1">
        {[2, 5, 3, 7, 4, 6, 3, 5].map((h, i) => (
          <div
            key={i}
            className="w-1 bg-cyan-400/60 rounded-full"
            style={{ height: h }}
          />
        ))}
      </div>
    </motion.div>
  );
});

// Reduced floating data particles - from 15 to 5
export function DataParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{
            x: `${20 + i * 15}%`,
            y: `${30 + i * 10}%`,
            opacity: 0,
          }}
          animate={{
            x: [`${20 + i * 15}%`, `${40 + i * 10}%`, `${20 + i * 15}%`],
            y: [`${30 + i * 10}%`, `${50 + i * 8}%`, `${30 + i * 10}%`],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 6 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

// Status indicator - using CSS animation instead of Framer Motion
export function SystemStatus() {
  return (
    <div className="absolute top-4 right-4 z-10 flex items-center gap-2 backdrop-blur-md bg-black/40 border border-white/10 rounded-full px-3 py-1.5">
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-[10px] uppercase tracking-wider text-white/80 font-medium">
        online
      </span>
    </div>
  );
}
