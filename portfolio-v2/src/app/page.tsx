'use client';

import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Skills from '@/components/home/Skills';
import Experience from '@/components/home/Experience';
import Achievements from '@/components/home/Achievements';
import Interests from '@/components/home/Interests';
import ScrollReveal, { AnimatedCounter } from '@/components/ui/ScrollReveal';
import GlowingButton from '@/components/ui/GlowingButton';
import { useIsMobile } from '@/hooks/useIsMobile';

// Dynamically import heavy components - only load on desktop after delay
const EarthGlobe = dynamic(() => import('@/components/home/EarthGlobe'), {
  ssr: false,
  loading: () => null,
});

const SpaceBackground = dynamic(() => import('@/components/home/SpaceBackground'), {
  ssr: false,
});

const LiveMetrics = dynamic(() => import('@/components/home/LiveMetrics').then(mod => ({ default: mod.default })), {
  ssr: false,
});

const DataParticles = dynamic(() => import('@/components/home/LiveMetrics').then(mod => ({ default: mod.DataParticles })), {
  ssr: false,
});

const SystemStatus = dynamic(() => import('@/components/home/LiveMetrics').then(mod => ({ default: mod.SystemStatus })), {
  ssr: false,
});

const CSSGlobe = dynamic(() => import('@/components/home/CSSGlobe'), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleGlobeClick = () => {
    router.push('/globe');
  };

  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Space Background - desktop only */}
        {!isMobile && <SpaceBackground />}

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left - Typography (no Framer Motion on mobile) */}
            <div className="order-2 lg:order-1 z-10">
              <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-6 animate-fade-in">
                Software Engineer
              </p>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9] mb-8 text-white tracking-tight animate-slide-in">
                I BUILD
                <br />
                <span className="text-gray-400">SCALABLE</span>
                <br />
                SYSTEMS
              </h1>

              <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-md leading-relaxed animate-fade-in-delay">
                Systems programming, internal tooling, and automation.
                Building infrastructure that powers enterprise applications.
              </p>

              <div className="animate-fade-in-delay-2">
                <GlowingButton href="/contact">
                  LET'S CONNECT
                </GlowingButton>
              </div>

              {/* Scroll indicator - desktop only */}
              {!isMobile && (
                <div className="hidden lg:flex items-center gap-3 mt-20 text-gray-400">
                  <div className="w-8 h-[1px] bg-gray-600" />
                  <span className="text-xs tracking-widest uppercase">Scroll down</span>
                  <span className="text-cyan-400 animate-bounce">↓</span>
                </div>
              )}
            </div>

            {/* Right - Globe (desktop) or Static visual (mobile) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              {isMobile ? (
                // Mobile: Lightweight CSS globe (no Three.js)
                <div
                  className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] cursor-pointer"
                  onClick={handleGlobeClick}
                >
                  <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                    style={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.15)' }}
                  />
                  <CSSGlobe />
                </div>
              ) : (
                // Desktop: Full 3D globe
                <div
                  className="relative w-[480px] h-[480px] lg:w-[550px] lg:h-[550px] cursor-pointer group"
                  onClick={handleGlobeClick}
                >
                  <div
                    className="absolute inset-0 border-2 border-cyan-400/40 rounded-full pointer-events-none"
                    style={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.15)' }}
                  />
                  <DataParticles />
                  <SystemStatus />
                  <EarthGlobe interactive={false} autoRotate={true} />
                  <LiveMetrics />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative elements - desktop only */}
        {!isMobile && (
          <>
            <div className="absolute top-20 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="absolute bottom-32 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </>
        )}
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

        {/* Central glow - static on mobile */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%)',
          }}
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
