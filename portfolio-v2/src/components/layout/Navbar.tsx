"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { personalInfo } from "@/data/personal";
import type { NavLink } from "@/types";

/**
 * Navbar Component
 *
 * Fixed navigation bar with responsive mobile menu.
 * Includes scroll detection and accessibility improvements.
 */

// Navigation links configuration
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Brand/Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white hover:text-gray-300 transition-all"
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-gray-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-5 py-2 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0A0A0A] rounded"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden py-4 bg-[#111111] border border-gray-800 mt-2 shadow-lg rounded-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 px-4 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-all focus:outline-none focus:bg-gray-800 focus:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block py-3 px-4 text-sm font-medium text-white focus:outline-none focus:bg-gray-800"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </nav>
  );
}
