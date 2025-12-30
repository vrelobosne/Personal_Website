import Image from "next/image";
import { projects } from "@/data/projects";

/**
 * Projects Page - Light & Dark mode support
 */

export default function Projects() {
  return (
    <div className="bg-background dark:bg-[#0A0A0A] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text dark:text-white">
            Projects & Contributions
          </h1>
          <div className="h-px w-16 bg-black dark:bg-white mb-6"></div>
          <p className="text-lg text-textMuted dark:text-gray-400">
            Building tools, solving problems, and contributing to open source
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-[#111111] border border-border dark:border-gray-800 overflow-hidden hover:border-black dark:hover:border-white hover:-translate-y-1 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-900 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-text dark:text-white group-hover:text-textMuted dark:group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-textMuted dark:text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background dark:bg-[#1A1A1A] text-textMuted dark:text-gray-400 border border-border dark:border-gray-700 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Add More Projects Note */}
        <div className="mt-16 p-8 bg-white dark:bg-[#111111] border border-border dark:border-gray-800">
          <h3 className="text-lg font-semibold text-text dark:text-white mb-2">More Projects Coming Soon</h3>
          <p className="text-textMuted dark:text-gray-400 text-sm">
            I'm actively working on several internal tools and open source contributions. Check back soon for updates, or reach out to discuss specific projects.
          </p>
        </div>
      </div>
    </div>
  );
}
