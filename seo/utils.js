/**
 * Path helpers for static HTML snapshots (mirrors public URL paths).
 */

const fs = require("fs/promises");
const path = require("path");

function toSnapshotFilePath(outDir, route) {
  const clean = route.replace(/^\//, "").replace(/\/$/, "");
  return path.join(outDir, clean, "index.html");
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

module.exports = { toSnapshotFilePath, ensureDir };
