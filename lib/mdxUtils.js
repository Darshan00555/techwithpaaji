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
 * All posts, newest first.
 */
export function getAllPosts() {
  return listFiles()
    .map(readPost)
    .map(toSummary)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * A single post by slug, including the raw MDX body for next-mdx-remote.
 */
export function getPostBySlug(slug) {
  const fileName = listFiles().find((f) => readPost(f).slug === slug);
  return fileName ? readPost(fileName) : null;
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
