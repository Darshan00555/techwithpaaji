import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "How to Fix Relationship Problems | Relationship Reset",
  description:
    "Relationship Reset by Paaji Connect helps couples fix relationship problems, rebuild trust, and reconnect emotionally with structured coaching.",
  keywords: [
    "how to fix relationship problems",
    "how to save a relationship",
    "trust issues in relationship",
    "relationship growth strategy",
    "relationship conflict resolution",
    "how to reconnect emotionally with partner"
  ],
  alternates: {
    canonical: "/relationship-reset"
  },
  openGraph: {
    title: "How to Fix Relationship Problems | Paaji Connect",
    description:
      "A practical relationship reset program for couples who want to stop conflict loops and rebuild trust with structure.",
    url: `${SITE_URL}/relationship-reset`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to fix relationship problems"
      }
    ]
  }
};

export default function RelationshipResetPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main>
          <section className="section-pad">
            <div className="ambient-light" />
            <div className="container-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">Relationship Reset Program</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#0F3D3E] sm:text-6xl">
                Relationship Reset: A Practical Way to Fix Relationship Problems
              </h1>
              <p className="mt-5 max-w-3xl text-base text-[#0E1E1E]/80 sm:text-lg">
                If you and your partner are tired of repeated conflicts, emotional distance, and unresolved trust issues in relationship dynamics, this program helps you rebuild with a clear step-by-step framework.
              </p>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-6 md:grid-cols-3">
              <article className="glass-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2A9D8F]">Phase 1</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#0F3D3E]">Pattern Diagnosis</h2>
                <p className="mt-4 text-sm text-[#0E1E1E]/84">
                  We identify conflict triggers, emotional shutdown patterns, and communication gaps so both partners can see exactly what keeps the relationship stuck.
                </p>
              </article>
              <article className="glass-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2A9D8F]">Phase 2</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#0F3D3E]">Trust Rebuild System</h2>
                <p className="mt-4 text-sm text-[#0E1E1E]/84">
                  You get repair protocols, accountability agreements, and emotional safety rituals to rebuild trust after repeated disappointments.
                </p>
              </article>
              <article className="glass-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2A9D8F]">Phase 3</p>
                <h2 className="mt-3 text-2xl font-semibold text-[#0F3D3E]">Connection Integration</h2>
                <p className="mt-4 text-sm text-[#0E1E1E]/84">
                  We help you install weekly systems for communication, emotional check-ins, and conflict recovery so improvement becomes sustainable.
                </p>
              </article>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="glass-card p-7 sm:p-8">
                <h2 className="text-3xl font-semibold text-[#0F3D3E]">Who This Program Is For</h2>
                <ul className="mt-5 space-y-3 text-base text-[#0E1E1E]/84">
                  <li>Couples who keep repeating the same arguments.</li>
                  <li>Partners dealing with emotional disconnection and low trust.</li>
                  <li>Couples trying to save a relationship without entering long-term therapy.</li>
                  <li>People who want practical weekly coaching, not only theoretical advice.</li>
                </ul>
                <p className="mt-5 text-base text-[#0E1E1E]/84">
                  If separation risk is high, you can combine this service with <Link href="/breakup-recovery" className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/55 underline-offset-4 hover:text-[#2A9D8F]">breakup recovery help</Link>. If communication is your biggest bottleneck, pair this with <Link href="/communication-coaching" className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/55 underline-offset-4 hover:text-[#2A9D8F]">communication coaching</Link>.
                </p>
              </article>

              <aside className="glass-card p-7 sm:p-8">
                <h3 className="text-2xl font-semibold text-[#0F3D3E]">Expected Outcomes</h3>
                <ul className="mt-5 space-y-3 text-sm text-[#0E1E1E]/84">
                  <li>Reduced escalation frequency during disagreements.</li>
                  <li>Faster conflict repair and less emotional residue.</li>
                  <li>Clearer boundaries, expectations, and daily communication rhythm.</li>
                  <li>Renewed emotional connection and relationship confidence.</li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium rounded-3xl bg-[#0B2E2F] px-6 py-10 text-white sm:px-10 sm:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4A261]">Take the Next Step</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-5xl">
                Ready to save your relationship with structure and support?
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-white/84 sm:text-base">
                Book a private consultation with a <Link href="/contact" className="font-semibold underline decoration-[#F4A261]/60 underline-offset-4">relationship consultant</Link> and receive a customized reset plan.
              </p>
              <Link
                href="/contact"
                className="premium-button mt-7 bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880]"
              >
                Hire Relationship Coach India
              </Link>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
