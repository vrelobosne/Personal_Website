/**
 * TypeScript Type Definitions for Components
 *
 * This file contains type definitions (interfaces) for all React components in the portfolio.
 * Each interface defines the "props" (properties/parameters) that a component accepts.
 *
 * Learning TypeScript:
 * - interface: Defines the shape/structure of an object
 * - string: Text type ("Hello")
 * - number: Numeric type (42)
 * - boolean: True/false type
 * - ?: Makes a property optional
 * - string[]: Array of strings
 */

// =============================================================================
// DATA TYPES
// =============================================================================

/**
 * Navigation Link - used in Navbar
 */
export interface NavLink {
  label: string; // Display text (e.g., "Home", "About Me")
  href: string; // URL path (e.g., "/", "/about")
}

/**
 * Social Media Link - used in Footer
 */
export interface SocialLink {
  platform: string; // Platform name (e.g., "LinkedIn", "GitHub")
  url: string; // Full URL to profile
  icon: string; // Path to icon SVG file
}

/**
 * Project - used in Projects page
 */
export interface Project {
  id: string; // Unique identifier (e.g., "podcast-editor")
  title: string; // Project name (e.g., "PodcastEditor")
  description: string; // Short description of the project
  image: string; // Path to project screenshot/image
  githubUrl: string; // GitHub repository URL
  tags: string[]; // Technologies used (e.g., ["Python", "Audio"])
}

/**
 * Personal Information - used throughout the site
 */
export interface PersonalInfo {
  name: string;
  title: string;
  university: string;
  email: string;
  bio: {
    short: string; // Brief intro (1-2 sentences)
    extended: string; // Longer about me text
  };
}

/**
 * Experience Entry - used in Experience section
 */
export interface Experience {
  id: string;
  title: string;
  industry: string;
  period: string;
  type: "full-time" | "internship" | "contract";
}

/**
 * Achievement/Work Area - used in Achievements section
 */
export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

/**
 * Technical Interest - used in Interests section
 */
export interface Interest {
  number: string;
  title: string;
  description: string;
}

/**
 * Technical Skills - organized by category
 */
export interface TechnicalSkills {
  languages: string[];
  tools: string[];
  domains: string[];
  humanLanguages: string[];
}

/**
 * Metric for live dashboard display
 */
export interface Metric {
  label: string;
  value: number;
  unit: string;
  trend: "up" | "down" | "stable";
}

// =============================================================================
// COMPONENT PROPS
// =============================================================================

/**
 * Hero Section Props
 */
export interface HeroProps {
  name: string;
  title: string;
  description: string;
}

/**
 * Button Props - Reusable button component
 */
export interface ButtonProps {
  text: string;
  onClick?: () => void; // Optional click handler
  variant?: "primary" | "secondary";
  href?: string; // Optional link URL
}

/**
 * Project Card Props
 */
export interface ProjectCardProps {
  project: Project;
}

/**
 * Animation Wrapper Props - For scroll reveal animations
 */
export interface AnimationWrapperProps {
  children: React.ReactNode; // Any React element(s)
  delay?: number; // Optional delay in seconds
}

/**
 * Scroll Reveal Props - Extended animation wrapper
 */
export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

/**
 * Earth Globe Props - 3D Globe component
 */
export interface EarthGlobeProps {
  interactive?: boolean;
  autoRotate?: boolean;
  showMoon?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Glowing Button Props - Animated CTA button
 */
export interface GlowingButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

/**
 * Contact Form Data
 */
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

/**
 * Form Status States
 */
export type FormStatus = "idle" | "submitting" | "success" | "error";
