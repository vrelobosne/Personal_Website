"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { technicalSkills } from "@/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * Skills Section with Animated Tabs
 *
 * Smooth tab transitions with animated indicator.
 */

const tabs = [
  { id: "languages", label: "Languages", data: technicalSkills.languages },
  { id: "tools", label: "Tools & Platforms", data: technicalSkills.tools },
  { id: "domains", label: "Domains", data: technicalSkills.domains },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages");

  const activeData = tabs.find((t) => t.id === activeTab)?.data || [];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          title="Technical Stack"
          subtitle="Technologies I work with"
        />

        {/* Animated Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#111111] border border-gray-800 p-1 rounded-lg relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200 z-10 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}

            {/* Animated Tab Indicator */}
            <motion.div
              className="absolute top-1 bottom-1 bg-cyan-400/20 border border-cyan-400/50 rounded-md"
              layoutId="activeTab"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                left: `${tabs.findIndex((t) => t.id === activeTab) * (100 / tabs.length) + 0.5}%`,
                width: `calc(${100 / tabs.length}% - 4px)`,
              }}
            />
          </div>
        </div>

        {/* Skills Grid with Animation */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {activeData.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
              className="px-5 py-3 bg-[#111111] text-white border border-gray-700 text-sm font-medium hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,217,255,0.1)] transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
