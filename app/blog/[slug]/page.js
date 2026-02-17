import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import PageTransition from "../../../components/PageTransition";
import { getAllPosts, getPostBySlug } from "../../../lib/blogData";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "../../../lib/seo";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
      keywords: ["relationship advice"],
      alternates: {
        canonical: "/blog"
      },
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
    keywords: [post.targetKeyword, ...post.relatedKeywords],
    alternates: {
      canonical: path
    },
    openGraph: {
      title: `${post.title} | Paaji Connect`,
      description: post.description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type: "article",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${OG_IMAGE}`,
    author: {
      "@type": "Organization",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`
      }
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: [post.targetKeyword, ...post.relatedKeywords].join(", ")
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <div className="page-shell">
      <Navbar />
      <PageTransition>
        <main>
          <article className="section-pad">
            <div className="ambient-light" />
            <div className="container-premium">
              <Link
                href="/blog"
                className="inline-flex text-sm font-semibold text-[#2A9D8F] transition-colors duration-200 hover:text-[#0F3D3E]"
              >
                Back to blog
              </Link>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#2A9D8F]">
                {post.category}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#0F3D3E] sm:text-6xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base text-[#0E1E1E]/80 sm:text-lg">{post.description}</p>
              <p className="mt-4 max-w-3xl text-base text-[#0E1E1E]/84">{post.intro}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[#0E1E1E]/65">
                <span>{post.author}</span>
                <span>|</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span>|</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>

          <section className="section-pad divider-line pt-0">
            <div className="container-premium grid gap-10 lg:grid-cols-[1fr_310px]">
              <div className="space-y-8">
                {post.sections.map((section) => (
                  <section key={section.heading} className="glass-card p-7 sm:p-8">
                    <h2 className="text-2xl font-semibold text-[#0F3D3E] sm:text-3xl">{section.heading}</h2>
                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={`${section.heading}-${index}`} className="text-base text-[#0E1E1E]/84">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}

                <section className="glass-card p-7 sm:p-8">
                  <h2 className="text-2xl font-semibold text-[#0F3D3E]">Frequently Asked Questions</h2>
                  <div className="mt-5 space-y-4">
                    {post.faqs.map((faq) => (
                      <article key={faq.question} className="rounded-xl border border-[#0F3D3E]/10 bg-white/70 p-4">
                        <h3 className="text-lg font-semibold text-[#0F3D3E]">{faq.question}</h3>
                        <p className="mt-2 text-sm text-[#0E1E1E]/82">{faq.answer}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="h-fit space-y-4 rounded-2xl border border-[#0F3D3E]/12 bg-white/72 p-6">
                <h3 className="text-lg font-semibold text-[#0F3D3E]">Related Services</h3>
                {post.internalLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-lg border border-[#0F3D3E]/10 bg-white px-3 py-3 text-sm text-[#0E1E1E]/82 transition-colors duration-200 hover:border-[#2A9D8F]/45 hover:text-[#0F3D3E]"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="rounded-xl border border-[#0F3D3E]/12 bg-[#0B2E2F] p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4A261]">Action</p>
                  <h4 className="mt-2 text-lg font-semibold">{post.cta.title}</h4>
                  <p className="mt-2 text-sm text-white/82">{post.cta.description}</p>
                  <Link
                    href={post.cta.href}
                    className="premium-button mt-4 w-full bg-[#F4A261] text-[#0F3D3E] hover:bg-[#f7b880]"
                  >
                    {post.cta.label}
                  </Link>
                </div>
              </aside>
            </div>
          </section>
        </main>
      </PageTransition>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Footer />
    </div>
  );
}
