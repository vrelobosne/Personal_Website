import { achievements } from '@/data/experience';

/**
 * Work Areas Section - What I focus on
 */

export default function Achievements() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What I Work On
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Key areas of focus in my current role
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-gray-800 hover:border-white transition-all duration-300 bg-[#0A0A0A]"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
