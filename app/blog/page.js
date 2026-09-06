import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";
import BlogFilterClient from "../../components/BlogFilterClient";
import { getAllPosts, getPostsByCategory } from "../../lib/mdxUtils";
import { CATEGORIES, getCategoryHref } from "../../lib/taxonomy";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../lib/seo";

const allPosts = getAllPosts();
const totalPosts = allPosts.length;

function formatDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export const metadata = {
  title: `Relationship Advice Blog India | ${totalPosts}+ Expert Articles`,
  description:
    `Read ${totalPosts}+ long-form relationship advice articles in India on breakup recovery, intentional dating, gaslighting, attachment theory, divorce trends, Gen Alpha dating, communication coaching, trust rebuilding, love bombing, and emotional intelligence. Expert guidance by Paaji Connect.`,
  keywords: [
    "relationship advice India 2026",
    "intentional dating India 2026",
    "online relationship coaching India",
    "how to fix relationship problems",
    "how to rebuild trust after breakup",
    "communication coaching for couples",
    "relationship conflict resolution",
    "breakup recovery India",
    "toxic relationship signs",
    "gaslighting relationship India",
    "attachment theory India 2026",
    "love bombing India",
    "dating app fatigue India 2026",
    "divorce rate India 2026",
    "second marriage India 2026",
    "Gen Alpha dating India 2026",
    "relationship mental health India",
    "narcissism Indian dating 2026",
    "relationship coach India blog",
    "relationship tips India 2026"
  ],
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: `Relationship Advice Blog India | ${totalPosts}+ Expert Articles | Paaji Connect`,
    description:
      `${totalPosts}+ authority relationship articles: intentional dating, gaslighting signs, attachment theory, divorce trends India 2026, communication coaching, trust repair, breakup recovery, love bombing, and more.`,
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
    description: `${totalPosts}+ expert relationship articles covering intentional dating 2026, gaslighting, attachment theory, divorce trends, breakup recovery, communication, trust, and more.`,
    images: [OG_IMAGE]
  }
};

export default function BlogIndexPage() {
  const posts = allPosts;

  // Blog listing schema — helps Google parse the index as a blog collection
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Relationship Advice Blog`,
    url: `${SITE_URL}/blog`,
    description:
      `${totalPosts}+ practical, long-form relationship advice articles covering intentional dating 2026, gaslighting, attachment theory, divorce trends India, breakup recovery, communication skills, trust repair, love bombing, attachment styles, and emotional intelligence for couples and individuals in India.`,
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
          <section className="section-pad-first">
            <div className="ambient-light" />
            <div className="container-premium">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
                Paaji Connect Relationship Advice Blog India
              </p>
              <h1 className="mt-4 max-w-4xl text-[1.75rem] font-semibold text-[#0F3D3E] leading-[1.2] sm:text-3xl md:text-6xl">
                Actionable Relationship Advice for Couples and Singles in India — 2026
              </h1>
              <p className="mt-5 max-w-3xl text-sm text-[#0E1E1E]/80 sm:text-base md:text-lg">
                {totalPosts}+ expert articles on intentional dating, gaslighting, attachment theory, divorce trends, breakup recovery, communication coaching for couples,
                trust rebuilding, love bombing, Gen Alpha dating, narcissism, second marriage, toxic relationships,
                and long-term relationship growth strategy — by Paaji Connect, India&apos;s relationship coaching platform.
              </p>
            </div>
          </section>


          {/* ── Topic hubs ──
              Real crawlable category URLs. These sit between /blog and the
              articles so the archive is a three-level hierarchy instead of one
              flat page linking to every post. */}
          <section className="section-pad divider-line pt-0">
            <div className="container-premium">
              <h2 className="text-2xl font-semibold text-[#0F3D3E] sm:text-3xl">
                Start with a topic
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-[#0E1E1E]/75 sm:text-base">
                Every article sits in one of eight topic hubs. Pick the one closest to what
                you are dealing with right now.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {CATEGORIES.map((category) => {
                  const count = getPostsByCategory(category.slug).length;
                  return (
                    <Link
                      key={category.slug}
                      href={getCategoryHref(category.slug)}
                      className="group flex h-full flex-col rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5 transition-all duration-300 hover:border-[#2A9D8F]/45 hover:shadow-[0_10px_20px_rgba(11,46,47,0.06)]"
                    >
                      <h3 className="text-base font-semibold text-[#0F3D3E] transition-colors group-hover:text-[#2A9D8F]">
                        {category.name}
                      </h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-[#0E1E1E]/70">
                        {category.intent}
                      </p>
                      <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#2A9D8F]">
                        {count} {count === 1 ? "guide" : "guides"} →
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Search + Filter + Blog Grid (Client Component) ── */}
          <BlogFilterClient posts={posts} />

          <section className="section-pad pt-0">
            <div className="container-premium">
              <div className="glass-card p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2A9D8F]">
                  Full Archive
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-[#0F3D3E] sm:text-4xl">
                  Browse All {totalPosts} Articles
                </h2>
                <p className="mt-4 max-w-3xl text-sm text-[#0E1E1E]/78 sm:text-base">
                  Every article is listed below in standard HTML links, so readers can browse the complete archive without relying on client-side filters.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="rounded-2xl border border-[#0F3D3E]/10 bg-white/70 px-4 py-4 transition-colors duration-200 hover:border-[#2A9D8F]/45 hover:bg-white"
                    >
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#2A9D8F]">
                        {post.category}
                      </p>
                      <h3 className="mt-2 text-sm font-semibold leading-snug text-[#0F3D3E] sm:text-base">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#0E1E1E]/58">
                        {formatDate(post.date)} · {post.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
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
