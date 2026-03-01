import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";
import BlogFilterClient from "../../components/BlogFilterClient";
import { getAllPosts } from "../../lib/mdxUtils";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "Relationship Advice Blog India | 68+ Expert Articles",
  description:
    "Read 68+ long-form relationship advice articles in India on breakup recovery, communication coaching for couples, trust rebuilding, love bombing, attachment styles, and emotional intelligence. Expert guidance by Paaji Connect.",
  keywords: [
    "relationship advice India",
    "online relationship coaching India",
    "how to fix relationship problems",
    "how to rebuild trust after breakup",
    "communication coaching for couples",
    "relationship conflict resolution",
    "breakup recovery India",
    "toxic relationship signs",
    "love bombing India",
    "attachment styles India",
    "relationship coach India blog",
    "relationship tips India 2026"
  ],
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Relationship Advice Blog India | 68+ Expert Articles | Paaji Connect",
    description:
      "68+ authority relationship articles: communication coaching, trust repair, breakup recovery, love bombing, attachment styles and more.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Relationship advice blog India - Paaji Connect"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Relationship Advice Blog India | Paaji Connect",
    description: "68+ expert relationship articles covering breakup recovery, communication, trust, and more.",
    images: [OG_IMAGE]
  }
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  // Blog listing schema — helps Google parse the index as a blog collection
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Relationship Advice Blog`,
    url: `${SITE_URL}/blog`,
    description:
      "68+ practical, long-form relationship advice articles covering breakup recovery, communication skills, trust repair, love bombing, attachment styles, and emotional intelligence for couples and individuals in India.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      author: { "@type": "Organization", name: post.author },
      keywords: post.keywords.join(", ")
    }))
  };

  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main style={{ paddingTop: "68px" }}>
          {/* ── Hero header ── */}
          <section className="section-pad">
            <div className="ambient-light" />
            <div className="container-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
                Paaji Connect Relationship Advice Blog India
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#0F3D3E] sm:text-6xl">
                Actionable Relationship Advice for Couples and Individuals in India
              </h1>
              <p className="mt-5 max-w-3xl text-base text-[#0E1E1E]/80 sm:text-lg">
                68+ expert articles on breakup recovery, communication coaching for couples,
                trust rebuilding, love bombing, attachment styles, toxic relationships,
                and long-term relationship growth strategy — by Paaji Connect, India&apos;s relationship coaching platform.
              </p>
            </div>
          </section>

          {/* ── CRITICAL SEO: Server-rendered links for ALL posts (Googlebot crawl) ── */}
          {/* This section is visually hidden from users but fully readable by Googlebot */}
          {/* BlogFilterClient is 'use client' so Googlebot cannot see those links */}
          <nav
            aria-label="All blog articles index"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              overflow: "hidden",
              clip: "rect(0,0,0,0)",
              whiteSpace: "nowrap",
            }}
          >
            <h2>All Relationship Advice Articles</h2>
            <ul>
              {posts.map((post) => (
                <li key={post.slug}>
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Search + Filter + Blog Grid (Client Component) ── */}
          <BlogFilterClient posts={posts} />
        </main>
      </PageTransition>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <Footer />
    </div>
  );
}
