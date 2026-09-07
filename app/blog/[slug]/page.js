import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import PageTransition from "../../../components/PageTransition";

import ArticleToc from "../../../components/ArticleToc";
import ArticleFaq from "../../../components/ArticleFaq";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "../../../lib/mdxUtils";
import { CATEGORIES, getCategory, getCategoryHref } from "../../../lib/taxonomy";
import {
  slugifyHeading,
  stripFaqSection,
  stripKeyTakeaways,
} from "../../../lib/articleParse";
import { normalizeBlogHref, stripLeadingTitleHeading } from "../../../lib/blogSeo";
import { OG_IMAGE, SITE_NAME, SITE_URL, toMetaDescription, toSerpTitle } from "../../../lib/seo";

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
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
      alternates: { canonical: "/blog" },
      robots: { index: false, follow: true },
    };
  }

  const path = `/blog/${post.slug}`;
  const description = toMetaDescription(post.description);

  // `absolute` drops the " | Paaji Connect" template suffix, which was pushing
  // every article title past the ~60 character SERP truncation point.
  // When seoTitle is not authored, toSerpTitle intelligently shortens the title
  // by understanding colon splits, parentheticals, and filler suffixes rather
  // than blindly truncating at 60 characters.
  const seoTitle = post.seoTitle || toSerpTitle(post.title);

  return {
    title: { absolute: seoTitle },
    description,
    keywords: post.keywords.slice(0, 10),
    authors: [{ name: post.author, url: `${SITE_URL}/about` }],
    alternates: { canonical: path },
    openGraph: {
      title: seoTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type: "article",
      locale: "en_IN",
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: [`${SITE_URL}/about`],
      section: post.category,
      tags: post.tags,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

const mdxComponents = {
  // Any stray H1 in the body becomes an H2 — the page already has one H1.
  h1: (props) => (
    <h2
      id={slugifyHeading(props.children)}
      className="mt-10 mb-4 border-b border-[#0F3D3E]/10 pb-2 text-[1.25rem] font-semibold text-[#0F3D3E] sm:text-3xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      id={slugifyHeading(props.children)}
      className="mt-10 mb-4 border-b border-[#0F3D3E]/10 pb-2 text-[1.25rem] font-semibold text-[#0F3D3E] sm:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      id={slugifyHeading(props.children)}
      className="mt-7 mb-3 text-[1.1rem] font-semibold text-[#0F3D3E] sm:text-xl"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="my-4 text-[0.9375rem] leading-[1.7] text-[#0E1E1E]/84 sm:text-base"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-[#0E1E1E]/84" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-[#0E1E1E]/84" {...props} />
  ),
  li: (props) => <li className="text-[0.9375rem] leading-[1.7] sm:text-base" {...props} />,
  a: ({ href, children, ...props }) => {
    const normalizedHref = normalizeBlogHref(href);
    const className =
      "font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/50 underline-offset-4 transition-colors duration-200 hover:text-[#2A9D8F]";

    if (normalizedHref?.startsWith("/")) {
      return (
        <Link href={normalizedHref} className={className}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={normalizedHref}
        className={className}
        rel="noopener nofollow"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  },
  strong: (props) => <strong className="font-semibold text-[#0F3D3E]" {...props} />,
  em: (props) => <em className="italic text-[#0E1E1E]/80" {...props} />,
  hr: () => <hr className="my-8 border-t border-[#0F3D3E]/12" />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-[#F4A261] pl-5 italic text-[#0E1E1E]/75"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border border-[#0F3D3E]/12 bg-[#0F3D3E]/5 px-3 py-2 text-left font-semibold text-[#0F3D3E]"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border border-[#0F3D3E]/12 px-3 py-2 text-[#0E1E1E]/84" {...props} />
  ),
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const category = getCategory(post.categorySlug);
  const categoryUrl = getCategoryHref(post.categorySlug);

  // The FAQ is lifted out of the prose and re-rendered as structured markup.
  const articleContent = stripKeyTakeaways(
    stripFaqSection(stripLeadingTitleHeading(post.content, post.title))
  );

  const relatedPosts = getRelatedPosts(post, 6);
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  const authorSchema = {
    "@type": "Person",
    "@id": `${SITE_URL}/about#author`,
    name: post.author,
    url: `${SITE_URL}/about`,
    jobTitle: "Relationship Coach",
    knowsAbout: category.name,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `${SITE_URL}${categoryUrl}`,
      },
      { "@type": "ListItem", position: 4, name: post.title, item: pageUrl },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    headline: post.title.slice(0, 110),
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}${OG_IMAGE}`,
      width: 1200,
      height: 630,
    },
    author: authorSchema,
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    keywords: post.keywords.join(", "),
    articleSection: category.name,
    inLanguage: "en-IN",
    wordCount: post.wordCount,
    timeRequired: `PT${parseInt(post.readTime, 10) || 5}M`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: post.tags.slice(0, 5).map((tag) => ({ "@type": "Thing", name: tag })),
    // Tells voice assistants and answer engines which parts to read aloud.
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article-answer", "#faq-heading"],
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: post.title,
    description: post.description,
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${OG_IMAGE}` },
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${pageUrl}#faq`,
          mainEntity: post.faqs.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }
      : null;

  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main style={{ paddingTop: "68px" }}>
          <article className="section-pad-first">
            <div className="ambient-light" />
            <div className="container-premium">
              <nav aria-label="Breadcrumb" className="text-sm text-[#0E1E1E]/60">
                <Link href="/" className="hover:text-[#2A9D8F]">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="hover:text-[#2A9D8F]">
                  Blog
                </Link>
                <span className="mx-2">/</span>
                <Link href={categoryUrl} className="hover:text-[#2A9D8F]">
                  {category.name}
                </Link>
              </nav>

              <h1 className="mt-4 max-w-4xl text-2xl font-semibold leading-[1.2] text-[#0F3D3E] sm:mt-5 sm:text-3xl md:text-5xl">
                {post.title}
              </h1>

              {/* Answer-first summary: the block AI engines and featured
                  snippets lift verbatim. */}
              <p className="article-answer mt-4 max-w-3xl text-sm text-[#0E1E1E]/80 sm:mt-5 sm:text-base md:text-lg">
                {post.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#0E1E1E]/65">
                <span>
                  By{" "}
                  <Link href="/about" className="font-semibold text-[#0F3D3E] hover:text-[#2A9D8F]">
                    {post.author}
                  </Link>
                </span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
                <span aria-hidden="true">·</span>
                <Link
                  href={categoryUrl}
                  className="rounded-full bg-[#2A9D8F]/10 px-3 py-1 text-xs font-semibold text-[#2A9D8F]"
                >
                  {category.name}
                </Link>
              </div>
            </div>
          </article>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-10 lg:grid-cols-[1fr_300px]">
              <div className="glass-card min-w-0 p-5 sm:p-10">
                {post.keyTakeaways.length > 0 && (
                  <aside
                    aria-labelledby="takeaways-heading"
                    className="mb-8 rounded-2xl border border-[#2A9D8F]/25 bg-[#2A9D8F]/6 p-5"
                  >
                    <h2
                      id="takeaways-heading"
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2A9D8F]"
                    >
                      Key takeaways
                    </h2>
                    <ul className="mt-3 list-disc space-y-2 pl-5">
                      {post.keyTakeaways.map((item) => (
                        <li
                          key={item}
                          className="text-[0.9375rem] leading-[1.65] text-[#0E1E1E]/85"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </aside>
                )}

                <ArticleToc headings={post.headings} hasFaq={post.faqs.length > 0} />

                <MDXRemote source={articleContent} components={mdxComponents} />

                <ArticleFaq faqs={post.faqs} />

                {/* Author credibility block — E-E-A-T signal on every article. */}
                <div className="mt-12 rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2A9D8F]">
                    About the author
                  </p>
                  <p className="mt-3 text-[0.9375rem] leading-[1.7] text-[#0E1E1E]/84">
                    <strong className="font-semibold text-[#0F3D3E]">{post.author}</strong>{" "}
                    is a relationship coach working with couples and singles across India on
                    breakup recovery, communication and trust repair. Articles are written
                    from live coaching sessions, not generic advice.{" "}
                    <Link
                      href="/about"
                      className="font-semibold text-[#0F3D3E] underline decoration-[#2A9D8F]/50 underline-offset-4"
                    >
                      Read more about our approach
                    </Link>
                    .
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-[#0E1E1E]/60">
                    This article is general guidance, not a substitute for licensed therapy
                    or medical care. If you are in immediate danger, contact local emergency
                    services.
                  </p>
                </div>
              </div>

              <aside className="h-fit space-y-5">
                {post.tags?.length > 0 && (
                  <div className="rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2A9D8F]">
                      Topics
                    </h2>
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

                <div className="rounded-2xl border border-[#0F3D3E]/12 bg-[#0B2E2F] p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4A261]">
                    Get support
                  </p>
                  <h2 className="mt-2 text-lg font-semibold">
                    Ready for guidance on your situation?
                  </h2>
                  <p className="mt-2 text-sm text-white/82">
                    Private, confidential sessions built around your specific relationship.
                  </p>
                  <Link
                    href="/services"
                    className="premium-button mt-5 w-full bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880]"
                  >
                    Book a session
                  </Link>
                </div>

                <div className="rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5">
                  <h2 className="text-sm font-semibold text-[#0F3D3E]">Browse by topic</h2>
                  <div className="mt-3 grid grid-cols-1 gap-2">
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={getCategoryHref(cat.slug)}
                        className="flex items-center justify-between rounded-lg border border-[#0F3D3E]/8 bg-white/50 px-3 py-2 text-xs font-medium text-[#0E1E1E]/75 transition-all hover:border-[#2A9D8F]/40 hover:text-[#0F3D3E]"
                      >
                        {cat.name}
                        <span aria-hidden="true">→</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5">
                  <h2 className="text-sm font-semibold text-[#0F3D3E]">Our services</h2>
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

          {relatedPosts.length > 0 && (
            <section className="section-pad pt-0">
              <div className="container-premium">
                <div className="mb-8 flex items-end justify-between">
                  <div>
                    <p className="mb-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#2A9D8F]">
                      Keep reading
                    </p>
                    <h2 className="text-2xl font-semibold text-[#0F3D3E] sm:text-3xl">
                      Related {category.name.toLowerCase()} guides
                    </h2>
                  </div>
                  <Link
                    href={categoryUrl}
                    className="hidden shrink-0 text-sm font-semibold text-[#2A9D8F] hover:text-[#0F3D3E] sm:inline-flex"
                  >
                    All {category.name} →
                  </Link>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relPost) => (
                    <article
                      key={relPost.slug}
                      className="group rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5 transition-all duration-300 hover:border-[#2A9D8F]/40 hover:shadow-[0_10px_20px_rgba(11,46,47,0.06)]"
                    >
                      <p className="mb-3 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[#2A9D8F]">
                        {relPost.category}
                      </p>
                      <h3 className="text-[0.95rem] font-semibold leading-snug text-[#0F3D3E]">
                        <Link
                          href={`/blog/${relPost.slug}`}
                          className="transition-colors duration-200 group-hover:text-[#2A9D8F]"
                        >
                          {relPost.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#0E1E1E]/65">
                        {relPost.description.length > 100
                          ? `${relPost.description.slice(0, 100).trim()}…`
                          : relPost.description}
                      </p>
                      <p className="mt-4 text-[0.65rem] text-[#0E1E1E]/55">
                        {relPost.readTime}
                      </p>
                    </article>
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
