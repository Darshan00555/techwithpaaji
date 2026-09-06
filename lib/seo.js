export const SITE_URL = "https://techwithpaaji.in";
export const SITE_NAME = "Paaji Connect";
export const OG_IMAGE = "/images/og-cover.png";

export function getCanonical(path = "/") {
  return path.startsWith("/") ? path : `/${path}`;
}

export function getAbsoluteUrl(path = "/") {
  return `${SITE_URL}${getCanonical(path)}`;
}

/**
 * Meta description capped for SERP display.
 *
 * Descriptions are authored long enough to work as the on-page lede, so the
 * meta tag takes whole sentences up to the limit rather than cutting mid-word.
 */
export function toMetaDescription(text = "", limit = 160) {
  const clean = text.trim();
  if (clean.length <= limit) return clean;

  const sentences = clean.match(/[^.!?]+[.!?]+(?:\s|$)/g) || [];
  let out = "";
  for (const sentence of sentences) {
    if ((out + sentence).trim().length > limit) break;
    out += sentence;
  }

  out = out.trim();
  if (out.length >= 80) return out;

  // A single long opening sentence — fall back to a clean word boundary.
  const words = clean.slice(0, limit - 1).split(" ");
  words.pop();
  return `${words.join(" ").replace(/[\s,;:—-]+$/, "")}…`;
}
