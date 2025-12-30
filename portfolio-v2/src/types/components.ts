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

// Navigation Link - used in Navbar
export interface NavLink {
  label: string;      // Display text (e.g., "Home", "About Me")
  href: string;       // URL path (e.g., "/", "/about")
}

// Social Media Link - used in Footer
export interface SocialLink {
  platform: string;   // Platform name (e.g., "LinkedIn", "GitHub")
  url: string;        // Full URL to profile
  icon: string;       // Path to icon SVG file
}

// Project - used in Projects page
export interface Project {
  id: string;              // Unique identifier (e.g., "podcast-editor")
  title: string;           // Project name (e.g., "PodcastEditor")
  description: string;     // Short description of the project
  image: string;           // Path to project screenshot/image
  githubUrl: string;       // GitHub repository URL
  tags: string[];          // Technologies used (e.g., ["Python", "Audio"])
}

// Personal Information - used throughout the site
export interface PersonalInfo {
  name: string;
  title: string;
  university: string;
  email: string;
  bio: {
    short: string;       // Brief intro (1-2 sentences)
    extended: string;    // Longer about me text
  };
}

// Component Props - Props for individual React components

export interface HeroProps {
  name: string;
  title: string;
  description: string;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;        // Optional click handler
  variant?: 'primary' | 'secondary';
  href?: string;               // Optional link URL
}

export interface ProjectCardProps {
  project: Project;
}

export interface AnimationWrapperProps {
  children: React.ReactNode;   // Any React element(s)
  delay?: number;              // Optional delay in seconds
}
