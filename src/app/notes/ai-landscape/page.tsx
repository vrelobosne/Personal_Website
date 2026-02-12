import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Landscape 2026",
  robots: { index: false, follow: false },
};

function SourceLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 underline"
    >
      {children}
    </a>
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
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="max-w-full rounded-lg mx-auto"
      />
      <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function AILandscapePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-gray-300 py-16 px-6 sm:px-8">
      {/* Back button */}
      <div className="max-w-3xl mx-auto mb-12">
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

      <article className="max-w-3xl mx-auto">
        {/* Hero image */}
        <ArticleImage
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini-3_deep-think_meta_dark_Fm70Cou.width-1300.png"
          alt="Gemini 3 Deep Think announcement banner"
          caption="Google DeepMind's Gemini Deep Think — one of several breakthroughs reshaping the AI landscape."
        />

        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          The AI Landscape
        </h1>

        <p className="text-gray-500 text-sm mb-10 border-b border-gray-800 pb-6">
          As of February 12, 2026
        </p>

        {/* Intro */}
        <div className="text-lg leading-relaxed space-y-6">
          <p>
            The AI landscape today is dominated by a handful of companies —
            OpenAI (ChatGPT), Anthropic (Claude), Google DeepMind (Gemini), Meta
            (Llama), and Elon Musk&apos;s xAI (Grok) in the US, plus
            China&apos;s DeepSeek, which shocked the industry by building models
            rivaling US leaders for{" "}
            <SourceLink href="https://www.cnn.com/2025/01/27/tech/deepseek-stocks-ai-china/index.html">
              a fraction of the cost
            </SourceLink>
            . These systems got so good so fast through a series of compounding
            breakthroughs: making models massively bigger (2020–2023), training
            them with human feedback so they&apos;re actually useful (2022),
            teaching them to reason step-by-step like showing your work on an
            exam (2024), and most recently, letting them &quot;think
            longer&quot; on hard problems for dramatically better results
            (2025–2026).
          </p>

          <hr className="border-gray-800 my-10" />

          {/* Section 1 */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            1. AI Can Now Work Autonomously for 6+ Hours
          </h2>

          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              A nonprofit called{" "}
              <SourceLink href="https://metr.org/time-horizons/">
                METR
              </SourceLink>{" "}
              measures how long AI can work independently on professional-level
              tasks.
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
              Separately,{" "}
              <SourceLink href="https://www.anthropic.com/news/claude-opus-4-6">
                Claude Opus 4.6
              </SourceLink>{" "}
              was tested managing a 50-person organization across 6 code
              repositories — closing issues, delegating tasks, and escalating to
              humans when appropriate.
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

          {/* Section 2 */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            2. AI Is Solving PhD-Level Math and Generating Publishable Research
          </h2>

          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              Google DeepMind announced{" "}
              <SourceLink href="https://deepmind.google/blog/accelerating-mathematical-and-scientific-discovery-with-gemini-deep-think/">
                Gemini Deep Think
              </SourceLink>{" "}
              — an AI research agent that autonomously works on open problems in
              math, physics, and computer science.
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

          <ArticleImage
            src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/original_images/DeepThink-maths-science-discovery__figure-01-chart__dark.svg"
            alt="IMO-ProofBench results showing Gemini Deep Think achieving ~92% on advanced proof benchmarks"
            caption="IMO-ProofBench performance: from gold medal to ~92% on advanced proofs. Source: Google DeepMind"
          />

          {/* Section 3 */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            3. AI Is Starting to Improve Itself
          </h2>

          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              OpenAI released GPT-5.3-Codex, described as{" "}
              <SourceLink href="https://www.nbcnews.com/tech/innovation/openai-says-new-codex-coding-model-helped-build-rcna257521">
                &quot;the first model that was instrumental in creating
                itself&quot;
              </SourceLink>{" "}
              — early versions debugged their own training process and managed
              their own deployment. The model operates 25% faster than its
              predecessor while achieving state-of-the-art performance with
              reduced computing resources.
            </li>
            <li>
              CEO Sam Altman aims for an automated AI research intern by
              September 2026 and a &quot;true automated AI researcher by March
              of 2028.&quot;
            </li>
            <li>
              A{" "}
              <SourceLink href="https://www.cnbc.com/2026/02/10/musks-xai-loses-second-co-founder-in-two-days-as-jimmy-ba-departs.html">
                departing xAI co-founder
              </SourceLink>{" "}
              (half the founding team has now left — Jimmy Ba and Tony Wu both
              departed within two days of each other, following SpaceX&apos;s
              acquisition of xAI) predicts &quot;recursive self-improvement
              loops will go live within 12 months.&quot;
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
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            4. The People Hired to Keep AI Safe Are Quitting
          </h2>

          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              Anthropic&apos;s head of AI safety,{" "}
              <strong className="text-white">Mrinank Sharma</strong>,{" "}
              <SourceLink href="https://www.forbes.com/sites/conormurray/2026/02/09/anthropic-ai-safety-researcher-warns-of-world-in-peril-in-resignation/">
                resigned publicly
              </SourceLink>
              , warning &quot;the world is in peril.&quot; Sharma, who holds a
              PhD in Machine Learning from Oxford, led Anthropic&apos;s
              Safeguards Research Team since 2025, building defenses against AI
              misuse including work on bioweapon risk prevention.
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
              This is part of a{" "}
              <SourceLink href="https://www.cnn.com/2026/02/11/business/openai-anthropic-departures-nightcap">
                broader pattern
              </SourceLink>{" "}
              — multiple safety researchers have left both Anthropic and OpenAI
              in recent months, with one stating &quot;safety culture has taken
              a backseat to shiny products.&quot; OpenAI disbanded its Mission
              Alignment team after just 16 months, and fired safety executive
              Ryan Beiermeister after he opposed the rollout of adult content on
              ChatGPT.
            </li>
          </ul>

          <ArticleImage
            src="https://americanbazaaronline.com/wp-content/uploads/2026/02/Mrinank-Sharma.png"
            alt="Mrinank Sharma, former head of AI safety at Anthropic"
            caption="Mrinank Sharma resigned from Anthropic warning 'the world is in peril.' Source: American Bazaar"
          />

          {/* Section 5 */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-white mt-12 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            5. AI Ran Its Own Lab Experiments
          </h2>

          <ul className="list-disc list-outside ml-5 space-y-3">
            <li>
              OpenAI connected their AI to a{" "}
              <SourceLink href="https://openai.com/index/gpt-5-lowers-protein-synthesis-cost/">
                robotic wet lab
              </SourceLink>
              .
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

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
          <p>
            This page is not indexed by search engines and is shared only via
            direct link.
          </p>
        </div>
      </article>
    </main>
  );
}
