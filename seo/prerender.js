/**
 * Prerender SPA routes to static HTML for SEO (run on server/CI after deploy).
 *
 * Requires: npm run build, site reachable at SEO_SITE_ORIGIN (served build).
 *
 * Env:
 *   SEO_SITE_ORIGIN   e.g. https://www.example.com (no trailing slash)
 *   SEO_OUT_DIR       e.g. /var/www/terra/prerender
 *   SEO_CONCURRENCY   default 3
 *   SEO_API_BASE      optional; else slugs read from src/Components/data/data-post.json
 *   SEO_ROUTES        optional JSON array of paths to prerender only
 */

require("dotenv").config();
const fs = require("fs/promises");
const puppeteer = require("puppeteer");
const { getPrerenderRoutes } = require("./routes");
const { toSnapshotFilePath, ensureDir } = require("./utils");

const SITE_ORIGIN = (process.env.SEO_SITE_ORIGIN || "").replace(/\/$/, "");
const OUT_DIR = process.env.SEO_OUT_DIR;
const CONCURRENCY = Number(process.env.SEO_CONCURRENCY ?? "3");

if (!SITE_ORIGIN || !OUT_DIR) {
  console.error("Set SEO_SITE_ORIGIN and SEO_OUT_DIR.");
  process.exit(1);
}

async function renderRoute(browser, route) {
  const url = `${SITE_ORIGIN}${route}`;
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (compatible; TerraSardinia-SEO-Prerender/1.0; +https://terra-sardinia.com)"
  );
  await page.goto(url, { waitUntil: "networkidle2", timeout: 120000 });
  await page.waitForSelector("[data-seo-ready='1']", { timeout: 60000 });
  const html = await page.content();
  if (!html.includes("<title>") || !html.includes('rel="canonical"')) {
    throw new Error(`SEO tags missing for ${route}`);
  }
  const filePath = toSnapshotFilePath(OUT_DIR, route);
  await ensureDir(filePath);
  await fs.writeFile(filePath, html, "utf8");
  await page.close();
  return { route, filePath };
}

async function worker(browser, queue, failCount) {
  while (queue.length) {
    const route = queue.shift();
    try {
      const r = await renderRoute(browser, route);
      console.log(`OK ${r.route} -> ${r.filePath}`);
    } catch (e) {
      failCount.push({ route, err: e.message || String(e) });
      console.error(`FAIL ${route}`, e.message || e);
    }
  }
}

async function main() {
  const routes = await getPrerenderRoutes();
  console.log(`Prerendering ${routes.length} routes…`);
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const queue = [...routes];
  const failCount = [];
  const workers = Array.from({ length: CONCURRENCY }).map(() =>
    worker(browser, queue, failCount)
  );
  await Promise.all(workers);
  await browser.close();
  if (failCount.length) {
    console.error(`Completed with ${failCount.length} error(s).`);
    process.exit(1);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
