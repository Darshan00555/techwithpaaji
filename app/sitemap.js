import fs from "fs";
import path from "path";
import { getAllPosts, getPostsByCategory } from "../lib/mdxUtils";
import { CATEGORIES, getCategoryHref } from "../lib/taxonomy";
import { SITE_URL } from "../lib/seo";

const staticRoutes = [
    { route: "", changeFrequency: "weekly", priority: 1.0, file: "app/page.js" },
    { route: "/services", changeFrequency: "monthly", priority: 0.9, file: "app/services/page.js" },
    { route: "/breakup-recovery", changeFrequency: "monthly", priority: 0.9, file: "app/breakup-recovery/page.js" },
    { route: "/communication-coaching", changeFrequency: "monthly", priority: 0.9, file: "app/communication-coaching/page.js" },
    { route: "/relationship-reset", changeFrequency: "monthly", priority: 0.9, file: "app/relationship-reset/page.js" },
    { route: "/blog", changeFrequency: "weekly", priority: 0.85, file: "app/blog/page.js" },
    { route: "/about", changeFrequency: "monthly", priority: 0.7, file: "app/about/page.js" },
    { route: "/contact", changeFrequency: "monthly", priority: 0.8, file: "app/contact/page.js" },
    { route: "/privacy-policy", changeFrequency: "yearly", priority: 0.3, file: "app/privacy-policy/page.js" },
    { route: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3, file: "app/terms-and-conditions/page.js" },
];

function getFileModifiedTime(relativePath) {
    return fs.statSync(path.join(process.cwd(), relativePath)).mtime;
}

export default function sitemap() {
    const staticEntries = staticRoutes.map(({ route, changeFrequency, priority, file }) => ({
        url: `${SITE_URL}${route}`,
        lastModified: getFileModifiedTime(file),
        changeFrequency,
        priority,
    }));

    // Category hubs sit between /blog and the articles, so they carry a higher
    // priority than individual posts.
    const categoryEntries = CATEGORIES.map((category) => {
        const posts = getPostsByCategory(category.slug);
        const newest = posts[0];
        return {
            url: `${SITE_URL}${getCategoryHref(category.slug)}`,
            lastModified: newest ? new Date(newest.updatedAt || newest.date) : new Date(),
            changeFrequency: "weekly",
            priority: 0.85,
        };
    });

    const blogEntries = getAllPosts().map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.date),
        // "daily" on a post that never changes trains Google to distrust the
        // whole sitemap; monthly matches how these are actually maintained.
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [...staticEntries, ...categoryEntries, ...blogEntries];
}
