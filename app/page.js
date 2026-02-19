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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  description:
    "Paaji Connect is a relationship coaching platform in India specializing in breakup recovery, communication coaching, and relationship reset programs for couples and individuals.",
  url: SITE_URL,
  sameAs: [
    "https://www.instagram.com/paaji.connect",
    "https://www.youtube.com/@paajiconnect"
  ],
  areaServed: {
    "@type": "Country",
    name: "India"
  },
  serviceType: [
    "Breakup Recovery Coaching",
    "Relationship Communication Coaching",
    "Couples Relationship Coaching",
    "Relationship Reset Program"
  ],
  priceRange: "₹₹",
  inLanguage: ["en", "hi"],
  image: `${SITE_URL}${OG_IMAGE}`,
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/contact`
    },
    result: {
      "@type": "Reservation",
      name: "Book a Relationship Coaching Session"
    }
  }
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Footer />
    </div>
  );
}
