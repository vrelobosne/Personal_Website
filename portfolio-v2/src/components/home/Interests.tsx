/**
 * Technical Interests Section
 *
 * Displays technical areas of focus and passion.
 * Data is externalized to @/data/interests.ts for easier maintenance.
 * Uses SectionHeader component for consistent styling.
 */

import { interests } from "@/data/interests";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Interests() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          title="Technical Interests"
          subtitle="Areas I'm passionate about and actively exploring"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="p-8 border border-gray-800 hover:border-white transition-all duration-300 bg-[#0A0A0A] group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-gray-700 group-hover:text-white transition-colors">
                  {interest.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {interest.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {interest.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
