import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

/**
 * Get all blog posts (frontmatter only, no content)
 * Sorted by date descending
 */
export function getAllPosts() {
    const fileNames = fs.readdirSync(blogsDirectory).filter((f) => f.endsWith(".mdx"));

    const posts = fileNames.map((fileName) => {
        const filePath = path.join(blogsDirectory, fileName);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        return {
            slug: data.slug || fileName.replace(/\.mdx$/, ""),
            title: data.title || "",
            description: data.description || "",
            date: data.date || "",
            readTime: data.readTime || "",
            category: data.category || "Relationship Advice",
            author: data.author || "Paaji Connect",
            tags: data.tags || [],
            keywords: data.keywords || [],
        };
    });

    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get a single blog post by slug — returns frontmatter + raw MDX content
 */
export function getPostBySlug(slug) {
    const fileNames = fs.readdirSync(blogsDirectory).filter((f) => f.endsWith(".mdx"));

    const matchedFile = fileNames.find((fileName) => {
        const filePath = path.join(blogsDirectory, fileName);
        const { data } = matter(fs.readFileSync(filePath, "utf8"));
        return (data.slug || fileName.replace(/\.mdx$/, "")) === slug;
    });

    if (!matchedFile) return null;

    const filePath = path.join(blogsDirectory, matchedFile);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
        slug: data.slug || matchedFile.replace(/\.mdx$/, ""),
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        readTime: data.readTime || "",
        category: data.category || "Relationship Advice",
        author: data.author || "Paaji Connect",
        tags: data.tags || [],
        keywords: data.keywords || [],
        content, // raw MDX string for next-mdx-remote
    };
}

/**
 * Get all slugs — used for generateStaticParams
 */
export function getAllSlugs() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}
