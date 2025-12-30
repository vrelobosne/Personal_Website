'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/personal';

/**
 * Navbar Component - Dark mode only
 */

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-gray-800'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Brand/Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white hover:text-gray-300 transition-all"
          >
            {personalInfo.name.split(' ')[0]}<span className="text-gray-400">.</span>
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
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-[#111111] border border-gray-800 mt-2 shadow-lg rounded-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="block py-3 px-4 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block py-3 px-4 text-sm font-medium text-white"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
