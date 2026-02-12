import { Metadata } from "next";
import Link from "next/link";
import { Tweet } from "react-tweet";

export const metadata: Metadata = {
  title: "AI Landscape 2026",
  robots: { index: false, follow: false },
};

function Footnote({ n }: { n: number }) {
  return (
    <sup>
      <a
        href={`#fn-${n}`}
        id={`ref-${n}`}
        className="text-blue-400 hover:text-blue-300 no-underline ml-0.5"
      >
        [{n}]
      </a>
    </sup>
  );
}

function ArticleImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-w-full rounded-lg mx-auto shadow-lg shadow-white/5 ring-1 ring-white/10"
      />
      <figcaption className="text-sm text-gray-500 mt-3 text-center italic">
        {caption}
      </figcaption>
    </figure>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 pl-6 border-l-4 border-blue-400/50 py-2">
      <p
        className="text-2xl sm:text-3xl text-white/90 italic font-light leading-snug"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        {children}
      </p>
    </blockquote>
  );
}

function EmbeddedTweet({ id }: { id: string }) {
  return (
    <div
      data-theme="dark"
      className="my-8 [&_[data-theme=dark]]:!bg-transparent"
    >
      <Tweet id={id} />
    </div>
  );
}

function SectionHeading({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="relative mt-16 mb-6">
      <span
        className="absolute -left-4 sm:-left-12 -top-6 text-[5rem] sm:text-[7rem] font-bold text-white/[0.04] leading-none select-none pointer-events-none"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        {number}
      </span>
      <h2
        className="relative text-2xl sm:text-3xl font-bold text-white"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        {children}
      </h2>
    </div>
  );
}

