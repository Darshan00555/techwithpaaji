import fs from "fs";
import path from "path";
import { getAllPosts } from "../lib/mdxUtils";
import { SITE_URL } from "../lib/seo";

const staticRoutes = [
    { route: "", changeFrequency: "daily", priority: 1.0, file: "app/page.js" },
    { route: "/services", changeFrequency: "weekly", priority: 0.9, file: "app/services/page.js" },
    { route: "/breakup-recovery", changeFrequency: "weekly", priority: 0.9, file: "app/breakup-recovery/page.js" },
    { route: "/communication-coaching", changeFrequency: "weekly", priority: 0.9, file: "app/communication-coaching/page.js" },
    { route: "/relationship-reset", changeFrequency: "weekly", priority: 0.9, file: "app/relationship-reset/page.js" },
    { route: "/blog", changeFrequency: "daily", priority: 0.85, file: "app/blog/page.js" },
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

    const blogEntries = getAllPosts().map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.updatedAt || post.date,
        changeFrequency: "daily",
        priority: 0.8,
    }));


    return [...staticEntries, ...blogEntries];
}
