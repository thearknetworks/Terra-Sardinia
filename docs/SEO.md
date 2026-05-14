# SEO implementation (Terra Sardinia)

This document describes the SEO-related changes in the repo: why they exist, what was added, and how to maintain them. It is meant for anyone implementing pages, deploying the site, or hooking up prerendering.

## Goals

1. **Correct metadata per route** — Each important page exposes a unique `<title>`, meta description, canonical URL, and Open Graph / Twitter tags so crawlers and social previews see meaningful content.
2. **Stable blog URLs** — Blog posts use **immutable slugs** (not only numeric IDs) so canonical links do not change when you add CMS content later.
3. **Prerender-ready SPA** — Critical routes mark when content is ready (`data-seo-ready`) so a headless browser can snapshot HTML after React has rendered (optional server/CI step).
4. **Discovery** — `robots.txt` and a generated `sitemap.xml` help search engines find localized URLs.

The live app remains a **Create React App SPA**; prerender writes static HTML **alongside** the normal `build/` output if you configure your reverse proxy to serve those files first.

---

## New dependencies

| Package | Type | Purpose |
|--------|------|--------|
| `react-helmet-async` | runtime | Injects `<head>` tags per route without duplicate-provider issues in React 18. |
| `puppeteer` | dev | Headless Chrome for `seo/prerender.js` (run on server or CI, not in the browser bundle). |

`HelmetProvider` wraps the app once in `src/index.js`.

---

## Environment variables

Copy from `.env.example` and adjust for each environment.

| Variable | Used by | Purpose |
|----------|---------|--------|
| `REACT_APP_SITE_ORIGIN` | React (`src/utils/seo.js`) | **Production** public site URL, **no trailing slash** (e.g. `https://www.terra-sardinia.com`). Canonical and absolute `og:image` URLs depend on this at **build time** in CRA. |
| `SEO_SITE_ORIGIN` | `seo/prerender.js`, `seo/generate-sitemap.js` | Origin Puppeteer opens and sitemap `<loc>` values when generating from Node. |
| `SEO_OUT_DIR` | `seo/prerender.js` | Directory where snapshot `index.html` files are written (mirrors URL path). |
| `SEO_CONCURRENCY` | `seo/prerender.js` | Parallel browser tabs (default `3`). |
| `SEO_API_BASE` | `seo/routes.js` | Optional. If set, fetches `GET {SEO_API_BASE}/public/blog/slugs` (JSON array of slugs). If missing or failing, slugs are read from `src/Components/data/data-post.json`. |
| `SEO_ROUTES` | `seo/routes.js` | Optional JSON array of pathnames to prerender only, e.g. `["/en/blog","/en/blog/my-slug"]`. |
| `SEO_WEBHOOK_SECRET` | `seo/webhook-server.js` | Shared secret; request must send header `x-seo-secret` with this value. |
| `SEO_WEBHOOK_PORT` | `seo/webhook-server.js` | Listen port (default `5050`). |
| `SEO_PRERENDER_CMD` | `seo/webhook-server.js` | Override command run when webhook fires (default runs `seo/prerender.js`). |

---

## Routing and blog URLs

All localized routes live under **`/:lang/...`** (see `LanguageWrapper` and `src/Pages/RouterPage.jsx`). Supported languages: `en`, `fr`, `es`, `nl`, `de`, `it`.

**Blog**

- Index: `/{lang}/blog`
- Post: `/{lang}/blog/{slug}`

The route parameter was renamed from `:id` to **`slug`**. Posts are still keyed by numeric `id` in data, but:

- **Canonical URLs use `slug`** (lowercase, hyphenated; do not change after publish without redirects).
- If someone opens **`/{lang}/blog/1`** (numeric), the app resolves the post and **redirects** to **`/{lang}/blog/{slug}`** via `Navigate` in `BlogDetailsMain`.

Post definitions live in **`src/Components/data/data-post.json`**. Each post should include at least:

- `id`, `slug`, `title`, `image`, `bannerImg`
- `excerpt` — used for meta description (clipped in code)
- `publishedAt`, `updatedAt` — ISO 8601 strings for article meta when present

---

## Application code changes (summary)

