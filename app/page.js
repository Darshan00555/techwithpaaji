import CTA from "../components/CTA";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Process from "../components/Process";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../lib/seo";

export const metadata = {
  title: "Relationship Coach in India",
  description:
    "Work with Paaji Connect, a trusted relationship coach in India, for breakup recovery help, communication coaching, and practical relationship growth strategies.",
  keywords: [
    "relationship coach in India",
    "relationship consultant India",
    "relationship advice expert India",
    "online relationship coaching India",
    "relationship problems solution",
    "private relationship coaching sessions India"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Relationship Coach in India | Paaji Connect",
    description:
      "Relationship coaching in India for trust repair, communication skills, and emotional reconnect plans.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Paaji Connect relationship coaching in India"
      }
    ]
  }
};

export default function HomePage() {
  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main>
          <Hero />
          <Services />
          <Process />
          <Testimonials />
          <FAQ />
          <ContactForm />
          <CTA />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
