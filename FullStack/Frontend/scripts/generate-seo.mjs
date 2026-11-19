// Runs automatically after `npm run build` (see "postbuild" in package.json).
//
// What it does (all inside /dist):
//   1. Writes dist/<route>/index.html for every route in src/seo/seoConfig.js, with the correct
//      <title>, description, canonical, robots, Open Graph, Twitter and JSON-LD already in the HTML.
//      (Crawlers that do not run JavaScript, like WhatsApp/LinkedIn/Bing previews, now see real tags.)
//   2. Creates sitemap.xml (only indexable pages)
//   3. Creates robots.txt
//
// Vercel serves a real file before applying the "/(.*) -> /index.html" rewrite, so /erp opens dist/erp/index.html.
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { SITE, ROUTES, getMeta, buildSeo, isNoindex, abs } = await import(pathToFileURL(path.join(root, "src/seo/seoConfig.js")).href);

try {
  await access(path.join(dist, "index.html"));
} catch {
  console.error("[seo] dist/index.html not found. Run `npm run build` first.");
  process.exit(1);
}

const baseHtml = await readFile(path.join(dist, "index.html"), "utf8");

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Remove tags we are about to re-create so nothing is duplicated
function stripSeoTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']robots["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, "");
}

function headBlock(seo) {
  const lines = [
    `<title>${esc(seo.title)}</title>`,
    `<meta name="description" content="${esc(seo.description)}" />`,
    `<meta name="robots" content="${esc(seo.robots)}" />`,
    `<link rel="canonical" href="${esc(seo.canonical)}" />`,
    ...Object.entries(seo.og).map(([k, v]) => `<meta property="${k}" content="${esc(v)}" />`),
    ...Object.entries(seo.twitter).map(([k, v]) => `<meta name="${k}" content="${esc(v)}" />`),
  ];
  if (seo.jsonLd) {
    lines.push(`<script type="application/ld+json" data-seo="jsonld">${JSON.stringify(seo.jsonLd).replace(/</g, "\\u003c")}</script>`);
  }
  return "    " + lines.join("\n    ") + "\n  ";
}

const paths = Object.keys(ROUTES);
let written = 0;

for (const p of paths) {
  const meta = getMeta(p);
  const html = stripSeoTags(baseHtml).replace("</head>", headBlock(buildSeo(meta)) + "</head>");
  const out = p === "/" ? path.join(dist, "index.html") : path.join(dist, p.replace(/^\//, ""), "index.html");
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, html, "utf8");
  written++;
}

// ---------- sitemap.xml ----------
const today = new Date().toISOString().slice(0, 10);
const indexable = paths.filter((p) => {
  const m = ROUTES[p];
  return !isNoindex(p, m) && !m.canonical;
});
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  indexable
    .map((p) => {
      const pr = ROUTES[p].priority ?? (p.split("/").filter(Boolean).length > 1 ? 0.6 : 0.8);
      return `  <url>\n    <loc>${esc(p === "/" ? SITE.url + "/" : abs(p))}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${pr.toFixed(1)}</priority>\n  </url>`;
    })
    .join("\n") +
  `\n</urlset>\n`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");

// ---------- robots.txt ----------
const robots = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin-
Disallow: /dashboard
Disallow: /login
Disallow: /api/

Sitemap: ${SITE.url}/sitemap.xml
`;
await writeFile(path.join(dist, "robots.txt"), robots, "utf8");

console.log(`[seo] ${written} route pages written, ${indexable.length} URLs in sitemap.xml, robots.txt created`);
