import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getCategory, resolveCategorySlug } from "./taxonomy";
import {
  computeReadTime,
  countWords,
  extractFaqs,
  extractHeadings,
  extractKeyTakeaways,
  extractLede,
} from "./articleParse";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

/** Read + parse one file once; results are memoised for the build. */
const cache = new Map();

function readPost(fileName) {
  if (cache.has(fileName)) return cache.get(fileName);

  const filePath = path.join(blogsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  const slug = data.slug || fileName.replace(/\.mdx$/, "");
  const categorySlug = resolveCategorySlug({ slug, category: data.category });
  const category = getCategory(categorySlug);

  const post = {
    slug,
    title: data.title || "",
    seoTitle: data.seoTitle || "",
    description: data.description || "",
    date: data.date || "",
    // `updated` is authored explicitly so dateModified reflects a real content
    // change rather than an incidental file touch.
    updatedAt: data.updated || data.date || "",
    readTime: computeReadTime(content),
    wordCount: countWords(content),
    categorySlug,
    category: category.name,
    author: data.author || "Paaji Connect",
    tags: data.tags || [],
    keywords: data.keywords || [],
    content,
    faqs: extractFaqs(content),
    headings: extractHeadings(content),
    keyTakeaways: extractKeyTakeaways(content),
    lede: extractLede(content),
  };

  cache.set(fileName, post);
  return post;
}

function listFiles() {
  return fs.readdirSync(blogsDirectory).filter((f) => f.endsWith(".mdx"));
}

/** Everything except the raw MDX body — safe to pass to client components. */
function toSummary(post) {
  const { content, ...summary } = post;
  return summary;
}

/**
 * Scheduled publishing.
 *
 * A post dated in the future is written and committed but stays out of the
 * site — no listing entry, no sitemap URL, no generated route — until its date
 * arrives and the site is rebuilt. This lets a batch of drafts land in one
 * commit and go live on a staggered schedule, rather than appearing as a
 * single-day bulk drop.
 */
function isPublished(post) {
  if (!post.date) return true;
  const published = new Date(post.date);
  return Number.isNaN(published.getTime()) || published <= new Date();
}

/**
 * All published posts, newest first.
 */
export function getAllPosts() {
  return listFiles()
    .map(readPost)
    .filter(isPublished)
    .map(toSummary)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/** Posts still waiting on their publish date — for tooling, not for pages. */
export function getScheduledPosts() {
  return listFiles()
    .map(readPost)
    .filter((post) => !isPublished(post))
    .map(toSummary)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}

/**
 * A single post by slug, including the raw MDX body for next-mdx-remote.
 * Returns null for scheduled posts so they 404 rather than leaking early.
 */
export function getPostBySlug(slug) {
  const fileName = listFiles().find((f) => readPost(f).slug === slug);
  if (!fileName) return null;

  const post = readPost(fileName);
  return isPublished(post) ? post : null;
}

/** Posts belonging to one canonical category hub, newest first. */
export function getPostsByCategory(categorySlug) {
  return getAllPosts().filter((post) => post.categorySlug === categorySlug);
}

/**
 * Related posts for a given article, ranked by topical closeness:
 * shared tags first, then same category, then recency.
 */
export function getRelatedPosts(post, limit = 6) {
  const tags = new Set((post.tags || []).map((t) => t.toLowerCase()));

  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      const shared = (p.tags || []).filter((t) => tags.has(t.toLowerCase())).length;
      const sameCategory = p.categorySlug === post.categorySlug ? 1 : 0;
      return { post: p, score: shared * 3 + sameCategory * 2 };
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.date) - new Date(a.post.date))
    .slice(0, limit)
    .map((entry) => entry.post);
}

/** All slugs — used for generateStaticParams. */
export function getAllSlugs() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}
