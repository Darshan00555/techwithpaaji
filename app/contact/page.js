import Link from "next/link";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "Book Relationship Consultation Online",
  description:
    "Book relationship consultation online with Paaji Connect for breakup recovery, communication coaching, and private relationship strategy sessions in India.",
  keywords: [
    "book relationship consultation online",
    "hire relationship coach India",
    "1 on 1 relationship consultation India",
    "relationship coaching services India",
    "private relationship coaching sessions India",
    "paid breakup recovery coach"
  ],
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Book Relationship Consultation Online | Paaji Connect",
    description:
      "Connect with Paaji Connect to book a private relationship consultation and get a clear action plan.",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Book relationship consultation online"
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main style={{ paddingTop: "68px" }}>
          <section className="section-pad">
            <div className="ambient-light" />
            <div className="container-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">Contact</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#0F3D3E] sm:text-6xl">
                Book a Private Relationship Consultation
              </h1>
              <p className="mt-5 max-w-3xl text-base text-[#0E1E1E]/80 sm:text-lg">
                Share your relationship goals and challenges. We will respond with a tailored roadmap recommendation for breakup recovery help, communication coaching, or relationship reset.
              </p>
            </div>
          </section>

          <ContactForm />

          <section className="section-pad divider-line pt-0">
            <div className="container-premium rounded-3xl bg-[#0B2E2F] px-6 py-10 text-white sm:px-10 sm:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4A261]">
                Prefer direct email?
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
                darshan.ntg@gmail.com
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-white/84 sm:text-base">
                Mention your current situation, target outcome, and preferred call timing.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="mailto:darshan.ntg@gmail.com"
                  className="premium-button bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880]"
                >
                  Email Paaji Connect
                </Link>
                <Link
                  href="/services"
                  className="premium-button border border-white/24 bg-white/8 text-white hover:border-[#F4A261] hover:text-[#F4A261]"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
