export const SITE_URL = "https://techwithpaaji.in";
export const SITE_NAME = "Paaji Connect";
export const OG_IMAGE = "/images/og-cover.svg";

export function getCanonical(path = "/") {
  return path.startsWith("/") ? path : `/${path}`;
}

export function getAbsoluteUrl(path = "/") {
  return `${SITE_URL}${getCanonical(path)}`;
}
