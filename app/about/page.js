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
        <main style={{ paddingTop: "68px" }}>
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
            <div className="container-premium">
              <div className="text-center">
                <p className="inline-flex rounded-full border border-[#2A9D8F]/20 bg-white/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
                  Our Team
                </p>
                <h2 className="mt-6 text-4xl font-semibold text-[#0F3D3E] sm:text-5xl lg:text-6xl">
                  Meet the People Behind<br />Paaji Connect
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base text-[#0E1E1E]/80 sm:text-lg">
                  Our team brings together expertise in relationship coaching, emotional intelligence, and practical communication strategies to help you build stronger connections.
                </p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
                {/* Director Card */}
                <article className="glass-card group relative overflow-hidden p-8 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(11,46,47,0.16)] sm:p-10">
                  <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-[#F4A261]/10 to-transparent blur-3xl" />
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F4A261]/30 to-[#2A9D8F]/30 blur-xl transition-all duration-300 group-hover:blur-2xl" />
                      <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#0F3D3E] via-[#2A9D8F] to-[#0F3D3E] text-5xl font-bold text-white shadow-2xl ring-4 ring-white/50 transition-transform duration-300 group-hover:scale-105 sm:h-48 sm:w-48 sm:text-6xl">
                        DS
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <h3 className="text-3xl font-semibold text-[#0F3D3E] sm:text-4xl">
                        Darshan Singh
                      </h3>
                      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F4A261]/10 to-[#F4A261]/5 px-5 py-2">
                        <div className="h-2 w-2 rounded-full bg-[#F4A261]" />
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#F4A261]">
                          Director
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#2A9D8F]/40 to-transparent" />

                    <p className="mt-6 text-base leading-relaxed text-[#0E1E1E]/80 sm:text-lg">
                      Leading relationship coaching initiatives with a focus on emotional intelligence and structured communication frameworks for couples across India.
                    </p>

                    <div className="mt-8 grid w-full gap-3">
                      <div className="flex items-center gap-3 rounded-xl border border-[#0F3D3E]/10 bg-white/70 px-4 py-3 text-left">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/10">
                          <svg className="h-4 w-4 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-[#0E1E1E]/85">Strategic Relationship Planning</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl border border-[#0F3D3E]/10 bg-white/70 px-4 py-3 text-left">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/10">
                          <svg className="h-4 w-4 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-[#0E1E1E]/85">Emotional Intelligence Coaching</span>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Partner Card */}
                <article className="glass-card group relative overflow-hidden p-8 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(11,46,47,0.16)] sm:p-10">
                  <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-[#2A9D8F]/10 to-transparent blur-3xl" />
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2A9D8F]/30 to-[#F4A261]/30 blur-xl transition-all duration-300 group-hover:blur-2xl" />
                      <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#2A9D8F] via-[#0F3D3E] to-[#2A9D8F] text-5xl font-bold text-white shadow-2xl ring-4 ring-white/50 transition-transform duration-300 group-hover:scale-105 sm:h-48 sm:w-48 sm:text-6xl">
                        HK
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <h3 className="text-3xl font-semibold text-[#0F3D3E] sm:text-4xl">
                        Hemant Kumar
                      </h3>
                      <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F4A261]/10 to-[#F4A261]/5 px-5 py-2">
                        <div className="h-2 w-2 rounded-full bg-[#F4A261]" />
                        <p className="text-sm font-semibold uppercase tracking-wider text-[#F4A261]">
                          Partner · Senior Assistant
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#2A9D8F]/40 to-transparent" />

                    <p className="mt-6 text-base leading-relaxed text-[#0E1E1E]/80 sm:text-lg">
                      Supporting relationship coaching programs with expertise in client engagement, program coordination, and implementation support.
                    </p>

                    <div className="mt-8 grid w-full gap-3">
                      <div className="flex items-center gap-3 rounded-xl border border-[#0F3D3E]/10 bg-white/70 px-4 py-3 text-left">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/10">
                          <svg className="h-4 w-4 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-[#0E1E1E]/85">Client Engagement & Support</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl border border-[#0F3D3E]/10 bg-white/70 px-4 py-3 text-left">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2A9D8F]/10">
                          <svg className="h-4 w-4 text-[#2A9D8F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-[#0E1E1E]/85">Program Coordination</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
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
