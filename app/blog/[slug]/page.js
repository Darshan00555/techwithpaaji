import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import PageTransition from "../../../components/PageTransition";
import AdsterraNativeBanner from "../../../components/AdsterraNativeBanner";
import { getAllSlugs, getPostBySlug } from "../../../lib/mdxUtils";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../../lib/seo";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

export function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
      keywords: ["relationship advice"],
      alternates: { canonical: "/blog" },
      openGraph: {
        title: "Article Not Found | Paaji Connect",
        description: "The requested article could not be found.",
        url: `${SITE_URL}/blog`,
        siteName: SITE_NAME,
        type: "article"
      }
    };
  }

  const path = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${post.title} | Paaji Connect`,
      description: post.description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type: "article",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: post.title }]
    }
  };
}

// MDX component overrides — maps h2, h3, p, ul, ol, li, a, strong, hr to site-styled elements
const mdxComponents = {
  h1: (props) => (
    <h1
      className="mt-8 text-3xl font-semibold text-[#0F3D3E] sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-10 mb-4 text-2xl font-semibold text-[#0F3D3E] sm:text-3xl border-b border-[#0F3D3E]/10 pb-2"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-7 mb-3 text-xl font-semibold text-[#0F3D3E]"
      {...props}
    />
  ),
  p: (props) => (
    <p className="my-4 text-base leading-relaxed text-[#0E1E1E]/84" {...props} />
  ),
  ul: (props) => (
    <ul className="my-4 space-y-2 pl-6 list-disc text-[#0E1E1E]/84" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 space-y-2 pl-6 list-decimal text-[#0E1E1E]/84" {...props} />
  ),
  li: (props) => <li className="text-base leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/50 underline-offset-4 transition-colors duration-200 hover:text-[#2A9D8F]"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-[#0F3D3E]" {...props} />
  ),
  em: (props) => <em className="italic text-[#0E1E1E]/80" {...props} />,
  hr: () => <hr className="my-8 border-t border-[#0F3D3E]/12" />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-[#F4A261] pl-5 italic text-[#0E1E1E]/75"
      {...props}
    />
  ),
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  // --- BreadcrumbList schema ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ]
  };

  // --- BlogPosting schema ---
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${OG_IMAGE}`,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` }
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: pageUrl,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-IN",
    wordCount: post.content.split(/\s+/).length,
  };

  // --- FAQPage schema: extract Q&A pairs from MDX FAQ section ---
  const faqMatches = [];
  const faqSectionMatch = post.content.match(/## Frequently Asked Questions(.*?)(?=\n## |$)/s);
  if (faqSectionMatch) {
    const faqBlock = faqSectionMatch[1];
    // Match bold questions followed by their answer paragraph
    const qaPairs = [...faqBlock.matchAll(/\*\*([^*]+)\*\*\s*\n([^\n*][^\n]+(?:\n[^\n*][^\n]+)*)/g)];
    qaPairs.forEach(([, q, a]) => {
      const question = q.trim();
      const answer = a.replace(/\*\*/g, "").trim();
      if (question && answer) faqMatches.push({ question, answer });
    });
  }
  const faqSchema = faqMatches.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqMatches.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  } : null;

  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main>
          {/* Hero / Header */}
          <article className="section-pad">
            <div className="ambient-light" />
            <div className="container-premium">
              <Link
                href="/blog"
                className="inline-flex text-sm font-semibold text-[#2A9D8F] transition-colors duration-200 hover:text-[#0F3D3E]"
              >
                ← Back to blog
              </Link>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
                {post.category}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#0F3D3E] sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base text-[#0E1E1E]/80 sm:text-lg">
                {post.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-[#0E1E1E]/65">
                <span>{post.author}</span>
                <span>|</span>
                <span>{formatDate(post.date)}</span>
                <span>|</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>

          {/* MDX Content */}
          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-10 lg:grid-cols-[1fr_300px]">
              {/* Main article body */}
              <div className="glass-card p-7 sm:p-10 min-w-0">
                <MDXRemote source={post.content} components={mdxComponents} />
                <AdsterraNativeBanner />
              </div>

              {/* Sidebar */}
              <aside className="h-fit space-y-5">
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2A9D8F]">
                      Topics
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#0F3D3E]/15 bg-white px-3 py-1 text-xs font-medium text-[#0E1E1E]/75"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div className="rounded-2xl border border-[#0F3D3E]/12 bg-[#0B2E2F] p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4A261]">
                    Get Support
                  </p>
                  <h4 className="mt-2 text-lg font-semibold">
                    Ready to get professional guidance?
                  </h4>
                  <p className="mt-2 text-sm text-white/82">
                    Private, confidential sessions designed for your specific situation.
                  </p>
                  <Link
                    href="/services"
                    className="premium-button mt-5 w-full bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880]"
                  >
                    Book a Session
                  </Link>
                </div>

                {/* Related Links */}
                <div className="rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5">
                  <h3 className="text-sm font-semibold text-[#0F3D3E]">Our Services</h3>
                  <div className="mt-3 space-y-2">
                    {[
                      { label: "Breakup Recovery Coaching", href: "/breakup-recovery" },
                      { label: "Communication Coaching", href: "/communication-coaching" },
                      { label: "Relationship Reset Program", href: "/relationship-reset" },
                      { label: "Private 1:1 Sessions", href: "/contact" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-lg border border-[#0F3D3E]/10 bg-white px-3 py-3 text-sm text-[#0E1E1E]/82 transition-colors duration-200 hover:border-[#2A9D8F]/45 hover:text-[#0F3D3E]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </main>
      </PageTransition>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Footer />
    </div>
  );
}
