// Adds keywords, tags, author to the 20 MDX posts missing them.
// Run with: node scripts/fix-missing-frontmatter.mjs

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogsDir = path.join(__dirname, "..", "content", "blogs");

// Each post: slug → { keywords, tags } derived from its actual title + description + category
const FIXES = {
  "ai-conflict-resolution-indian-relationships": {
    keywords: ["AI conflict resolution", "ChatGPT marriage advice", "AI relationship coach India", "couples argument resolution AI", "AI mediator couples India", "conflict resolution tools India 2026", "AI communication couples"],
    tags: ["AI Relationships", "Conflict Resolution", "Communication", "Marriage Advice India"],
  },
  "ai-post-breakup-recovery-tools-india": {
    keywords: ["AI breakup recovery", "AI healing after breakup India", "AI therapy breakup India", "post breakup tools India 2026", "AI emotional support breakup", "digital breakup recovery India", "AI journaling breakup"],
    tags: ["AI Relationships", "Breakup Recovery", "Digital Wellness", "Healing"],
  },
  "caste-fluid-dating-india-trends": {
    keywords: ["caste fluid dating India", "inter caste dating trends", "caste in modern dating India 2026", "dating beyond caste India", "caste free dating apps India", "progressive dating India", "caste compatibility dating"],
    tags: ["Dating Trends", "Inter-Caste Dating", "Progressive Relationships", "India 2026"],
  },
  "dating-wrapped-2026-india-trends": {
    keywords: ["dating wrapped 2026 India", "dating trends recap India", "dating year in review India", "top dating trends India 2026", "Indian dating culture 2026", "relationship trends summary India", "dating app trends India"],
    tags: ["Dating Trends", "Year In Review", "India 2026", "Relationship Culture"],
  },
  "digital-infidelity-micro-cheating-india": {
    keywords: ["digital infidelity India", "micro cheating India", "online cheating signs India", "emotional cheating social media India", "digital affairs India 2026", "micro cheating meaning", "Instagram cheating signs India"],
    tags: ["Digital Infidelity", "Micro-Cheating", "Trust Issues", "Social Media Relationships"],
  },
  "digital-pre-nups-india-couples": {
    keywords: ["digital prenup India", "social media prenup couples", "digital boundaries marriage India", "online privacy agreement couples India", "digital prenuptial agreement", "couples digital boundaries India 2026", "social media rules couples"],
    tags: ["Digital Wellness", "Marriage", "Boundaries", "Modern Relationships India"],
  },
  "eco-dating-india-sustainability-love": {
    keywords: ["eco dating India", "sustainable dating India", "green dating trends India 2026", "eco friendly dates India", "sustainability in relationships India", "environmentally conscious dating", "eco dating meaning"],
    tags: ["Eco Dating", "Sustainability", "Dating Trends", "Green Lifestyle India"],
  },
  "eq-over-iq-india-dating": {
    keywords: ["EQ over IQ dating India", "emotional intelligence dating India", "emotional quotient relationships India", "EQ vs IQ partner India 2026", "emotional intelligence marriage India", "dating emotional maturity India", "EQ meaning relationships"],
    tags: ["Emotional Intelligence", "Dating Trends", "Relationship Psychology", "EQ vs IQ"],
  },
  "financial-compatibility-dating-india": {
    keywords: ["financial compatibility dating India", "money compatibility couples India", "financial habits partner India", "financial red flags dating India 2026", "money and relationships India", "financial planning couples India", "salary discussion dating India"],
    tags: ["Financial Compatibility", "Dating Advice", "Money Relationships", "India 2026"],
  },
  "indian-trad-wife-vs-corporate-queen-debate": {
    keywords: ["trad wife vs corporate queen India", "traditional wife modern wife debate India", "homemaker vs career woman India 2026", "Indian women roles debate", "trad wife trend India", "career woman marriage India", "gender roles Indian marriage"],
    tags: ["Gender Roles", "Marriage Debate", "Traditional vs Modern", "Indian Women"],
  },
  "marriage-sabbatical-india-guide": {
    keywords: ["marriage sabbatical India", "marriage break India", "trial separation India 2026", "marriage sabbatical meaning", "taking a break marriage India", "temporary separation couples India", "marriage sabbatical guide"],
    tags: ["Marriage", "Separation", "Self-Discovery", "Relationship Psychology"],
  },
  "modern-matchmaking-india-ai-vs-biodata": {
    keywords: ["modern matchmaking India", "AI matchmaking India 2026", "biodata vs AI matching India", "matchmaking 3.0 India", "AI marriage matching India", "modern arranged marriage India", "matchmaking technology India"],
    tags: ["Matchmaking", "AI Dating", "Arranged Marriage", "Modern Dating India"],
  },
  "quiet-quitting-relationship-india-signs": {
    keywords: ["quiet quitting relationship India", "emotional withdrawal partner India", "partner mentally checked out India", "quiet quitting marriage India 2026", "signs partner lost interest India", "emotional disengagement relationship", "quiet quitting meaning relationship"],
    tags: ["Relationship Psychology", "Emotional Withdrawal", "Marriage Problems", "India 2026"],
  },
  "shadow-ghosting-india-dating-limbo": {
    keywords: ["shadow ghosting India", "ghosting without blocking India", "shadow ghosting meaning", "digital breadcrumbing India 2026", "left on seen ghosting India", "ghosting dating trends India", "shadow ghosting signs"],
    tags: ["Ghosting", "Dating Trends", "Digital Dating", "Modern Relationships India"],
  },
  "situationship-burnout-recovery-india": {
    keywords: ["situationship burnout India", "no label relationship stress India", "situationship recovery India 2026", "healing after situationship India", "situationship burnout signs", "getting over situationship India", "undefined relationship burnout"],
    tags: ["Situationship", "Breakup Recovery", "Dating Trends", "Emotional Healing"],
  },
  "slow-dating-movement-india-trends": {
    keywords: ["slow dating India", "slow dating movement India 2026", "deleting dating apps India", "slow dating meaning", "intentional dating India", "quality over quantity dating India", "slow dating Mumbai Delhi"],
    tags: ["Slow Dating", "Dating Trends", "Intentional Dating", "India 2026"],
  },
  "soft-launching-on-reels-india-tips": {
    keywords: ["soft launch relationship India", "soft launching on reels India", "Instagram relationship announcement India", "soft launch meaning dating India 2026", "how to soft launch relationship", "subtle relationship reveal India", "soft launch reels tips"],
    tags: ["Social Media", "Dating Trends", "Instagram Relationships", "Soft Launch"],
  },
  "soft-life-relationships-india-ease": {
    keywords: ["soft life relationships India", "soft life transition India 2026", "struggle love vs soft love India", "peaceful relationship India", "soft life meaning relationships", "easy love India", "soft life movement India"],
    tags: ["Soft Life", "Relationship Psychology", "Peaceful Relationships", "India 2026"],
  },
  "solo-polyamory-india-dating-trends": {
    keywords: ["solo polyamory India", "solo polyamory meaning India 2026", "dating multiple people India", "polyamory India trends", "solo poly relationships India", "non-monogamy India", "self-partnered polyamory India"],
    tags: ["Solo Polyamory", "Non-Monogamy", "Dating Trends", "Modern Relationships India"],
  },
  "stay-at-home-husband-india-new-trends": {
    keywords: ["stay at home husband India", "SAHH India 2026", "house husband India trend", "stay home dad India", "gender role reversal India", "husband homemaker India", "masculinity India 2026"],
    tags: ["Gender Roles", "Stay-at-Home Husband", "Modern Marriage", "India 2026"],
  },
};

