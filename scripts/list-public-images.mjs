/**
 * List every image file inside public/ so you can verify filenames
 * before running the upload script.
 *
 * Run from project root:
 *   node scripts/list-public-images.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

function walk(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, rel);
    } else if (IMAGE_EXTS.has(path.extname(entry.name).toLowerCase())) {
      console.log(rel);
    }
  }
}

console.log('\nImages found inside public/:\n');
walk(PUBLIC_DIR);
console.log('\nDone.\n');

