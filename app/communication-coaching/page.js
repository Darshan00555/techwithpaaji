import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo";

const faqs = [
  {
    question: "Can communication coaching for couples reduce daily arguments?",
    answer:
      "Yes. With structured communication tools, most couples reduce argument intensity and improve repair speed within a few weeks."
  },
  {
    question: "Is this suitable if only one partner communicates aggressively?",
    answer:
      "Yes. We work on both trigger management and response strategy so one partner can stop escalation while inviting healthier participation from the other."
  },
  {
    question: "How is this different from generic relationship advice?",
    answer:
      "We use a measurable communication framework with scripts, emotional regulation methods, and weekly implementation tracking."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export const metadata = {
  title: "Communication Coaching for Couples",
  description:
    "Communication coaching for couples in India to stop repeated arguments, improve listening, and build emotional safety in relationships.",
  keywords: [
    "communication coaching for couples",
    "how to stop fighting in relationship",
    "relationship conflict resolution",
    "couples communication skills",
    "how to fix communication problems in marriage",
    "emotional intelligence in relationships"
  ],
  alternates: {
    canonical: "/communication-coaching"
  },
  openGraph: {
    title: "Communication Coaching for Couples | Paaji Connect",
    description:
      "Practical communication coaching to help couples de-escalate conflict, rebuild trust, and reconnect emotionally.",
    url: `${SITE_URL}/communication-coaching`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Communication coaching for couples"
      }
    ]
  }
};

export default function CommunicationCoachingPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main style={{ paddingTop: "68px" }}>
          <section className="section-pad">
            <div className="ambient-light" />
            <div className="container-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
                Communication Coaching
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#0F3D3E] sm:text-6xl">
                Communication Coaching for Couples in India
              </h1>
              <p className="mt-5 max-w-3xl text-base text-[#0E1E1E]/80 sm:text-lg">
                Learn practical conversation frameworks from a trusted <Link href="/contact" className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/55 underline-offset-4 hover:text-[#2A9D8F]">relationship consultant</Link> to reduce misunderstandings and rebuild emotional safety.
              </p>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-6 md:grid-cols-2">
              <article className="glass-card p-7">
                <h2 className="text-2xl font-semibold text-[#0F3D3E]">Common Communication Mistakes</h2>
                <ul className="mt-5 space-y-3 text-sm text-[#0E1E1E]/84">
                  <li>Talking to win instead of talking to understand.</li>
                  <li>Using tone and labels that trigger defensiveness.</li>
                  <li>Bringing multiple old issues into one conversation.</li>
                  <li>Assuming intent instead of clarifying meaning.</li>
                  <li>Trying to solve conflict without emotional regulation.</li>
                </ul>
              </article>

              <article className="glass-card p-7">
                <h2 className="text-2xl font-semibold text-[#0F3D3E]">Practical Communication Model</h2>
                <p className="mt-5 text-sm text-[#0E1E1E]/84">
                  We use a five-part model: Intent, Observation, Emotional Impact, Request, and Closure. This structure keeps hard conversations focused and respectful. Instead of spiraling into blame, couples learn to name one issue clearly and move toward one practical resolution.
                </p>
              </article>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="glass-card p-7 sm:p-8">
                <h2 className="text-3xl font-semibold text-[#0F3D3E]">Emotional Intelligence Method</h2>
                <p className="mt-5 text-base text-[#0E1E1E]/84">
                  Healthy communication starts with nervous system regulation. If your body feels threatened, your words become reactive. We teach emotional intelligence in relationships through simple repeatable tools: pause language, validation statements, emotional naming, and repair prompts. These methods reduce conflict intensity and improve mutual respect.
                </p>
                <p className="mt-4 text-base text-[#0E1E1E]/84">
                  This is especially effective for couples who ask how to stop constant arguments in relationship life. Once both partners recognize escalation cues and return to a shared script, conversations become safer and more productive.
                </p>
                <p className="mt-4 text-base text-[#0E1E1E]/84">
                  If deeper trust issues are present, we may combine this with <Link href="/relationship-reset" className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/55 underline-offset-4 hover:text-[#2A9D8F]">relationship reset</Link> or <Link href="/breakup-recovery" className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/55 underline-offset-4 hover:text-[#2A9D8F]">breakup recovery help</Link> for stronger long-term outcomes.
                </p>
              </article>

              <aside className="glass-card p-7 sm:p-8">
                <h3 className="text-2xl font-semibold text-[#0F3D3E]">Real Transformation Examples</h3>
                <div className="mt-5 space-y-4 text-sm text-[#0E1E1E]/84">
                  <p>Couples who argued daily reduced fights to one constructive check-in per week.</p>
                  <p>Partners with months of emotional distance restarted weekly connection rituals.</p>
                  <p>High-stress professionals learned to discuss money, family, and intimacy without escalation.</p>
                </div>
              </aside>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium">
              <h2 className="text-3xl font-semibold text-[#0F3D3E] sm:text-4xl">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <article key={faq.question} className="glass-card p-6">
                    <h3 className="text-xl font-semibold text-[#0F3D3E]">{faq.question}</h3>
                    <p className="mt-3 text-sm text-[#0E1E1E]/82">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium rounded-3xl bg-[#0B2E2F] px-6 py-10 text-white sm:px-10 sm:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4A261]">Take Action</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
                Stop fighting in circles. Build communication that actually works.
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-white/84 sm:text-base">
                Book a private session with a <Link href="/" className="font-semibold underline decoration-[#F4A261]/60 underline-offset-4">relationship coach in India</Link> and get a custom communication roadmap.
              </p>
              <Link
                href="/contact"
                className="premium-button mt-7 bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880]"
              >
                Book Relationship Consultation Online
              </Link>
            </div>
          </section>
        </main>
      </PageTransition>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Footer />
    </div>
  );
}
