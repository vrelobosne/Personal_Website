"use client";

import { experiences } from "@/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

/**
 * Experience Section
 *
 * Clean timeline with subtle animations.
 */

export default function Experience() {
  return (
    <section className="py-24 bg-background dark:bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader title="Experience" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-[#111111] border border-border dark:border-gray-800 hover:border-black dark:hover:border-cyan-400/50 transition-all duration-300 dark:hover:shadow-[0_0_30px_rgba(0,217,255,0.1)]"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold text-text dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-textMuted dark:text-gray-400">
                    {exp.industry}
                  </p>
                </div>
                <div className="text-sm text-cyan-400 font-medium whitespace-nowrap">
                  {exp.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
