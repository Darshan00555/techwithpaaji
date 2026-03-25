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
  address: {
    "@type": "PostalAddress",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    "latitude": "23.0225",
    "longitude": "72.5714"
  },
  sameAs: [
    "https://www.instagram.com/paaji.connect",
    "https://www.youtube.com/@paajiconnect"
  ],
  areaServed: [
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Delhi" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "City", "name": "Pune" },
    { "@type": "Country", "name": "India" }
  ],
  serviceType: [
    "Breakup Recovery Coaching",
    "Relationship Communication Coaching",
    "Couples Relationship Coaching",
    "Relationship Reset Program",
    "Online Relationship Coaching India"
  ],
  priceRange: "₹₹",
  openingHours: "Mo-Su 09:00-21:00",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL
    }
  ]
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
  title: "Expert Relationship Coach in India | Paaji Connect",
  description:
    "Work with Paaji Connect — India's trusted relationship coach for breakup recovery, communication coaching for couples, and trust rebuilding.",
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
    title: "Expert Relationship Coach in India | Paaji Connect",
    description:
      "India's trusted relationship coaching platform — breakup recovery, communication coaching, trust repair, and relationship reset programs.",
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
    title: "Expert Relationship Coach in India | Paaji Connect",
    description: "Breakup recovery, communication coaching & trust rebuilding programs by Paaji Connect.",
    images: [OG_IMAGE]
  }
};

export default function HomePage() {
  const allPosts = getAllPosts();
  const latestPosts = allPosts.slice(0, 6);
  const totalPosts = allPosts.length;

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
          <section className="py-16 bg-[#0f3d3e]/[0.03]">
            <div className="container-premium">
              <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#2A9D8F] mb-3">
                Relationship Advice Blog India
              </p>
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-semibold text-[#0F3D3E] mb-2">
                Latest Expert Articles
              </h2>
              <p className="text-[0.95rem] text-[#0e1e1e]/70 mb-8 max-w-[600px]">
                In-depth relationship advice on breakup recovery, communication, trust, and emotional intelligence — all by Paaji Connect.
              </p>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
                {latestPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block p-5 rounded-2xl border-[1.5px] border-[#0f3d3e]/[0.12] bg-white/72 no-underline transition-all duration-200 ease-in-out hover:border-[#0f3d3e]/30 hover:shadow-sm"
                  >
                    <p className="text-[0.65rem] font-bold tracking-[0.14em] uppercase text-[#2A9D8F] mb-2">
                      {post.category}
                    </p>
                    <h3 className="text-[0.95rem] font-semibold text-[#0F3D3E] leading-[1.4] mb-1.5">
                      {post.title}
                    </h3>
                    <p className="text-[0.78rem] text-[#0e1e1e]/[0.55]">{post.readTime}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/blog" className="premium-button bg-[#0F3D3E] text-white inline-flex">
                  Read All {totalPosts}+ Articles →
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Footer />
    </div>
  );
}
