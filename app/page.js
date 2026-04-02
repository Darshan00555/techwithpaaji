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

          {/* ── PILLAR CONTENT SECTION: Top 5 Must-Read Guides ── */}
          <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2A9D8F]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="container-premium relative">
              <div className="max-w-3xl mb-12">
                <p className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-[#2A9D8F] mb-4">
                  Foundational Knowledge
                </p>
                <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-semibold text-[#0F3D3E] leading-[1.1] mb-6">
                  The Must-Read Relationship Guides for 2026
                </h2>
                <p className="text-[1.05rem] text-[#0e1e1e]/75 leading-relaxed">
                  Deep-dive into our most comprehensive research and frameworks for building secure, 
                  intentional, and emotionally intelligent partnerships in modern India.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "The Ultimate Guide to Attachment Styles in India",
                    slug: "attachment-styles-relationships-india-guide",
                    desc: "Understand how your childhood wiring affects your adult intimacy and how to move toward security."
                  },
                  {
                    title: "Dealing with Emotionally Unavailable Partners",
                    slug: "emotionally-unavailable-partner-india-signs-and-what-to-do",
                    desc: "How to spot the signs early and protect your emotional health in the Indian dating scene."
                  },
                  {
                    title: "How to Set Healthy Boundaries with Family & Partners",
                    slug: "how-to-set-healthy-boundaries-in-relationship-india",
                    desc: "Practical frameworks for protecting your peace without destroying your connections."
                  },
                  {
                    title: "Recognizing Gaslighting: Signs & Recovery 2026",
                    slug: "gaslighting-relationship-india-2026-signs",
                    desc: "A protective guide to identifying psychological manipulation and reclaiming your reality."
                  },
                  {
                    title: "The Silent Treatment: Emotional Abuse or Space?",
                    slug: "silent-treatment-relationship-emotional-abuse-india",
                    desc: "Decoding the psychology of silence and how to effectively repair high-conflict situations."
                  }
                ].map((pillar, idx) => (
                  <Link 
                    key={pillar.slug}
                    href={`/blog/${pillar.slug}`}
                    className={`group relative p-8 rounded-3xl border border-[#0F3D3E]/10 bg-white transition-all duration-500 hover:border-[#2A9D8F]/30 hover:shadow-[0_20px_50px_rgba(11,46,47,0.08)] ${idx === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[0.6rem] font-bold text-[#2A9D8F] tracking-widest uppercase opacity-70">
                          Pillar Guide 0{idx + 1}
                        </span>
                        {idx === 0 && (
                          <span className="bg-[#2A9D8F]/10 text-[#2A9D8F] text-[0.55rem] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                            Most Comprehensive
                          </span>
                        )}
                      </div>
                      <h3 className={`font-semibold text-[#0F3D3E] group-hover:text-[#2A9D8F] transition-colors duration-300 ${idx === 0 ? 'text-2xl mb-4' : 'text-xl mb-3'}`}>
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-[#0e1e1e]/65 leading-relaxed mb-6">
                        {pillar.desc}
                      </p>
                      <div className="mt-auto flex items-center text-xs font-bold text-[#0F3D3E] uppercase tracking-wider">
                        Read full guide
                        <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

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
