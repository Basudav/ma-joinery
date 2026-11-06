import https from 'https';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 's5weheq5',
  api_key: '797942729336197',
  api_secret: 'mxt9DNm8V02tmRum2yu8Zp5aMm4'
});

function searchCommons(term, limit = 4) {
  return new Promise((resolve) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=' +
      encodeURIComponent(term + ' filetype:bitmap') +
      '&srnamespace=6&srlimit=' + limit + '&format=json';
    https.get(url, { headers: { 'User-Agent': 'JamesWatersGardening/1.0 (contact@jameswatersgardening.co.uk)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const titles = (json.query.search || []).map(s => s.title);
          resolve(titles);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

function getThumbUrl(title) {
  return new Promise((resolve, reject) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&titles=' +
      encodeURIComponent(title) + '&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json';
    https.get(url, { headers: { 'User-Agent': 'JamesWatersGardening/1.0 (contact@jameswatersgardening.co.uk)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = Object.values(json.query.pages);
          if (pages[0] && pages[0].imageinfo && pages[0].imageinfo[0].thumburl) {
            resolve(pages[0].imageinfo[0].thumburl);
          } else {
            reject(new Error('No thumburl for ' + title));
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'JamesWatersGardening/1.0 (contact@jameswatersgardening.co.uk)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadBuffer(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function uploadBuffer(buf, publicId) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({
      public_id: publicId,
      overwrite: true,
      resource_type: 'image'
    }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
    stream.end(buf);
  });
}

async function uploadCategory(searchTerm, publicIdPrefix, count = 4) {
  console.log(`\nSearching for "${searchTerm}"...`);
  const titles = await searchCommons(searchTerm, count + 2);
  const uploadedUrls = [];
  let index = 1;

  for (const title of titles) {
    if (index > count) break;
    try {
      console.log(`Getting thumb for: ${title}`);
      const thumbUrl = await getThumbUrl(title);
      const buf = await downloadBuffer(thumbUrl);
      const publicId = `${publicIdPrefix}_${index}`;
      console.log(`Uploading -> ${publicId} (${Math.round(buf.length / 1024)} KB)`);
      const res = await uploadBuffer(buf, publicId);
      uploadedUrls.push(res.secure_url);
      index++;
    } catch (err) {
      console.warn(`Failed for ${title}:`, err.message);
    }
  }

  return uploadedUrls;
}

async function main() {
  console.log('=== Starting Cloudinary Gardening Photo Sync ===');

  // 1. Featured Before / After
  console.log('--- 1. Featured Before & After ---');
  await uploadCategory('overgrown wild garden', 'james-waters/featured/before', 1);
  await uploadCategory('neat english garden lawn flowers', 'james-waters/featured/after', 1);

  // 2. Services (8 services)
  console.log('--- 2. Services ---');
  await uploadCategory('mowing lawn garden grass', 'james-waters/services/lawn-care/lawn', 4);
  await uploadCategory('hedge trimming garden shears privet', 'james-waters/services/hedges/hedge', 4);
  await uploadCategory('pruning shrubs rose garden secateurs', 'james-waters/services/pruning/pruning', 4);
  await uploadCategory('flower garden planting beds borders', 'james-waters/services/planting/planting', 4);
  await uploadCategory('garden weeding flower bed border', 'james-waters/services/weeding/weeding', 4);
  await uploadCategory('garden tidy clean raking leaves yard', 'james-waters/services/tidy/tidy', 4);
  await uploadCategory('overgrown garden clearance brush cutting', 'james-waters/services/clearance/clearance', 4);
  await uploadCategory('garden patio stone paving pressure wash', 'james-waters/services/patio/patio', 4);

  // 3. Projects (8 projects + project before/afters)
  console.log('--- 3. Projects ---');
  await uploadCategory('overgrown garden brush', 'james-waters/projects/clearance-before', 1);
  await uploadCategory('clean cleared garden borders', 'james-waters/projects/clearance-after', 1);
  await uploadCategory('hedge removal cut tree garden', 'james-waters/projects/large-hedge-removal', 1);
  await uploadCategory('neatly cut trimmed garden hedge', 'james-waters/projects/hedge-trimming', 1);
  await uploadCategory('overgrown untidy hedge', 'james-waters/projects/hedge-before', 1);
  await uploadCategory('freshly mowed striped lawn garden', 'james-waters/projects/lawn-mowing', 1);
  await uploadCategory('neat clean garden border tidy', 'james-waters/projects/garden-tidy', 1);
  await uploadCategory('colourful summer flower planting garden', 'james-waters/projects/seasonal-planting', 1);
  await uploadCategory('dirty patio stone paving moss', 'james-waters/projects/patio-before', 1);
  await uploadCategory('clean power washed stone garden patio', 'james-waters/projects/patio-after', 1);
  await uploadCategory('restored wooden garden bench table', 'james-waters/projects/furniture-restoration', 1);

  console.log('\n=== All Photo Uploads Complete! ===');
}

main().catch(console.error);
