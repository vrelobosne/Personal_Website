/**
 * Centralized Theme Constants
 *
 * This file contains all shared constants used throughout the application.
 * Centralizing these values makes it easy to maintain consistency and
 * update the design system from a single location.
 */

// =============================================================================
// COLOR PALETTE
// =============================================================================

export const colors = {
  // Background colors
  background: {
    primary: "#0A0A0A",
    secondary: "#111111",
    tertiary: "#1A1A1A",
    light: "#F8F8F8",
  },

  // Text colors
  text: {
    primary: "#FFFFFF",
    secondary: "#E5E5E5",
    muted: "#9CA3AF", // gray-400
    subtle: "#6B7280", // gray-500
    dark: "#000000",
  },

  // Border colors
  border: {
    default: "#374151", // gray-700
    subtle: "#1F2937", // gray-800
    hover: "#FFFFFF",
  },

  // Accent colors
  accent: {
    cyan: "#00D9FF",
    cyanLight: "rgba(0, 217, 255, 0.15)",
    blue: "#3B82F6",
    green: "#10B981",
    orange: "#FFAA00",
  },

  // Status colors
  status: {
    success: "#4ADE80", // green-400
    error: "#F87171", // red-400
    warning: "#FBBF24", // amber-400
  },
} as const;

// =============================================================================
// SPACING & LAYOUT
// =============================================================================

export const layout = {
  // Max widths
  maxWidth: {
    content: "7xl", // max-w-7xl = 80rem = 1280px
    narrow: "4xl", // max-w-4xl = 56rem = 896px
    form: "xl", // max-w-xl = 36rem = 576px
  },

  // Padding
  padding: {
    page: {
      x: "px-6 sm:px-8 lg:px-12",
      y: "py-24",
    },
    section: "py-24",
    sectionLarge: "py-32",
  },

  // Navbar height
  navbarHeight: "h-20",
  mainPadding: "pt-20",
} as const;

// =============================================================================
// ANIMATION TIMING
// =============================================================================

export const animation = {
  // Durations (in seconds for Framer Motion)
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.6,
    slower: 0.8,
  },

  // Delays
  delay: {
    stagger: 0.1,
    section: 0.2,
  },

  // Easing
  ease: {
    default: [0.25, 0.4, 0.25, 1],
    easeOut: "easeOut",
    easeInOut: "easeInOut",
  },
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

export const breakpoints = {
  mobile: 640, // sm
  tablet: 768, // md
  desktop: 1024, // lg
  wide: 1280, // xl
  ultrawide: 2560,
} as const;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const componentStyles = {
  // Card styles
  card: {
    base: "bg-[#111111] border border-gray-800",
    hover: "hover:border-white transition-all duration-300",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },

  // Button styles
  button: {
    primary:
      "px-8 py-4 bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition-all duration-300",
    secondary:
      "px-6 py-3 bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300",
    outline:
      "px-5 py-2 border border-gray-700 text-gray-400 hover:border-white hover:text-white transition-all",
  },

  // Input styles
  input: {
    base: "w-full px-4 py-3 border border-gray-700 bg-[#0A0A0A] text-white focus:outline-none focus:border-white transition-all",
    label: "block text-sm font-medium text-white mb-2",
  },

  // Section title styles
  sectionTitle: {
    wrapper: "text-center mb-16",
    heading: "text-3xl md:text-4xl font-bold mb-4 text-white",
    subheading: "text-gray-400",
  },
} as const;

// =============================================================================
// SEO & META
// =============================================================================

export const siteConfig = {
  url: "https://elvedin.dev",
  name: "Elvedin Handzic",
  title: "Software Engineer",
  description:
    "Software Engineer building scalable systems, developer tooling, and enterprise infrastructure.",
  social: {
    github: "https://github.com/vrelobosne",
    linkedin: "https://www.linkedin.com/in/handzice/",
  },
} as const;

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export type Colors = typeof colors;
export type Layout = typeof layout;
export type Animation = typeof animation;
export type Breakpoints = typeof breakpoints;
export type ComponentStyles = typeof componentStyles;
export type SiteConfig = typeof siteConfig;
