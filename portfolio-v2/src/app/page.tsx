'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Skills from '@/components/home/Skills';
import Experience from '@/components/home/Experience';
import Achievements from '@/components/home/Achievements';
import Interests from '@/components/home/Interests';
import ScrollReveal, { AnimatedCounter } from '@/components/ui/ScrollReveal';
import GlowingButton from '@/components/ui/GlowingButton';
import LiveMetrics, { DataParticles, SystemStatus } from '@/components/home/LiveMetrics';
import SpaceBackground from '@/components/home/SpaceBackground';

// Dynamically import Earth Globe to avoid SSR issues with Three.js
const EarthGlobe = dynamic(() => import('@/components/home/EarthGlobe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
    </div>
  ),
});

export default function Home() {
  const router = useRouter();

  const handleGlobeClick = () => {
    router.push('/globe');
  };

  return (
    <div className="bg-background dark:bg-[#0A0A0A]">
      {/* Hero Section - Artistic Layout */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Space Background - only visible in dark mode */}
        <div className="hidden dark:block">
          <SpaceBackground />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left - Typography */}
            <div className="order-2 lg:order-1 z-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm tracking-[0.3em] uppercase text-textMuted dark:text-gray-400 mb-6"
              >
                Software Engineer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] mb-8 text-text dark:text-white tracking-tight"
              >
                I BUILD
                <br />
                <span className="text-textMuted dark:text-gray-400">SCALABLE</span>
                <br />
                SYSTEMS
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-textMuted dark:text-gray-400 mb-10 max-w-md leading-relaxed"
              >
                Systems programming, internal tooling, and automation.
                Building infrastructure that powers enterprise applications.
              </motion.p>

              {/* Glowing CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <GlowingButton href="/contact">
                  LET'S CONNECT
                </GlowingButton>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="hidden lg:flex items-center gap-3 mt-20 text-textMuted dark:text-gray-400"
              >
                <motion.div
                  className="w-8 h-[1px] bg-textMuted dark:bg-gray-600"
                  animate={{ scaleX: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs tracking-widest uppercase">Scroll down</span>
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  ↓
                </motion.span>
              </motion.div>
            </div>

            {/* Right - Globe with Live Dashboard */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[550px] lg:h-[550px] cursor-pointer group"
                onClick={handleGlobeClick}
              >
                {/* Circular border frame with glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 border-2 border-cyan-400/30 dark:border-cyan-400/40 rounded-full pointer-events-none"
                  style={{
                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.15)',
                  }}
                />

                {/* Data particles floating around */}
                <DataParticles />

                {/* System status indicator */}
                <SystemStatus />

                {/* Globe content */}
                <EarthGlobe interactive={false} autoRotate={true} />

                {/* Live metrics dashboard */}
                <LiveMetrics />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-2 h-2 bg-cyan-400 rounded-full"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-3 h-3 bg-cyan-400 rounded-full"
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#111111] border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <ScrollReveal delay={0}>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value="2" suffix="+" duration={1.5} />
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Energy
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Sector</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Full Stack
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Development</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <ScrollReveal>
        <Skills />
      </ScrollReveal>

      {/* Achievements Section */}
      <ScrollReveal>
        <div id="achievements">
          <Achievements />
        </div>
      </ScrollReveal>

      {/* Experience Section */}
      <ScrollReveal>
        <Experience />
      </ScrollReveal>

      {/* Technical Interests */}
      <ScrollReveal>
        <Interests />
      </ScrollReveal>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-b from-[#0A0A0A] to-[#0d1520] text-white relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Central glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Connect
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Always happy to chat about interesting projects, technical challenges, or potential collaborations.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <GlowingButton href="/contact" variant="primary">
              GET IN TOUCH
            </GlowingButton>
          </ScrollReveal>

          {/* Simple indicator */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 flex justify-center items-center gap-2 text-gray-500 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Quick Response</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