| Area | Files | What changed |
|------|--------|----------------|
| App shell | `src/index.js` | `HelmetProvider` wraps `<App />`. |
| SEO helpers | `src/utils/seo.js` | `getSiteOrigin()`, `absoluteAssetUrl()`, `clipMetaDescription()`. |
| Links under language | `src/hooks/useLangPrefix.js` | Returns `/${lang}` from `useParams()` for consistent internal links. |
| Home | `src/Pages/HomeOne.jsx` | `Helmet` + `data-seo-ready="1"` wrapper. |
| Blog list | `src/Pages/Blog.jsx` | `Helmet` for index SEO. |
| Blog list body | `src/Components/Blog/BlogInner.jsx` | Wrapper `data-seo-ready="1"`; links use `useLangPrefix()`; recent posts link by slug. |
| Blog cards | `src/Components/Blog/BlogPost.jsx` | Links use `/${lang}/blog/${slug\|id}`. |
| Blog post | `src/Components/Blog/BlogDetailsMain.jsx` | Full article + social meta, canonical, redirect numeric → slug, `data-seo-ready="1"`, visible `<h2>` uses `blogPost.title`. |
| Router | `src/Pages/RouterPage.jsx` | `blog/:slug` instead of `blog/:id`. |

---

## Adding SEO to a new page

1. Import `Helmet` from `react-helmet-async` and `useParams` if the path includes `/:lang`.
2. Set `htmlAttributes={{ lang }}` when you have `lang` from the route.
3. Set `<title>`, `<link rel="canonical" href={...} />`, `<meta name="description" />`, and as needed `og:*` / `twitter:*`.
4. Build canonical URL as: **`getSiteOrigin() + '/' + lang + '/your-path'`** (no trailing slash on origin).
5. If the page is prerendered, wrap the main content in an element with **`data-seo-ready="1"`** after content that matters for SEO is on screen (avoid firing before data loads).

---

## Prerender workflow (optional)

**Scripts** (`package.json`):

- `npm run prerender` → `node seo/prerender.js`
- `npm run seo:sitemap` → `node seo/generate-sitemap.js`
- `npm run seo:webhook` → `node seo/webhook-server.js`

**Typical server steps**

1. `npm run build` and serve the `build/` folder at `SEO_SITE_ORIGIN` (or point Puppeteer at staging).
2. Set `SEO_SITE_ORIGIN`, `SEO_OUT_DIR`, and optionally `SEO_API_BASE` / `SEO_ROUTES`.
3. Run `npm run prerender`.
4. Configure Nginx (or similar) so that for chosen paths a matching file under `SEO_OUT_DIR` is served if it exists; otherwise fall back to `index.html`. See **`seo/nginx-snippet.conf`** for ideas tailored to **`/{lang}/blog/...`**.

The script waits for **`[data-seo-ready='1']`** and checks that the HTML includes `<title>` and `rel="canonical"`.

---

## Sitemap and robots

- **`public/sitemap.xml`** — Regenerate with `npm run seo:sitemap`. It lists `/{lang}/home`, `/{lang}/blog`, and each `/{lang}/blog/{slug}` for all supported languages. Uses `SEO_SITE_ORIGIN` or `REACT_APP_SITE_ORIGIN` or a default placeholder — **set env to your real domain** before committing generated output if URLs must be exact.
- **`public/robots.txt`** — Points to the sitemap and disallows `/internal/` (for webhook path naming). **Update the `Sitemap:` line** to your production origin.

---

## Webhook (optional)

`seo/webhook-server.js` listens on **`127.0.0.1`** for **POST `/internal/rebuild-seo`**. Only proceed if the header **`x-seo-secret`** matches **`SEO_WEBHOOK_SECRET`**. Expose it only via reverse proxy to your backend, not the public internet without TLS and rate limits.

---

## Known follow-ups (not exhaustive)

- Some components elsewhere still use **`/blog`** or **`/blog/1`** without the **`/{lang}`** prefix. Those links do not match the localized route tree. Prefer **`useLangPrefix()`** or `useParams().lang` for any new or fixed navigation.
- **About**, **contact**, and other marketing pages do not yet all ship custom `Helmet` blocks; add them using the same pattern as `HomeOne` / `Blog` when those pages are SEO-critical.

---

## Quick checklist for releases

- [ ] `REACT_APP_SITE_ORIGIN` set for production builds.
- [ ] `npm run seo:sitemap` run with correct origin; `sitemap.xml` committed or generated in CI.
- [ ] `robots.txt` sitemap URL matches production.
- [ ] If using snapshots: `npm run prerender` after deploy (or webhook), Nginx serves snapshot paths.
- [ ] New blog posts: new **`slug`** + **`excerpt`** + dates in `data-post.json` (or API slugs endpoint implemented and `SEO_API_BASE` set).

For questions about i18n routing, see `src/Components/LanguageWrapper.jsx` and `src/Pages/RouterPage.jsx`.
