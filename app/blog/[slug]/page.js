import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import PageTransition from "../../../components/PageTransition";
import AdsterraNativeBanner from "../../../components/AdsterraNativeBanner";
import { getAllSlugs, getAllPosts, getPostBySlug } from "../../../lib/mdxUtils";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../../lib/seo";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
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
  
  // SEO optimization: Natural description (max 155 chars)
  const seoDescription = post.description.length > 155 
    ? post.description.substring(0, 152) + "..." 
    : post.description;

  // SEO optimization: Reduce keyword stuffing (max 10 relevant keywords)
  const cleanKeywords = post.keywords.slice(0, 10);

  return {
    title: `${post.title} | Paaji Connect`,
    description: seoDescription,
    keywords: cleanKeywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${post.title} | Paaji Connect`,
      description: seoDescription,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type: "article",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: post.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Paaji Connect`,
      description: seoDescription,
      images: [OG_IMAGE],
    }
  };
}

// MDX component overrides — maps h2, h3, p, ul, ol, li, a, strong, hr to site-styled elements
const mdxComponents = {
  h1: (props) => {
    const id = slugify(props.children);
    return (
      <h1
        id={id}
        className="mt-8 text-2xl font-semibold text-[#0F3D3E] sm:text-4xl"
        {...props}
      />
    );
  },
  h2: (props) => {
    const id = slugify(props.children);
    return (
      <h2
        id={id}
        className="mt-10 mb-4 text-[1.25rem] font-semibold text-[#0F3D3E] border-b border-[#0F3D3E]/10 pb-2 sm:text-3xl"
        {...props}
      />
    );
  },
  h3: (props) => {
    const id = slugify(props.children);
    return (
      <h3
        id={id}
        className="mt-7 mb-3 text-[1.1rem] font-semibold text-[#0F3D3E] sm:text-xl"
        {...props}
      />
    );
  },
  p: (props) => (
    <p className="my-4 text-[0.9375rem] leading-[1.7] text-[#0E1E1E]/84 sm:text-base" {...props} />
  ),
  ul: (props) => (
    <ul className="my-4 space-y-2 pl-6 list-disc text-[#0E1E1E]/84" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 space-y-2 pl-6 list-decimal text-[#0E1E1E]/84" {...props} />
  ),
  li: (props) => <li className="text-[0.9375rem] leading-[1.7] sm:text-base" {...props} />,
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

  // Get related posts: same category first, then others, exclude current post, take 4
  const allPosts = getAllPosts();
  const sameCategoryPosts = allPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  );
  const otherPosts = allPosts.filter(
    (p) => p.slug !== post.slug && p.category !== post.category
  );
  const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 8);

  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  // --- BreadcrumbList schema ---
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
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
    "@id": `${pageUrl}/#main-article`,
    headline: post.title,
    description: post.description.substring(0, 160),
    image: `${SITE_URL}${OG_IMAGE}`,
    author: {
      "@type": "Person",
      name: "Paaji",
      jobTitle: "Relationship Writer",
      url: `${SITE_URL}/about`
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` }
    },
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-IN",
    wordCount: post.content.split(/\s+/).length,
  };

  // --- WebPage schema ---
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    url: pageUrl,
    name: post.title,
    description: post.description,
    breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    mainEntity: { "@id": `${pageUrl}/#main-article` },
    inLanguage: "en-IN",
    potentialAction: [
      {
        "@type": "ReadAction",
        target: [pageUrl]
      }
    ]
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
        <main style={{ paddingTop: "68px" }}>
          {/* Hero / Header */}
          <article className="section-pad-first">
            <div className="ambient-light" />
            <div className="container-premium">
              <Link
                href="/blog"
                className="inline-flex text-sm font-semibold text-[#2A9D8F] transition-colors duration-200 hover:text-[#0F3D3E]"
              >
                ← Back to blog
              </Link>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F] sm:mt-6">
                {post.category}
              </p>
              <h1 className="mt-2 max-w-4xl text-2xl font-semibold text-[#0F3D3E] leading-[1.2] sm:mt-4 sm:text-3xl md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-3 max-w-3xl text-sm text-[#0E1E1E]/80 sm:mt-5 sm:text-base md:text-lg">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#0E1E1E]/65 sm:mt-5">
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
              <div className="glass-card p-5 sm:p-10 min-w-0">
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

                {/* Categories List */}
                <div className="rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5">
                  <h3 className="text-sm font-semibold text-[#0F3D3E]">Browse by Topic</h3>
                  <div className="mt-3 grid grid-cols-1 gap-2">
                    {[
                      { name: "Dating Trends", slug: "dating-trends" },
                      { name: "Breakup Recovery", slug: "breakup-recovery" },
                      { name: "Communication", slug: "communication" },
                      { name: "Trust & Repair", slug: "trust-repair" },
                      { name: "Psychology", slug: "psychology" },
                      { name: "Modern Marriage", slug: "marriage" },
                    ].map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/blog?category=${cat.slug}`}
                        className="flex items-center justify-between rounded-lg border border-[#0F3D3E]/8 bg-white/50 px-3 py-2 text-xs font-medium text-[#0E1E1E]/75 transition-all hover:border-[#2A9D8F]/40 hover:text-[#0F3D3E]"
                      >
                        {cat.name}
                        <span>→</span>
                      </Link>
                    ))}
                  </div>
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
          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="section-pad pt-0">
              <div className="container-premium">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#2A9D8F] mb-2">
                      Deepen Your Understanding
                    </p>
                    <h2 className="text-2xl font-semibold text-[#0F3D3E] sm:text-3xl">Related Articles</h2>
                  </div>
                  <Link href="/blog" className="hidden sm:inline-flex text-sm font-semibold text-[#2A9D8F] hover:text-[#0F3D3E]">
                    View all articles →
                  </Link>
                </div>
                
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {relatedPosts.map((relPost) => (
                    <Link
                      key={relPost.slug}
                      href={`/blog/${relPost.slug}`}
                      className="group block rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5 transition-all duration-300 hover:border-[#2A9D8F]/40 hover:shadow-[0_10px_20px_rgba(11,46,47,0.06)]"
                    >
                      <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#2A9D8F] mb-3">
                        {relPost.category}
                      </p>
                      <h3 className="text-[0.95rem] font-semibold text-[#0F3D3E] leading-snug transition-colors duration-200 group-hover:text-[#2A9D8F]">
                        {relPost.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-2 text-[0.65rem] text-[#0E1E1E]/55">
                        <span>{relPost.readTime}</span>
                        <span className="h-1 w-1 rounded-full bg-[#0E1E1E]/20" />
                        <span>Read article →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Footer />
    </div>
  );
}
