// Usage: npm run check:images
// 1) Fails if any code still references .png/.jpg/.jpeg (favicon is allowed)
// 2) Warns about referenced images that do not exist in /public
// 3) Lists raster files still sitting in /public and /src/assets
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ALLOW = new Set(["fabicon.png"]);
const exts = new Set([".jsx", ".js", ".css", ".html"]);
const rasterRe = /\.(png|jpe?g)$/i;

async function walk(dir, out = []) {
  for (const name of await readdir(dir)) {
    const p = path.join(dir, name);
    if ((await stat(p)).isDirectory()) await walk(p, out);
    else out.push(p);
  }
  return out;
}

const publicFiles = new Set(await readdir("public"));
const codeFiles = [...(await walk("src")).filter((f) => exts.has(path.extname(f))), "index.html"];
const rasterRefs = [];
const missing = [];

for (const f of codeFiles) {
  const text = (await readFile(f, "utf8")).replace(/\r/g, "");
  const re = /["'`(]\/([^"'`()<>\n]+?\.(?:webp|png|jpe?g|gif|avif))["'`)]/gi;
  let m;
  while ((m = re.exec(text))) {
    const name = m[1];
    const line = text.slice(0, m.index).split("\n").length;
    if (rasterRe.test(name) && !ALLOW.has(name)) rasterRefs.push(`${f}:${line}  /${name}`);
    if (!publicFiles.has(name)) missing.push(`${f}:${line}  /${name}`);
  }
}

const leftovers = [
  ...[...publicFiles].filter((f) => rasterRe.test(f) && !ALLOW.has(f)).map((f) => "public/" + f),
  ...(await readdir("src/assets")).filter((f) => rasterRe.test(f)).map((f) => "src/assets/" + f),
];

console.log(`\nPNG/JPG references in code : ${rasterRefs.length}`);
rasterRefs.forEach((r) => console.log("  " + r));
console.log(`Missing image files        : ${missing.length}`);
missing.forEach((r) => console.log("  " + r));
console.log(`PNG/JPG files still on disk: ${leftovers.length}`);
leftovers.slice(0, 20).forEach((r) => console.log("  " + r));
if (leftovers.length > 20) console.log(`  ...and ${leftovers.length - 20} more`);
process.exit(rasterRefs.length ? 1 : 0);
