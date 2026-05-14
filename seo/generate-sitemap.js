/**
 * Writes public/sitemap.xml from repo blog slugs + static paths.
 * Run: node seo/generate-sitemap.js
 * Env: SEO_SITE_ORIGIN or REACT_APP_SITE_ORIGIN (canonical site root, no trailing slash)
 */
require("dotenv").config();
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

const origin = (
  process.env.SEO_SITE_ORIGIN ||
  process.env.REACT_APP_SITE_ORIGIN ||
  "https://terra-sardinia.com"
).replace(/\/$/, "");

const posts = JSON.parse(fs.readFileSync(POSTS_PATH, "utf8"));
const slugs = posts.map((p) => p.slug).filter(Boolean);

const urls = [];
const today = new Date().toISOString().slice(0, 10);

for (const lang of LANGS) {
  urls.push({ loc: `${origin}/${lang}/home`, priority: "1.0" });
  urls.push({ loc: `${origin}/${lang}/blog`, priority: "0.8" });
  for (const slug of slugs) {
    urls.push({ loc: `${origin}/${lang}/blog/${slug}`, priority: "0.7" });
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const out = path.join(__dirname, "..", "public", "sitemap.xml");
fs.writeFileSync(out, xml, "utf8");
console.log(`Wrote ${urls.length} URLs to ${out}`);
