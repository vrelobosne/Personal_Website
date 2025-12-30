import { technicalSkills } from '@/data/skills';

/**
 * Skills Section - Organized by category, no proficiency levels
 */

export default function Skills() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Technical Stack
          </h2>
          <p className="text-gray-400">
            Technologies I work with
          </p>
        </div>

        <div className="space-y-12">
          {/* Languages */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Languages</h3>
              <div className="flex-1 h-px bg-gray-800"></div>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.languages.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#111111] text-white border border-gray-700 text-sm font-medium hover:border-white transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Tools & Platforms</h3>
              <div className="flex-1 h-px bg-gray-800"></div>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.tools.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#111111] text-white border border-gray-700 text-sm font-medium hover:border-white transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Domain Experience */}
        <div className="mt-16">
          <h3 className="text-sm font-semibold text-white mb-6 text-center uppercase tracking-wider">Domain Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {technicalSkills.domains.map((domain) => (
              <div
                key={domain}
                className="p-4 bg-[#111111] border border-gray-800 text-center hover:border-white transition-all"
              >
                <span className="text-white text-sm">{domain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
