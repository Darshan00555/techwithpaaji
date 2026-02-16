import Link from "next/link";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PageTransition from "../../components/PageTransition";
import { getAllPosts } from "../../lib/blogData";
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

function formatDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main>
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
                Explore deep practical articles on trust, communication, breakup recovery help, attachment styles, and long-term relationship growth strategy.
              </p>
            </div>
          </section>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <article key={post.slug} className="glass-card p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2A9D8F]">
                    {post.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#0F3D3E]">{post.title}</h2>
                  <p className="mt-4 text-sm text-[#0E1E1E]/80">{post.description}</p>
                  <div className="mt-5 flex items-center gap-3 text-xs text-[#0E1E1E]/62">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>|</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-[#0F3D3E] transition-colors duration-200 hover:text-[#F4A261]"
                  >
                    Read full article
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
