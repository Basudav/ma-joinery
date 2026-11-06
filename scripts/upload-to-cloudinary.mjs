/**
 * Upload garden project images to Cloudinary for James Waters Gardening Services.
 *
 * Run from the project root:
 *   node scripts/upload-to-cloudinary.mjs
 */

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

cloudinary.config({
  cloud_name: 's5weheq5',
  api_key: '797942729336197',
  api_secret: 'mxt9DNm8V02tmRum2yu8Zp5aMm4',
});

const UPLOAD_MAP = {
  'all new photo/hero/new hero 1 (1).jpeg': 'james-waters/hero/hero_1',
  'all new photo/hero/new hero 1 (2).jpeg': 'james-waters/hero/hero_2',
  'all new photo/hero/new hero 1 (3).jpeg': 'james-waters/hero/hero_3',
};

async function run() {
  for (const [relPath, publicId] of Object.entries(UPLOAD_MAP)) {
    const fullPath = path.join(PUBLIC_DIR, relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`Skipping missing file: ${relPath}`);
      continue;
    }
    console.log(`Uploading ${relPath} -> ${publicId}`);
    try {
      const res = await cloudinary.uploader.upload(fullPath, {
        public_id: publicId,
        overwrite: true,
        resource_type: 'image',
      });
      console.log(`Uploaded: ${res.secure_url}`);
    } catch (err) {
      console.error(`Failed ${publicId}:`, err);
    }
  }
}

run();
