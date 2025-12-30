/**
 * Technical Interests Section
 */

const interests = [
  {
    title: 'Automation & Workflow Optimization',
    description: 'Building scripts and tools that eliminate repetitive work - from automated migrations to pipeline optimizations that save engineering teams time.',
    number: '01'
  },
  {
    title: 'Internal Developer Tools',
    description: 'Creating CLI utilities and internal tools that transform engineering workflows and improve team productivity.',
    number: '02'
  },
  {
    title: 'Systems Architecture',
    description: 'Designing scalable, maintainable systems with a focus on performance, reliability, and long-term sustainability.',
    number: '03'
  },
  {
    title: 'AI-Assisted Development',
    description: 'Leveraging AI and MCP (Model Context Protocol) to build, test, and validate applications - analyzing performance and accelerating development cycles.',
    number: '04'
  }
];

export default function Interests() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Technical Interests
          </h2>
          <p className="text-gray-400">
            Areas I'm passionate about and actively exploring
          </p>
        </div>

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
