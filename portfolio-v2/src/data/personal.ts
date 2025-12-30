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
  title: "Software Engineer",
  university: "", // Removed for privacy
  email: "", // Removed for privacy

  bio: {
    // Short bio for homepage
    short: "Software Engineer building enterprise energy management systems and developer tooling. Experienced in systems programming, automation, and modern web technologies.",

    // Extended bio for about page
    extended: `I'm a Software Engineer specializing in mission-critical energy infrastructure software, with expertise spanning grid distribution and transmission systems. My work focuses on building reliable, high-performance solutions that power essential services.

My technical foundation includes deep systems programming in C++ and Fortran, intelligent automation with Python, and modern full-stack development with TypeScript and React. I've architected solutions ranging from legacy system modernization to greenfield developer tooling.

I'm deeply interested in compiler design, distributed systems, and creating internal tools that transform how engineering teams operate. I approach problems with a systems-thinking mindset, always considering scalability, maintainability, and long-term architectural implications.`
  }
};

// Additional personal details
export const headline = "Building systems that scale, tools that amplify, solutions that matter";

export const subheadline = "Systems programming • Developer tooling • Enterprise infrastructure";