let updated = 0;
let skipped = 0;

for (const [slug, fix] of Object.entries(FIXES)) {
  const filePath = path.join(blogsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${slug}`);
    skipped++;
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");

  // Find the closing --- of frontmatter
  const firstDash = content.indexOf("---");
  if (firstDash === -1) { skipped++; continue; }
  const secondDash = content.indexOf("---", firstDash + 3);
  if (secondDash === -1) { skipped++; continue; }

  const frontmatter = content.slice(firstDash + 3, secondDash);

  // Only add fields that are actually missing
  const additions = [];

  if (!frontmatter.includes("\nauthor:") && !frontmatter.includes("\r\nauthor:")) {
    additions.push(`author: "Paaji Connect"`);
  }
  if (!frontmatter.includes("\ntags:") && !frontmatter.includes("\r\ntags:")) {
    additions.push(`tags: ${JSON.stringify(fix.tags)}`);
  }
  if (!frontmatter.includes("\nkeywords:") && !frontmatter.includes("\r\nkeywords:")) {
    additions.push(`keywords: ${JSON.stringify(fix.keywords)}`);
  }

  if (additions.length === 0) {
    console.log(`SKIP (already has fields): ${slug}`);
    skipped++;
    continue;
  }

  // Remove targetAudience (non-standard field that does nothing for SEO)
  let newFrontmatter = frontmatter.replace(/\r?\ntargetAudience:[^\r\n]*/g, "");

  // Insert new fields before the closing ---
  const insertBlock = "\n" + additions.join("\n");
  const newContent =
    content.slice(0, firstDash + 3) +
    newFrontmatter +
    insertBlock +
    "\n" +
    content.slice(secondDash);

  fs.writeFileSync(filePath, newContent, "utf8");
  console.log(`UPDATED: ${slug} (added: ${additions.map(a => a.split(":")[0]).join(", ")})`);
  updated++;
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
