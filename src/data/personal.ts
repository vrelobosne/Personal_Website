import { PersonalInfo } from '@/types';

/**
 * Personal Information Data
 *
 * This file contains all your personal information used throughout the website.
 * To update any content, simply edit the values here - all components will
 * automatically reflect the changes.
 */

export const personalInfo: PersonalInfo = {
  name: "Dino Handzic",
  title: "Agentic Engineering & Software Architecture",
  university: "", // Removed for privacy
  email: "", // Removed for privacy

  bio: {
    // Short bio for homepage
    short: "Agentic Engineering specialist building AI agent infrastructure, multi-agent orchestration systems, and enterprise energy management software.",

    // Extended bio for about page
    extended: `I'm a Software Engineer specializing in mission-critical energy infrastructure software, with expertise spanning grid distribution and transmission systems. My work focuses on building reliable, high-performance solutions that power essential services.

My technical foundation includes deep systems programming in C++ and Fortran, intelligent automation with Python, and modern full-stack development with TypeScript and React. I've architected solutions ranging from legacy system modernization to greenfield developer tooling.

I'm deeply invested in agentic engineering — designing multi-agent systems, building MCP servers, and creating the context engineering pipelines that make AI agents reliable production tools. I approach problems with a systems-thinking mindset, always considering scalability, maintainability, and the emerging role of AI in software architecture.`
  }
};

// Additional personal details
export const headline = "Building intelligent systems that scale, agents that reason, solutions that matter";

export const subheadline = "Systems programming · Agentic AI · Enterprise infrastructure";
