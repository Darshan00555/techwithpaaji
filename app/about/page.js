import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "About Paaji Connect | Relationship Consultant India",
  description:
    "Learn about Paaji Connect, a relationship consultant India clients trust for communication coaching, breakup recovery, and relationship growth strategy.",
  keywords: [
    "relationship consultant India",
    "relationship advice expert India",
    "online relationship coaching India",
    "relationship mindset coaching",
    "couples therapy alternative India",
    "relationship advice India"
  ],
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Paaji Connect | Relationship Consultant India",
    description:
      "Paaji Connect helps couples and individuals improve communication, repair trust, and build emotional safety with practical coaching.",
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "About Paaji Connect"
      }
    ]
  }
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main>
          <section className="section-pad">
            <div className="ambient-light" />
            <div className="container-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">About Paaji Connect</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#0F3D3E] sm:text-6xl">
                Relationship Coaching Built for Real-Life Change
              </h1>
              <p className="mt-5 max-w-3xl text-base text-[#0E1E1E]/80 sm:text-lg">
                Paaji Connect is a practical relationship coaching platform focused on emotional intelligence, communication structure, and measurable outcomes for couples and individuals across India.
              </p>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="glass-card p-7 sm:p-8">
                <h2 className="text-3xl font-semibold text-[#0F3D3E]">Our Philosophy</h2>
                <p className="mt-5 text-base text-[#0E1E1E]/84">
                  Most people receive relationship advice that sounds inspiring but is hard to apply under stress. We close that gap with structured frameworks: clear communication scripts, trust rebuilding systems, and weekly implementation checkpoints.
                </p>
                <p className="mt-4 text-base text-[#0E1E1E]/84">
                  Our coaching is designed for modern Indian relationships where emotional needs, family expectations, and professional pressure often collide. We help clients move from emotional reactivity to intentional partnership behavior.
                </p>
                <p className="mt-4 text-base text-[#0E1E1E]/84">
                  Explore our <Link href="/services" className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/55 underline-offset-4 hover:text-[#2A9D8F]">relationship coaching services India</Link> page to see how we support breakup recovery, communication coaching, and relationship reset journeys.
                </p>
              </article>

              <aside className="glass-card p-7 sm:p-8">
                <h3 className="text-2xl font-semibold text-[#0F3D3E]">What Clients Value</h3>
                <ul className="mt-5 space-y-3 text-sm text-[#0E1E1E]/84">
                  <li>Private and judgment-free support.</li>
                  <li>Actionable guidance, not vague motivation.</li>
                  <li>Faster conflict resolution and better repair quality.</li>
                  <li>Clear plans for trust and emotional reconnection.</li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium rounded-3xl bg-[#0B2E2F] px-6 py-10 text-white sm:px-10 sm:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4A261]">Connect With Us</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
                Looking for a trusted relationship coach in India?
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-white/84 sm:text-base">
                Book a consultation to discuss your relationship goals and receive a clear first-step strategy.
              </p>
              <Link
                href="/contact"
                className="premium-button mt-7 bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880]"
              >
                Book Relationship Consultation
              </Link>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
