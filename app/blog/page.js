import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";
import BlogFilterClient from "../../components/BlogFilterClient";
import { getAllPosts } from "../../lib/mdxUtils";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "Relationship Advice Blog India",
  description:
    "Read long-form relationship advice in India on breakup recovery, communication coaching for couples, trust rebuilding, and emotional intelligence.",
  keywords: [
    "relationship advice India",
    "online relationship coaching India",
    "how to fix relationship problems",
    "how to rebuild trust after breakup",
    "communication coaching for couples",
    "relationship conflict resolution"
  ],
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Relationship Advice Blog India | Paaji Connect",
    description:
      "Authority relationship blog with practical guides on communication, trust repair, and breakup recovery.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Relationship advice blog India"
      }
    ]
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
      "Practical, long-form relationship advice covering breakup recovery, communication skills, trust repair, and emotional intelligence.",
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
        <main>
          {/* ── Hero header ── */}
          <section className="section-pad">
            <div className="ambient-light" />
            <div className="container-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
                Paaji Connect Authority Blog
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#0F3D3E] sm:text-6xl">
                Actionable Relationship Advice for Couples and Individuals
              </h1>
              <p className="mt-5 max-w-3xl text-base text-[#0E1E1E]/80 sm:text-lg">
                Explore deep practical articles on trust, communication, breakup
                recovery help, attachment styles, and long-term relationship growth
                strategy.
              </p>
            </div>
          </section>

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
