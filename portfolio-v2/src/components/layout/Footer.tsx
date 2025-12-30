import Image from 'next/image';
import { socialLinks } from '@/data/social';
import { personalInfo } from '@/data/personal';

/**
 * Footer Component - Light & Dark mode support
 */

export default function Footer() {
  return (
    <footer className="bg-[#111111] dark:bg-[#050505] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

          {/* Brand */}
          <div className="text-white font-bold">
            {personalInfo.name.split(' ')[0]}<span className="text-gray-500">.</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
                aria-label={`Visit my ${social.platform} profile`}
              >
                <Image
                  src={social.icon}
                  alt={`${social.platform} logo`}
                  width={24}
                  height={24}
                  className="invert opacity-50 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>

          {/* Contact Link */}
          <div>
            <a
              href="/contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
