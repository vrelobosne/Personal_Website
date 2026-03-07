import { agenticCapabilities } from "@/data/agentic";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AgenticShowcase() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          title="Agentic Engineering"
          subtitle="Building the infrastructure for human-AI collaboration"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agenticCapabilities.map((capability) => (
            <div
              key={capability.id}
              className="p-8 bg-[#0A0A0A] border border-gray-800 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{capability.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {capability.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
