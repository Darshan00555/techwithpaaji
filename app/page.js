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
import Link from "next/link";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../lib/seo";
import { getAllPosts } from "../lib/mdxUtils";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  description:
    "Paaji Connect is India's trusted relationship coaching platform specializing in breakup recovery, communication coaching for couples, trust rebuilding, and relationship reset programs.",
  url: SITE_URL,
  telephone: "+91-97738-17031",
  email: "darshan.ntg@gmail.com",
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
    "Relationship Reset Program",
    "Online Relationship Coaching India"
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
  title: "Relationship Coach in India | Paaji Connect",
  description:
    "Work with Paaji Connect — India's trusted relationship coach for breakup recovery, communication coaching for couples, trust rebuilding, and relationship reset programs. Private online sessions.",
  keywords: [
    "relationship coach in India",
    "relationship consultant India",
    "relationship advice expert India",
    "online relationship coaching India",
    "breakup recovery coach India",
    "communication coaching for couples India",
    "trust rebuilding after cheating India",
    "relationship problems solution India",
    "relationship reset program India",
    "private relationship coaching sessions India",
    "Paaji Connect relationship coach"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Relationship Coach in India | Paaji Connect",
    description:
      "India's trusted relationship coaching platform — breakup recovery, communication coaching, trust repair, and relationship reset. Private online sessions.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Paaji Connect — Relationship Coach in India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Relationship Coach in India | Paaji Connect",
    description: "Breakup recovery, communication coaching & trust rebuilding — private online sessions.",
    images: [OG_IMAGE]
  }
};

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 6);

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

          {/* Latest Blog Posts — Server Rendered for SEO */}
          <section style={{ padding: "4rem 0", background: "rgba(15,61,62,0.03)" }}>
            <div className="container-premium">
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2A9D8F", marginBottom: "0.75rem" }}>
                Relationship Advice Blog India
              </p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 600, color: "#0F3D3E", marginBottom: "0.5rem" }}>
                Latest Expert Articles
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(14,30,30,0.7)", marginBottom: "2rem", maxWidth: "600px" }}>
                In-depth relationship advice on breakup recovery, communication, trust, and emotional intelligence — all by Paaji Connect.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                {latestPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    style={{
                      display: "block",
                      padding: "1.25rem",
                      borderRadius: "1rem",
                      border: "1.5px solid rgba(15,61,62,0.12)",
                      background: "rgba(255,255,255,0.72)",
                      textDecoration: "none",
                      transition: "border-color 0.2s ease, box-shadow 0.2s ease"
                    }}
                  >
                    <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2A9D8F", marginBottom: "0.5rem" }}>
                      {post.category}
                    </p>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 600, color: "#0F3D3E", lineHeight: 1.4, marginBottom: "0.4rem" }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: "0.78rem", color: "rgba(14,30,30,0.55)" }}>{post.readTime}</p>
                  </Link>
                ))}
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/blog" className="premium-button" style={{ background: "#0F3D3E", color: "#fff", display: "inline-flex" }}>
                  Read All 68+ Articles →
                </Link>
              </div>
            </div>
          </section>

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

