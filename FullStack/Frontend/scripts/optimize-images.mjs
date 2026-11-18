// Usage: npm run optimize:images
// Converts any PNG/JPG in /public and /src/assets to resized WebP (max 1920px wide),
// then deletes the original so heavy images never reach production.
// After running, reference the new .webp file name in your code.
import sharp from 'sharp'
import { readdir, unlink } from 'node:fs/promises'
import path from 'node:path'

const DIRS = ['public', 'src/assets']
const KEEP = new Set(['fabicon.png']) // favicon stays PNG
const MAX_WIDTH = 1920

for (const dir of DIRS) {
  for (const file of await readdir(dir)) {
    if (!/\.(png|jpe?g)$/i.test(file) || KEEP.has(file)) continue
    const src = path.join(dir, file)
    const out = path.join(dir, file.replace(/\.(png|jpe?g)$/i, '.webp'))
    await sharp(src, { limitInputPixels: false })
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(out)
    await unlink(src)
    console.log('converted', file, '->', path.basename(out))
  }
}
