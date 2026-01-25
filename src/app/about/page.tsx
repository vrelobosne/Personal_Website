/**
 * About Page
 */

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h1>
          <div className="h-px w-16 bg-white"></div>
        </div>

        {/* Bio - Single focused paragraph */}
        <div className="mb-16">
          <p className="text-lg text-gray-400 leading-relaxed">
            I'm passionate about finding solutions that speed up development and boost productivity. What drives me is the challenge itself—figuring out how to save time and reduce costs while making real impact. With AI, I see an opportunity to shift focus from repetitive, low-value tasks to higher-level decisions that actually matter. It's not about replacing the work, it's about working smarter and spending energy where it counts.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
