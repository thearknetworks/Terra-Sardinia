const fs = require("fs");
const path = require("path");

const LANGS = ["en", "fr", "es", "nl", "de", "it"];
const POSTS_PATH = path.join(
  __dirname,
  "..",
  "src",
  "Components",
  "data",
  "data-post.json"
);

function loadSlugsFromRepo() {
  const raw = fs.readFileSync(POSTS_PATH, "utf8");
  const posts = JSON.parse(raw);
  return posts.map((p) => p.slug).filter(Boolean);
}

/**
 * Optional: GET {SEO_API_BASE}/public/blog/slugs → string[]
 */
async function fetchSlugsFromApi() {
  const base = process.env.SEO_API_BASE;
  if (!base) return null;
  const url = `${base.replace(/\/$/, "")}/public/blog/slugs`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}

/**
 * Routes are pathname-only, matching react-router (e.g. /en/blog/my-slug).
 */
async function getPrerenderRoutes() {
  const only = process.env.SEO_ROUTES;
  if (only) {
    try {
      const list = JSON.parse(only);
      if (Array.isArray(list) && list.length) {
        return list.map((r) => (r.startsWith("/") ? r : `/${r}`));
      }
    } catch {
      /* fall through */
    }
  }

  const routes = new Set();
  let slugs = await fetchSlugsFromApi();
  if (!slugs || slugs.length === 0) {
    slugs = loadSlugsFromRepo();
  }

  const staticPages = ["home", "about", "contact", "destination", "blog"];

  for (const lang of LANGS) {
    for (const page of staticPages) {
      routes.add(`/${lang}/${page}`);
    }
    for (const slug of slugs) {
      routes.add(`/${lang}/blog/${slug}`);
    }
  }

  return Array.from(routes).sort();
}

module.exports = { getPrerenderRoutes, LANGS };
