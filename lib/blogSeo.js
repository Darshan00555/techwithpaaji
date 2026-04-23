const BLOG_SLUG_ALIASES = {
  "quiet-quitting-relationship-india-signs-and-what-to-do":
    "quiet-quitting-relationship-india-signs",
  "how-to-social-media-ruins-relationships-and-how-to-fix-it":
    "how-social-media-ruins-relationships-and-how-to-fix-it",
};

const CATEGORY_SLUG_OVERRIDES = {
  "Trust & Healing": "trust-repair",
  "Trust & Repair": "trust-repair",
  "Relationship Psychology": "relationship-psychology",
  Psychology: "psychology",
  "Dating Trends": "dating-trends",
  "Breakup Recovery": "breakup-recovery",
  Communication: "communication",
  "Modern Marriage": "modern-marriage",
};

export function normalizeBlogHref(href) {
  if (!href || typeof href !== "string" || !href.startsWith("file:///")) {
    return href;
  }

  const normalizedPath = decodeURIComponent(href)
    .replace(/^file:\/\/\//i, "")
    .replace(/\\/g, "/");

  const fileName = normalizedPath.split("/").pop() || "";
  const rawSlug = fileName.replace(/\.mdx?$/i, "");
  const slug = BLOG_SLUG_ALIASES[rawSlug] || rawSlug;

  return slug ? `/blog/${slug}` : "/blog";
}

export function slugifyCategoryLabel(label = "") {
  return label
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCategorySlug(label = "") {
  return CATEGORY_SLUG_OVERRIDES[label] || slugifyCategoryLabel(label);
}

export function getBlogCategoryHrefFromSlug(slug = "") {
  return slug ? `/blog#category=${slug}` : "/blog";
}

export function stripLeadingTitleHeading(content = "", title = "") {
  if (!content || !title) return content;

  const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`^\\s*#\\s+${escapedTitle}\\s*\\n+`, "i");

  return content.replace(pattern, "");
}
