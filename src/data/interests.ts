/**
 * Technical Interests Data
 *
 * This file contains all technical interests displayed on the homepage.
 * Externalizing this data makes it easier to update and maintain.
 * Uses shared Interest type from @/types for consistency.
 */

import type { Interest } from "@/types";

export const interests: Interest[] = [
  {
    number: "01",
    title: "Automation & Workflow Optimization",
    description:
      "Building scripts and tools that eliminate repetitive work - from automated migrations to pipeline optimizations that save engineering teams time.",
  },
  {
    number: "02",
    title: "Internal Developer Tools",
    description:
      "Creating CLI utilities and internal tools that transform engineering workflows and improve team productivity.",
  },
  {
    number: "03",
    title: "Systems Architecture",
    description:
      "Designing scalable, maintainable systems with a focus on performance, reliability, and long-term sustainability.",
  },
  {
    number: "04",
    title: "AI-Assisted Development",
    description:
      "Leveraging AI coding agents and Model Context Protocol (MCP) to orchestrate multi-step development workflows — from context engineering to automated testing and validation.",
  },
];
