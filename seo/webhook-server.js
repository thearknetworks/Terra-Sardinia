/**
 * Minimal POST /internal/rebuild-seo — run behind Nginx on localhost only.
 * Env: SEO_WEBHOOK_SECRET, SEO_PRERENDER_CMD (optional, default: npm run prerender from repo root)
 */
require("dotenv").config();
const http = require("http");
const { exec } = require("child_process");
const path = require("path");

const SECRET = process.env.SEO_WEBHOOK_SECRET;
const CMD =
  process.env.SEO_PRERENDER_CMD ||
  `node ${path.join(__dirname, "prerender.js")}`;
const PORT = Number(process.env.SEO_WEBHOOK_PORT || "5050");

if (!SECRET) {
  console.error("Set SEO_WEBHOOK_SECRET");
  process.exit(1);
}

const server = http.createServer((req, res) => {
  if (req.method !== "POST" || req.url !== "/internal/rebuild-seo") {
    res.writeHead(404);
    res.end();
    return;
  }
  if (req.headers["x-seo-secret"] !== SECRET) {
    res.writeHead(401);
    res.end("Unauthorized");
    return;
  }
  exec(CMD, { env: process.env, maxBuffer: 10 * 1024 * 1024 }, (err, stdout, stderr) => {
    if (stdout) process.stdout.write(stdout);
    if (stderr) process.stderr.write(stderr);
    if (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ ok: false, error: err.message }));
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`SEO webhook listening on http://127.0.0.1:${PORT}`);
});
