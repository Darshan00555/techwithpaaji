import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo";

const faqs = [
  {
    question: "How do I know if I need a breakup recovery coach in India?",
    answer:
      "If you feel emotionally stuck, repeatedly check your ex, struggle with sleep or focus, and cannot move forward despite trying, structured coaching can help you recover faster and more safely."
  },
  {
    question: "Can breakup recovery coaching help if I want to reconnect with my ex?",
    answer:
      "Yes. We first stabilize your emotions, then evaluate if reconnection is healthy. If it is, we design a respectful communication strategy so you approach your ex without pressure or desperation."
  },
  {
    question: "How long does breakup emotional recovery usually take?",
    answer:
      "Many clients feel significant emotional relief within 3 to 6 weeks when they follow the framework consistently. Deeper trust and relationship readiness often take 8 to 12 weeks."
  },
  {
    question: "Is this better than only talking to friends after a breakup?",
    answer:
      "Friends can provide support, but coaching provides structure, accountability, and psychological tools. It converts emotional pain into measurable recovery steps."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Breakup Recovery Coaching India",
  description:
    "Structured breakup recovery coaching program in India for emotional healing, confidence rebuilding, and healthy next-step decisions after heartbreak. Includes private sessions, weekly frameworks, and accountability.",
  provider: {
    "@type": "Organization",
    name: "Paaji Connect",
    url: "https://techwithpaaji.in",
    telephone: "+91-97738-17031",
    email: "darshan.ntg@gmail.com",
    areaServed: "India",
    sameAs: [
      "https://www.instagram.com/paaji.connect",
      "https://www.youtube.com/@paajiconnect"
    ]
  },
  serviceType: "Relationship Coaching",
  areaServed: {
    "@type": "Country",
    name: "India"
  },
  url: "https://techwithpaaji.in/breakup-recovery",
  image: "https://techwithpaaji.in/images/og-cover.svg",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    priceRange: "₹₹",
    url: "https://techwithpaaji.in/contact"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Breakup Recovery Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emotional Stabilization Session",
          description: "Reduce emotional overwhelm, control anxiety spikes, and stop panic texting."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pattern & Relationship Decode",
          description: "Map communication gaps, attachment behaviors, and trust ruptures."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Direction Rebuild Program",
          description: "Move forward confidently or reconnect safely with a structured communication strategy."
        }
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://techwithpaaji.in" },
    { "@type": "ListItem", position: 2, name: "Breakup Recovery Coaching India", item: "https://techwithpaaji.in/breakup-recovery" }
  ]
};

export const metadata = {
  title: "Breakup Recovery Coach India | Paaji Connect",
  description:
    "Work with a breakup recovery coach India clients trust — emotional healing, confidence rebuilding, and safe reconnection strategy after heartbreak. Private sessions available online.",
  keywords: [
    "breakup recovery coach India",
    "breakup emotional recovery help India",
    "how to recover from breakup India",
    "how to get ex back safely",
    "how to rebuild trust after breakup",
    "online relationship coaching India",
    "breakup coach online India",
    "relationship recovery India",
    "moving on after heartbreak India",
    "emotional healing after breakup"
  ],
  alternates: {
    canonical: "/breakup-recovery"
  },
  openGraph: {
    title: "Breakup Recovery Coach India | Paaji Connect",
    description:
      "Structured breakup recovery coaching for emotional healing, confidence rebuilding, and healthy next-step decisions after heartbreak.",
    url: `${SITE_URL}/breakup-recovery`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Breakup recovery coach India - Paaji Connect"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Breakup Recovery Coach India | Paaji Connect",
    description: "Structured breakup recovery coaching — emotional healing & confidence rebuilding.",
    images: [OG_IMAGE]
  }
};

