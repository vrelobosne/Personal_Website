/**
 * Professional Experience Data
 *
 * Sanitized for privacy - no company names, specific products, or identifying details.
 * Uses shared Experience type from @/types for consistency.
 */

import type { Experience, Achievement } from "@/types";

export const experiences: Experience[] = [
  {
    id: "swe-fulltime",
    title: "Software Engineer",
    industry: "Energy Management Software",
    period: "May 2024 - Present",
    type: "full-time",
  },
  {
    id: "swe-intern",
    title: "Software Engineer Intern",
    industry: "Energy Management Software",
    period: "May 2023 - May 2024",
    type: "internship",
  },
];

export const education = {
  degree: "Computer Science",
  school: "", // Removed for privacy
  location: "",
  graduated: "", // Removed for privacy
  coursework: [
    "Algorithms and Data Structures",
    "Operating Systems",
    "Software Engineering",
    "Internet Programming",
    "Program Design and Development",
    "Graphics and Games Programming",
  ],
};

// Key work areas (simplified, no specific metrics)
export const achievements: Achievement[] = [
  {
    title: "Legacy System Modernization",
    description: "Migrating and automating legacy displays and interfaces",
    icon: "⚡",
  },
  {
    title: "Quality & Reliability",
    description: "Identifying and resolving critical system defects",
    icon: "🛡️",
  },
  {
    title: "Developer Tooling",
    description: "Building internal tools that improve team productivity",
    icon: "🔧",
  },
];