export default function AILandscapePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-gray-300">
      {/* Back button */}
      <div className="max-w-3xl mx-auto pt-16 px-6 sm:px-8 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 group font-light tracking-wider text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          BACK
        </Link>
      </div>

      {/* Full-bleed hero image */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden mb-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://static-assets.codecademy.com/introduction-to-claude-code/selecting-text.png"
          alt="Claude Code terminal interface"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-3xl mx-auto px-6 sm:px-8">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            The Current AI Landscape
          </h1>
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <span>By Dino Handzic</span>
            <span className="text-gray-600">|</span>
            <span>As of February 12, 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* TL;DR Box */}
        <div className="mb-12 p-6 rounded-xl bg-white/[0.03] border border-white/10">
          <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-4">
            Key Takeaways
          </h3>
          <ol className="space-y-2 text-[15px] text-gray-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-semibold shrink-0">1.</span>
              AI can now complete tasks autonomously that would take a human
              professional over 6 hours — up from 9 seconds in 2020.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-semibold shrink-0">2.</span>
              Google DeepMind&apos;s Gemini Deep Think is solving open math
              problems and producing publishable research — though 68.5% of
              attempts still fail.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-semibold shrink-0">3.</span>
              OpenAI&apos;s latest model helped build itself — and a departing
              xAI co-founder predicts recursive self-improvement within 12
              months.
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-semibold shrink-0">4.</span>
              Safety researchers are leaving Anthropic and OpenAI in waves,
              warning that &quot;safety culture has taken a backseat to shiny
              products.&quot;
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-semibold shrink-0">5.</span>
              GPT-5 autonomously ran 36,000 lab experiments, cutting protein
              synthesis costs by 40% — proposing combinations humans hadn&apos;t
              tried.
            </li>
          </ol>
        </div>

        {/* Intro */}
        <div className="text-lg leading-relaxed space-y-6">
          <p
            className="first-letter:text-[3.5rem] first-letter:font-bold first-letter:text-white first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8]"
            style={{ fontFamily: "inherit" }}
          >
            <span
              style={{ fontFamily: '"Playfair Display", serif' }}
              className="first-letter:font-bold"
            />
            The AI landscape today is dominated by a handful of companies —
            OpenAI (ChatGPT), Anthropic (Claude), Google DeepMind (Gemini), Meta
            (Llama), and Elon Musk&apos;s xAI (Grok) in the US, plus
            China&apos;s DeepSeek, which shocked the industry by building models
            rivaling US leaders for a fraction of the cost.
            <Footnote n={1} /> These systems got so good so fast through a
            series of compounding breakthroughs: making models massively bigger
            (2020–2023), training them with human feedback so they&apos;re
            actually useful (2022), teaching them to reason step-by-step like
            showing your work on an exam (2024), and most recently, letting them
            &quot;think longer&quot; on hard problems for dramatically better
            results (2025–2026).
          </p>

          <hr className="border-gray-800 my-10" />

          {/* Section 1 */}
          <SectionHeading number={1}>
            AI Can Now Work Autonomously for 6+ Hours
          </SectionHeading>

          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              A nonprofit called METR
              <Footnote n={2} /> measures how long AI can work independently on
              professional-level tasks.
            </li>
            <li>
              Their metric: how complex of a task can AI complete alone,
              measured by how long that task would take a human professional.
            </li>
            <li>
              Latest result: GPT-5.2 can complete tasks that would take a human
              ~6.6 hours.
            </li>
            <li>
              For context: in 2020 it was 9 seconds, in 2023 about 4 minutes,
              late 2024 about 40 minutes.
            </li>
            <li>
              Separately, Claude Opus 4.6
              <Footnote n={3} /> was tested managing a 50-person organization
              across 6 code repositories — closing issues, delegating tasks, and
              escalating to humans when appropriate.
            </li>
            <li>
              The chart below shows this trajectory — capabilities are roughly
              doubling every 4–5 months.
            </li>
          </ul>

          <ArticleImage
            src="/images/metr-time-horizons.png"
            alt="METR time horizon growth chart showing AI task duration capabilities increasing over time"
            caption="METR's time horizon metric: AI autonomous work duration has grown from seconds to hours in under 6 years. Source: metr.org"
          />

          <PullQuote>
            From 9 seconds to 6.6 hours in five years — and the curve is still
            accelerating.
          </PullQuote>

          {/* Section 2 */}
          <SectionHeading number={2}>
            AI Is Solving PhD-Level Math and Generating Publishable Research
          </SectionHeading>

          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              Google DeepMind announced Gemini Deep Think
              <Footnote n={4} /> — an AI research agent that autonomously works
              on open problems in math, physics, and computer science.
            </li>
            <li>
              The system is built around{" "}
              <strong className="text-white">Aletheia</strong>, an agentic
              framework where Gemini Deep Think explores conjectures, generates
              proofs, verifies its reasoning, and iterates — all with minimal
              human oversight.
            </li>
            <li>
              After achieving a gold medal at the 2025 International Math
              Olympiad (5 of 6 problems within the 4.5-hour time limit), updated
              versions now score ~92% on advanced proof benchmarks.
            </li>
            <li>
              When directed at 700 unsolved mathematical conjectures, it
              produced 4 novel solutions — one became a published research
              paper.
            </li>
            <li>
              In another case, the AI generated a proof that the original human
              researchers preferred over their own, replacing their version in
              the final publication.
            </li>
            <li>
              <strong className="text-white">Caveat:</strong> on open research
              problems, 68.5% of responses were still fundamentally flawed —
              capable but far from reliable.
            </li>
          </ul>

          <ArticleImage
            src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/original_images/DeepThink-maths-science-discovery__figure-01-Aletheia__dark_MQtmOaf.svg"
            alt="Aletheia agentic framework flowchart showing how Gemini Deep Think explores, proves, and verifies mathematical conjectures"
            caption="The Aletheia framework: Gemini Deep Think's autonomous pipeline for mathematical discovery. Source: Google DeepMind"
          />

          {/* Section 3 */}
          <SectionHeading number={3}>
            AI Is Starting to Improve Itself
          </SectionHeading>

          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              OpenAI released GPT-5.3-Codex, described as <Footnote n={5} />{" "}
              &quot;the first model that was instrumental in creating
              itself&quot; — early versions debugged their own training process
              and managed their own deployment. The model operates 25% faster
              than its predecessor while achieving state-of-the-art performance
              with reduced computing resources.
            </li>
            <li>
              CEO Sam Altman aims for an automated AI research intern by
              September 2026 and a &quot;true automated AI researcher by March
              of 2028.&quot;
            </li>
            <li>
              A departing xAI co-founder
              <Footnote n={6} /> (half the founding team has now left — Jimmy Ba
              and Tony Wu both departed within two days of each other, following
              SpaceX&apos;s acquisition of xAI) predicts &quot;recursive
              self-improvement loops will go live within 12 months.&quot;
            </li>
            <li>
              Recursive self-improvement means AI systems that can modify and
              improve their own design, with each improvement making the next
              one easier — creating an accelerating feedback loop.
            </li>
          </ul>

          <ArticleImage
            src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2025-10/251001-open-ai-vl-119p-115a9c.jpg"
            alt="OpenAI office with company logo"
            caption="OpenAI's GPT-5.3-Codex: the first model that helped build itself. Source: NBC News"
          />

          {/* Section 4 */}
          <SectionHeading number={4}>
            The People Hired to Keep AI Safe Are Quitting
          </SectionHeading>

          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              Anthropic&apos;s head of AI safety,{" "}
              <strong className="text-white">Mrinank Sharma</strong>, resigned
              publicly
              <Footnote n={7} />, warning &quot;the world is in peril.&quot;
              Sharma, who holds a PhD in Machine Learning from Oxford, led
              Anthropic&apos;s Safeguards Research Team since 2025, building
              defenses against AI misuse including work on bioweapon risk
              prevention.
            </li>
            <li>
              In his resignation letter, he wrote: &quot;Throughout my time
              here, I&apos;ve repeatedly seen how hard it is to truly let our
              values govern our actions.&quot;
            </li>
            <li>
              He is leaving the technology industry entirely — not joining a
              competitor. His plan is to pursue a poetry degree and &quot;devote
              myself to the practice of courageous speech.&quot;
            </li>
            <li>
              This is part of a broader pattern
              <Footnote n={8} /> — multiple safety researchers have left both
              Anthropic and OpenAI in recent months, with one stating
              &quot;safety culture has taken a backseat to shiny products.&quot;
              OpenAI disbanded its Mission Alignment team after just 16 months,
              and fired safety executive Ryan Beiermeister after he opposed the
              rollout of adult content on ChatGPT.
            </li>
          </ul>

          <EmbeddedTweet id="2020881722003583421" />

          <EmbeddedTweet id="2021374875793801447" />

          <ArticleImage
            src="https://americanbazaaronline.com/wp-content/uploads/2026/02/Mrinank-Sharma.png"
            alt="Mrinank Sharma, former head of AI safety at Anthropic"
            caption="Mrinank Sharma resigned from Anthropic warning 'the world is in peril.' Source: American Bazaar"
          />

          {/* Section 5 */}
          <SectionHeading number={5}>
            AI Ran Its Own Lab Experiments
          </SectionHeading>

          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              OpenAI connected their AI to a robotic wet lab
              <Footnote n={9} />.
            </li>
            <li>
              The AI autonomously designed 36,000 protein synthesis experiments,
              submitted them to robotic systems, analyzed results, and decided
              what to try next — with minimal human involvement.
            </li>
            <li>
              Result: 40% reduction in cell-free protein production cost
              ($698/gram → $422/gram for sfGFP).
            </li>
            <li>
              The AI proposed reagent combinations that human researchers
              hadn&apos;t previously tested — some of which anticipated findings
              from papers it hadn&apos;t been given access to.
            </li>
            <li>
              Cell-free protein synthesis is used in therapeutic protein
              production, vaccine development, antimicrobial peptide research,
              and diagnostics.
            </li>
          </ul>

          <ArticleImage
            src="https://www.rdworldonline.com/wp-content/uploads/2026/02/GinkosLab.jpg"
            alt="Ginkgo Bioworks cloud lab in Boston where GPT-5 autonomously ran protein synthesis experiments"
            caption="Ginkgo Bioworks' cloud lab in Boston — where GPT-5 autonomously designed and executed 36,000 experiments. Source: R&D World"
          />
        </div>

        {/* Sources / Footnotes */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-sm font-semibold text-white/60 uppercase tracking-widest mb-6">
            Sources
          </h3>
          <ol className="space-y-3 text-sm text-gray-500">
            <li id="fn-1" className="flex gap-2">
              <a href="#ref-1" className="text-blue-400/60 shrink-0">
                [1]
              </a>
              <span>
                CNN —{" "}
                <a
                  href="https://www.cnn.com/2025/01/27/tech/deepseek-stocks-ai-china/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  DeepSeek shocks AI industry with low-cost models
                </a>
              </span>
            </li>
            <li id="fn-2" className="flex gap-2">
              <a href="#ref-2" className="text-blue-400/60 shrink-0">
                [2]
              </a>
              <span>
                METR —{" "}
                <a
                  href="https://metr.org/time-horizons/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  AI Time Horizons
                </a>
              </span>
            </li>
            <li id="fn-3" className="flex gap-2">
              <a href="#ref-3" className="text-blue-400/60 shrink-0">
                [3]
              </a>
              <span>
                Anthropic —{" "}
                <a
                  href="https://www.anthropic.com/news/claude-opus-4-6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  Claude Opus 4.6 Announcement
                </a>
              </span>
            </li>
            <li id="fn-4" className="flex gap-2">
              <a href="#ref-4" className="text-blue-400/60 shrink-0">
                [4]
              </a>
              <span>
                Google DeepMind —{" "}
                <a
                  href="https://deepmind.google/blog/accelerating-mathematical-and-scientific-discovery-with-gemini-deep-think/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  Accelerating Mathematical and Scientific Discovery with Gemini
                  Deep Think
                </a>
              </span>
            </li>
            <li id="fn-5" className="flex gap-2">
              <a href="#ref-5" className="text-blue-400/60 shrink-0">
                [5]
              </a>
              <span>
                NBC News —{" "}
                <a
                  href="https://www.nbcnews.com/tech/innovation/openai-says-new-codex-coding-model-helped-build-rcna257521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  OpenAI says new Codex coding model helped build itself
                </a>
              </span>
            </li>
            <li id="fn-6" className="flex gap-2">
              <a href="#ref-6" className="text-blue-400/60 shrink-0">
                [6]
              </a>
              <span>
                CNBC —{" "}
                <a
                  href="https://www.cnbc.com/2026/02/10/musks-xai-loses-second-co-founder-in-two-days-as-jimmy-ba-departs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  Musk&apos;s xAI loses second co-founder in two days as Jimmy
                  Ba departs
                </a>
              </span>
            </li>
            <li id="fn-7" className="flex gap-2">
              <a href="#ref-7" className="text-blue-400/60 shrink-0">
                [7]
              </a>
              <span>
                Forbes —{" "}
                <a
                  href="https://www.forbes.com/sites/conormurray/2026/02/09/anthropic-ai-safety-researcher-warns-of-world-in-peril-in-resignation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  Anthropic AI safety researcher warns of world in peril in
                  resignation
                </a>
              </span>
            </li>
            <li id="fn-8" className="flex gap-2">
              <a href="#ref-8" className="text-blue-400/60 shrink-0">
                [8]
              </a>
              <span>
                CNN —{" "}
                <a
                  href="https://www.cnn.com/2026/02/11/business/openai-anthropic-departures-nightcap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  AI researchers are sounding the alarm on their way out the
                  door
                </a>
              </span>
            </li>
            <li id="fn-9" className="flex gap-2">
              <a href="#ref-9" className="text-blue-400/60 shrink-0">
                [9]
              </a>
              <span>
                OpenAI —{" "}
                <a
                  href="https://openai.com/index/gpt-5-lowers-protein-synthesis-cost/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 underline"
                >
                  GPT-5 lowers the cost of cell-free protein synthesis
                </a>
              </span>
            </li>
          </ol>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-gray-600 text-xs pb-16">
          <p>
            This page is not indexed by search engines and is shared only via
            direct link.
          </p>
        </div>
      </article>
    </main>
  );
}
