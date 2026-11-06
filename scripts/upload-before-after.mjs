/**
 * Upload the before & after photos to Cloudinary for James Waters Gardening Services.
 *
 * Run from the project root:
 *   node scripts/upload-before-after.mjs
 */

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'djruawkhq',
  api_key:    '424836826463571',
  api_secret: 'GXC9eWWArTdUNNt6kSImO20Ylio',
});

// TODO: Upload James's before/after photos when ready
async function uploadBeforeAfter() {
  console.log('Ready to upload before/after photos for James Waters Gardening Services.');
}

uploadBeforeAfter();
