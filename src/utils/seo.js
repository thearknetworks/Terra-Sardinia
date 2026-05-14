export function getSiteOrigin() {
  const fromEnv = process.env.REACT_APP_SITE_ORIGIN;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin.replace(/\/$/, "");
  }
  return "https://terra-sardinia.com";
}

export function absoluteAssetUrl(origin, path) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${p}`;
}

export function clipMetaDescription(text, max = 155) {
  if (!text || typeof text !== "string") return "";
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}