export default function BreakupRecoveryPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main style={{ paddingTop: "68px" }}>
          <section className="section-pad">
            <div className="ambient-light" />
            <div className="container-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
                Breakup Recovery Program
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#0F3D3E] sm:text-6xl">
                Breakup Recovery Coaching in India
              </h1>
              <p className="mt-5 max-w-3xl text-base text-[#0E1E1E]/80 sm:text-lg">
                If heartbreak is affecting your confidence, focus, and emotional stability, get structured breakup recovery help from a trusted
                <Link
                  href="/"
                  className="ml-1 font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/55 underline-offset-4 transition-colors duration-200 hover:text-[#2A9D8F]"
                >
                  relationship coach in India
                </Link>
                .
              </p>
              <Link
                href="/contact"
                className="premium-button mt-7 bg-[#F4A261] text-[#0F3D3E] shadow-[0_12px_24px_rgba(244,162,97,0.3)] hover:bg-[#f7b880]"
              >
                Book Breakup Recovery Session
              </Link>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-6 md:grid-cols-2">
              <article className="glass-card p-7">
                <h2 className="text-2xl font-semibold text-[#0F3D3E]">Signs You Need Professional Help</h2>
                <ul className="mt-5 space-y-3 text-sm text-[#0E1E1E]/84">
                  <li>You keep cycling between hope and panic every day.</li>
                  <li>You cannot stop checking messages, social media, or old memories.</li>
                  <li>Your sleep, appetite, or work performance is dropping.</li>
                  <li>You feel intense guilt, anger, or fear of being alone.</li>
                  <li>You are unsure whether to reconnect or move on safely.</li>
                </ul>
              </article>

              <article className="glass-card p-7">
                <h2 className="text-2xl font-semibold text-[#0F3D3E]">Why Breakups Hurt Psychologically</h2>
                <p className="mt-5 text-sm text-[#0E1E1E]/84">
                  Breakups activate emotional pain circuits similar to physical pain. Your brain loses a familiar emotional attachment, and your nervous system interprets that loss as danger. This can create obsessive thoughts, emotional withdrawal, and impulsive behavior. With the right strategy, these reactions can be regulated and replaced with emotional resilience.
                </p>
              </article>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium space-y-6">
              <h2 className="text-3xl font-semibold text-[#0F3D3E] sm:text-4xl">3 Step Recovery Framework</h2>
              <article className="glass-card p-7">
                <h3 className="text-2xl font-semibold text-[#0F3D3E]">Step 1: Stabilize Emotional Storm</h3>
                <p className="mt-4 text-base text-[#0E1E1E]/84">
                  We reduce emotional overwhelm first. You get practical tools to control anxiety spikes, stop panic texting, and rebuild your daily rhythm. This creates a safe baseline for clear decisions.
                </p>
              </article>
              <article className="glass-card p-7">
                <h3 className="text-2xl font-semibold text-[#0F3D3E]">Step 2: Decode Pattern and Meaning</h3>
                <p className="mt-4 text-base text-[#0E1E1E]/84">
                  We map what happened in the relationship: communication gaps, attachment behaviors, emotional triggers, and trust ruptures. This removes confusion and prevents repeated mistakes.
                </p>
              </article>
              <article className="glass-card p-7">
                <h3 className="text-2xl font-semibold text-[#0F3D3E]">Step 3: Rebuild Direction</h3>
                <p className="mt-4 text-base text-[#0E1E1E]/84">
                  You choose a healthy path with support: move forward confidently, rebuild trust with boundaries, or reconnect safely with a structured communication approach.
                </p>
              </article>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="glass-card p-7 sm:p-8">
                <h2 className="text-3xl font-semibold text-[#0F3D3E]">How Sessions Work</h2>
                <ol className="mt-5 space-y-4 text-base text-[#0E1E1E]/84">
                  <li>1. A private intake call to understand your breakup story and goals.</li>
                  <li>2. A custom recovery roadmap with weekly emotional and behavioral tasks.</li>
                  <li>3. Structured coaching sessions with accountability and progress tracking.</li>
                  <li>4. Optional transition into <Link href="/communication-coaching" className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/55 underline-offset-4 hover:text-[#2A9D8F]">communication coaching</Link> or <Link href="/relationship-reset" className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/55 underline-offset-4 hover:text-[#2A9D8F]">relationship reset</Link> when needed.</li>
                </ol>
              </article>

              <aside className="glass-card p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2A9D8F]">Need Immediate Support?</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0F3D3E]">Speak to a Relationship Consultant Today</h3>
                <p className="mt-4 text-sm text-[#0E1E1E]/82">
                  Book a confidential consultation to get a practical action plan for emotional recovery and next-step clarity.
                </p>
                <Link
                  href="/contact"
                  className="premium-button mt-6 w-full bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880]"
                >
                  Get Recovery Plan
                </Link>
              </aside>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium">
              <h2 className="text-3xl font-semibold text-[#0F3D3E] sm:text-4xl">FAQs</h2>
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4A261]">Strong Next Step</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
                Stop carrying breakup pain alone. Start a structured recovery.
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-white/84 sm:text-base">
                Work with a private <Link href="/contact" className="font-semibold underline decoration-[#F4A261]/60 underline-offset-4">relationship consultant</Link> to rebuild emotional confidence and relationship readiness.
              </p>
              <Link
                href="/contact"
                className="premium-button mt-7 bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880]"
              >
                Book Consultation Online
              </Link>
            </div>
          </section>
        </main>
      </PageTransition>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
          }))
        })
      }} />
      <Footer />
    </div>
  );
}
