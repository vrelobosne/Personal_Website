"use client";

import { useState, useCallback } from "react";
import type { ContactFormData, FormStatus } from "@/types";

/**
 * Contact Page
 *
 * Contact form that sends emails via Web3Forms.
 * Includes accessibility improvements and proper form validation.
 */

// Access key from environment variable (set in Vercel dashboard)
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

// Initial form state
const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio Contact: ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center py-20 px-6">
      <div className="max-w-xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h1>
          <div className="h-px w-16 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400">
            Interested in discussing a project or collaboration? I'd love to
            hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#111111] p-8 border border-gray-800"
        >
          {/* Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 bg-[#0A0A0A] text-white focus:outline-none focus:border-white transition-all"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 bg-[#0A0A0A] text-white focus:outline-none focus:border-white transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* Company */}
          <div className="mb-6">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-white mb-2"
            >
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 bg-[#0A0A0A] text-white focus:outline-none focus:border-white transition-all"
              placeholder="Optional"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 bg-[#0A0A0A] text-white focus:outline-none focus:border-white transition-all resize-none"
              placeholder="Tell me about your project or idea..."
            />
          </div>

          {/* Status Messages - with aria-live for screen readers */}
          <div aria-live="polite" aria-atomic="true">
            {status === "success" && (
              <div
                className="mb-6 p-4 bg-green-900/20 border border-green-800 text-green-400 text-sm"
                role="alert"
              >
                Thanks for reaching out! I will get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div
                className="mb-6 p-4 bg-red-900/20 border border-red-800 text-red-400 text-sm"
                role="alert"
              >
                Something went wrong. Please try again.
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full px-8 py-4 bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          Your information is never shared and is used solely for responding to
          your inquiry.
        </p>
      </div>
    </div>
  );
}
