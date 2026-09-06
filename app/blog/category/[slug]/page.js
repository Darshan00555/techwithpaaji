import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import PageTransition from "../../../../components/PageTransition";
import { getAllPosts, getPostsByCategory } from "../../../../lib/mdxUtils";
import { CATEGORIES, getCategory, getCategoryHref } from "../../../../lib/taxonomy";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../../../lib/seo";

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };

  const count = getPostsByCategory(slug).length;
  const title = `${category.title} — ${count} Guides`;
  const description = `${category.blurb} ${count} in-depth guides from Paaji Connect.`;

  return {
    title,
    description,
    keywords: [
      category.name.toLowerCase(),
      `${category.name.toLowerCase()} India`,
      `${category.name.toLowerCase()} advice`,
      "relationship coach India",
    ],
    alternates: { canonical: getCategoryHref(slug) },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${getCategoryHref(slug)}`,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: category.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const posts = getPostsByCategory(slug);
  const allPosts = getAllPosts();
  const pageUrl = `${SITE_URL}${getCategoryHref(slug)}`;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}/#collection`,
    url: pageUrl,
    name: category.title,
    description: category.blurb,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: category.name, item: pageUrl },
    ],
  };

  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main style={{ paddingTop: "68px" }}>
          <section className="section-pad-first">
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
                <span className="text-[#0F3D3E]">{category.name}</span>
              </nav>

              <h1 className="mt-5 max-w-4xl text-[1.75rem] font-semibold leading-[1.2] text-[#0F3D3E] sm:text-4xl md:text-5xl">
                {category.title}
              </h1>
              <p className="mt-5 max-w-3xl text-sm text-[#0E1E1E]/80 sm:text-base md:text-lg">
                {category.blurb}
              </p>
              <p className="mt-4 text-sm font-semibold text-[#2A9D8F]">
                {posts.length} {posts.length === 1 ? "guide" : "guides"} · {category.intent}
              </p>
            </div>
          </section>

          {/* Sibling hubs — gives every category page outbound topical links */}
          <section className="section-pad divider-line pt-0">
            <div className="container-premium">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={getCategoryHref(c.slug)}
                    aria-current={c.slug === slug ? "page" : undefined}
                    className={
                      c.slug === slug
                        ? "rounded-full border border-[#0F3D3E] bg-[#0F3D3E] px-4 py-2 text-xs font-semibold text-white"
                        : "rounded-full border border-[#0F3D3E]/15 bg-white/70 px-4 py-2 text-xs font-semibold text-[#0E1E1E]/75 transition-colors hover:border-[#2A9D8F]/50 hover:text-[#0F3D3E]"
                    }
                  >
                    {c.name}
                  </Link>
                ))}
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-5 transition-all duration-300 hover:border-[#2A9D8F]/40 hover:shadow-[0_10px_20px_rgba(11,46,47,0.06)]"
                  >
                    <h2 className="text-base font-semibold leading-snug text-[#0F3D3E]">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[#2A9D8F]">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#0E1E1E]/72">
                      {post.description.length > 130
                        ? `${post.description.slice(0, 130).trim()}…`
                        : post.description}
                    </p>
                    <p className="mt-4 text-xs text-[#0E1E1E]/55">
                      {formatDate(post.date)} · {post.readTime}
                    </p>
                  </article>
                ))}
              </div>

              {posts.length === 0 && (
                <p className="mt-10 text-sm text-[#0E1E1E]/70">
                  New guides for this topic are on the way.{" "}
                  <Link href="/blog" className="font-semibold text-[#2A9D8F]">
                    Browse all {allPosts.length} articles
                  </Link>
                  .
                </p>
              )}
            </div>
          </section>

          <section className="section-pad pt-0">
            <div className="container-premium">
              <div className="glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <h2 className="text-xl font-semibold text-[#0F3D3E] sm:text-2xl">
                    Want this applied to your situation?
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-[#0E1E1E]/75">
                    Private, confidential 1:1 sessions with a relationship coach who works
                    with Indian couples and singles.
                  </p>
                </div>
                <Link href="/services" className="premium-button shrink-0">
                  Book a session
                </Link>
              </div>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Footer />
    </div>
  );
}
