import { experiences } from '@/data/experience';

/**
 * Experience Section - Light & Dark mode support
 */

export default function Experience() {
  return (
    <section className="py-24 bg-background dark:bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text dark:text-white">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-8 bg-white dark:bg-[#111111] border border-border dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
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
                <div className="text-sm text-textMuted dark:text-gray-500 font-medium">
                  {exp.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
