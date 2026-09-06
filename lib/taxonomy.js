/**
 * Canonical category taxonomy.
 *
 * The blog previously used 29 free-text category labels (and 40 posts had none
 * at all), which fragmented the archive and made topical clustering impossible.
 * Everything now resolves to one of 8 hubs, each with a real crawlable URL at
 * /blog/category/<slug>.
 */

export const CATEGORIES = [
  {
    slug: "dating-trends",
    name: "Dating Trends",
    title: "Modern Dating Trends in India",
    blurb:
      "The dating language of 2026 — decoded. What each trend actually means, why it happens, and how to respond without losing yourself.",
    intent: "Understand the slang, spot the pattern, decide what you want.",
  },
  {
    slug: "breakup-recovery",
    name: "Breakup Recovery",
    title: "Breakup Recovery & Moving On",
    blurb:
      "Structured, practical recovery after a breakup — the stages, the setbacks, and what actually shortens the healing curve.",
    intent: "Get through the first 90 days and rebuild from there.",
  },
  {
    slug: "marriage-and-divorce",
    name: "Marriage & Divorce",
    title: "Marriage, In-Laws & Divorce in India",
    blurb:
      "Long-term partnership in the Indian context — in-laws, finances, intimacy, and the honest question of when to stay and when to leave.",
    intent: "Navigate married life and the decisions that come with it.",
  },
  {
    slug: "communication",
    name: "Communication",
    title: "Communication Skills for Couples",
    blurb:
      "The specific sentences, timing, and repair moves that turn a recurring fight into a solved problem.",
    intent: "Say the hard thing without starting a war.",
  },
  {
    slug: "relationship-psychology",
    name: "Relationship Psychology",
    title: "Attachment, Trauma & Relationship Psychology",
    blurb:
      "Why you repeat the same patterns — attachment styles, childhood conditioning, and the research behind adult bonding.",
    intent: "Understand the mechanism driving your choices.",
  },
  {
    slug: "toxic-relationships",
    name: "Toxic Patterns & Red Flags",
    title: "Toxic Relationships, Red Flags & Trust Repair",
    blurb:
      "Gaslighting, narcissistic abuse, infidelity and coercive control — how to name what is happening and what to do next.",
    intent: "Name it accurately, then act on it safely.",
  },
  {
    slug: "coaching-and-therapy",
    name: "Coaching & Therapy",
    title: "Relationship Coaching & Therapy in India",
    blurb:
      "How coaching and therapy actually work in India — formats, costs, what to ask, and how to pick the right kind of help.",
    intent: "Choose the right support before you spend money on it.",
  },
  {
    slug: "digital-love",
    name: "Digital Love",
    title: "Dating Apps, Social Media & AI in Relationships",
    blurb:
      "How screens reshape intimacy — app fatigue, micro-cheating, AI companions, and drawing boundaries around the phone.",
    intent: "Keep technology from quietly eroding the relationship.",
  },
];

export const CATEGORY_BY_SLUG = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c])
);

export const DEFAULT_CATEGORY = "dating-trends";

/** Legacy free-text labels -> canonical slug. */
const LABEL_MAP = {
  "modern dating trends": "dating-trends",
  "dating trends": "dating-trends",
  "modern dating": "dating-trends",
  "dating advice": "dating-trends",
  "relationship advice": "relationship-psychology",
  "modern relationships": "relationship-psychology",
  "relationship health": "relationship-psychology",
  "emotional intimacy": "relationship-psychology",
  psychology: "relationship-psychology",
  "relationship psychology": "relationship-psychology",
  "psychology of relationships": "relationship-psychology",
  "breakup recovery": "breakup-recovery",
  breakups: "breakup-recovery",
  "modern marriage": "marriage-and-divorce",
  "marriage & divorce": "marriage-and-divorce",
  "marriage & relationships": "marriage-and-divorce",
  communication: "communication",
  "communication tips": "communication",
  "relationship skills": "communication",
  "relationship red flags": "toxic-relationships",
  "relationship awareness": "toxic-relationships",
  "emotional abuse awareness": "toxic-relationships",
  "trust & repair": "toxic-relationships",
  "trust & healing": "toxic-relationships",
  "relationship repair": "toxic-relationships",
  "relationship coaching": "coaching-and-therapy",
  "digital wellness": "digital-love",
  "mental health & relationships": "digital-love",
  "mental health": "digital-love",
  "ai + relationships": "digital-love",
};

