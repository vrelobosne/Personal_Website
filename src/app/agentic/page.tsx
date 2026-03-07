import { agenticCapabilities } from "@/data/agentic";

export default function Agentic() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Agentic Engineering
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            How I design, build, and deploy AI agent systems
          </p>
          <div className="h-px w-16 bg-white mt-4"></div>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {agenticCapabilities.map((capability) => (
            <div
              key={capability.id}
              className="p-8 border border-gray-800 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)] transition-all duration-300 bg-[#111111]"
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

        {/* Philosophy Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-6">Philosophy</h2>
          <div className="space-y-4">
            <p className="text-gray-400 leading-relaxed">
              I believe the future of software engineering is collaborative — humans and AI agents working together, each contributing their strengths. The engineer provides intent, judgment, and architectural vision. The agent provides speed, consistency, and tireless attention to detail.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The key is infrastructure. Agents are only as good as the context they receive, the tools they can access, and the guardrails that keep them reliable. That's what I build: the scaffolding that makes human-AI collaboration productive, safe, and scalable.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition-all duration-300"
          >
            Let's Build Together
          </a>
        </div>
      </div>
    </div>
  );
}