/** Per-slug overrides for posts whose legacy label was missing or misleading. */
const SLUG_MAP = {
  "arranged-marriage-first-meeting-questions-to-ask-india": "marriage-and-divorce",
  "avoidant-attachment-style-in-relationships-india": "relationship-psychology",
  "breakup-recovery-coach-india": "coaching-and-therapy",
  "childhood-trauma-affecting-relationships-india": "relationship-psychology",
  "communication-coaching-couples-india": "coaching-and-therapy",
  "couples-therapy-alternative-india": "coaching-and-therapy",
  "dating-trends-2024-india-find-right-partner": "dating-trends",
  "dink-couples-india-dual-income-no-kids-relationship-advice": "marriage-and-divorce",
  "emotional-infidelity-in-marriage-what-it-is-india": "toxic-relationships",
  "emotionally-focused-therapy-eft-for-couples-india": "coaching-and-therapy",
  "financial-disagreements-in-marriage-how-to-solve-them": "marriage-and-divorce",
  "financial-infidelity-in-marriage-hiding-money-from-spouse": "toxic-relationships",
  "grey-divorce-india-divorcing-after-50-counseling": "marriage-and-divorce",
  "how-social-media-ruins-relationships-and-how-to-fix-it": "digital-love",
  "how-to-balance-career-and-marriage-india": "marriage-and-divorce",
  "how-to-convince-parents-for-love-marriage-without-hurting-them": "marriage-and-divorce",
  "how-to-deal-with-gaslighting-in-a-relationship": "toxic-relationships",
  "how-to-deal-with-toxic-mother-in-law-india": "marriage-and-divorce",
  "how-to-fix-relationship-problems-india": "communication",
  "how-to-get-your-ex-back-psychology-india": "breakup-recovery",
  "how-to-manage-in-law-interference-in-marriage-india": "marriage-and-divorce",
  "how-to-survive-long-distance-relationship-india-to-abroad": "communication",
  "inter-caste-marriage-problems-and-solutions-india": "marriage-and-divorce",
  "lgbtq-couples-counseling-india-finding-safe-therapy": "coaching-and-therapy",
  "live-in-relationship-problems-india-2024": "marriage-and-divorce",
  "marriage-counseling-vs-relationship-coach-india": "coaching-and-therapy",
  "narcissistic-abuse-in-marriage-india-signs-and-healing": "toxic-relationships",
  "online-couples-therapy-india-benefits": "coaching-and-therapy",
  "online-relationship-coaching-india": "coaching-and-therapy",
  "pre-marital-counseling-india-why-you-need-it": "coaching-and-therapy",
  "private-relationship-coaching-india": "coaching-and-therapy",
  "rekindle-romance-after-years-of-marriage": "marriage-and-divorce",
  "relationship-advice-india-arranged-marriage": "marriage-and-divorce",
  "relationship-coach-india": "coaching-and-therapy",
  "relationship-reset-india": "coaching-and-therapy",
  "relationship-trust-issues-india": "toxic-relationships",
  "sexless-marriage-india-causes-and-how-to-fix-it": "marriage-and-divorce",
  "signs-your-husband-is-cheating-on-you-india": "toxic-relationships",
  "trauma-bonding-vs-love-how-to-tell-difference": "toxic-relationships",
  "when-to-walk-away-from-a-marriage-signs-of-divorce": "marriage-and-divorce",
};

/**
 * Resolve a post to its canonical category slug.
 * Slug overrides win, then the legacy label, then the default hub.
 */
export function resolveCategorySlug({ slug = "", category = "" } = {}) {
  if (SLUG_MAP[slug]) return SLUG_MAP[slug];

  const mapped = LABEL_MAP[category.toString().trim().toLowerCase()];
  if (mapped) return mapped;

  return DEFAULT_CATEGORY;
}

export function getCategory(slug) {
  return CATEGORY_BY_SLUG[slug] || CATEGORY_BY_SLUG[DEFAULT_CATEGORY];
}

export function getCategoryHref(slug) {
  return `/blog/category/${slug}`;
}
