import https from 'https';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 's5weheq5',
  api_key: '797942729336197',
  api_secret: 'mxt9DNm8V02tmRum2yu8Zp5aMm4'
});

function searchGeograph(term, limit = 5) {
  return new Promise((resolve) => {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=' +
      encodeURIComponent('geograph ' + term) +
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

async function uploadOne(searchTerm, publicId) {
  try {
    const titles = await searchGeograph(searchTerm, 3);
    for (const title of titles) {
      try {
        const thumbUrl = await getThumbUrl(title);
        const buf = await downloadBuffer(thumbUrl);
        const res = await uploadBuffer(buf, publicId);
        console.log(`✓ Uploaded ${publicId} from ${title} (${Math.round(buf.length / 1024)} KB)`);
        return res.secure_url;
      } catch (e) {
        // try next title
      }
    }
    console.warn(`✗ No image found for ${publicId} with term: ${searchTerm}`);
  } catch (err) {
    console.error(`Error uploading ${publicId}:`, err.message);
  }
}

async function uploadMultiple(searchTerm, publicIdPrefix, count = 4) {
  try {
    const titles = await searchGeograph(searchTerm, count + 4);
    let idx = 1;
    for (const title of titles) {
      if (idx > count) break;
      try {
        const thumbUrl = await getThumbUrl(title);
        const buf = await downloadBuffer(thumbUrl);
        const publicId = `${publicIdPrefix}_${idx}`;
        await uploadBuffer(buf, publicId);
        console.log(`✓ Uploaded ${publicId} from ${title} (${Math.round(buf.length / 1024)} KB)`);
        idx++;
      } catch (e) {
        // try next
      }
    }
  } catch (err) {
    console.error(`Error uploading ${publicIdPrefix}:`, err.message);
  }
}

async function run() {
  console.log('=== Uploading Real UK Garden Photos to Cloudinary ===');

  // Featured Before & After
  console.log('\n--- Featured Before / After ---');
  await uploadOne('overgrown garden Cammo', 'james-waters/featured/before');
  await uploadOne('neat lawn garden flower border', 'james-waters/featured/after');

  // Services (8 services × 4 photos each)
  console.log('\n--- Services ---');
  await uploadMultiple('garden lawn mown', 'james-waters/services/lawn-care/lawn', 4);
  await uploadMultiple('box hedge trimmed', 'james-waters/services/hedges/hedge', 4);
  await uploadMultiple('rose garden pruned shrubs', 'james-waters/services/pruning/pruning', 4);
  await uploadMultiple('walled garden herbaceous flower border', 'james-waters/services/planting/planting', 4);
  await uploadMultiple('flower bed borders garden', 'james-waters/services/weeding/weeding', 4);
  await uploadMultiple('neat garden lawn bench', 'james-waters/services/tidy/tidy', 4);
  await uploadMultiple('overgrown untidy garden', 'james-waters/services/clearance/clearance', 4);
  await uploadMultiple('garden patio Threave', 'james-waters/services/patio/patio', 4);

  // Projects (8 projects + project before/afters)
  console.log('\n--- Projects ---');
  await uploadOne('overgrown garden bushes', 'james-waters/projects/clearance-before');
  await uploadOne('neat garden lawn border', 'james-waters/projects/clearance-after');
  await uploadOne('garden clearance cleared', 'james-waters/projects/overgrown-clearance');

  await uploadOne('hedge removal cut garden tree', 'james-waters/projects/large-hedge-removal');

  await uploadOne('high untidy hedge', 'james-waters/projects/hedge-before');
  await uploadOne('neatly cut box hedge garden', 'james-waters/projects/hedge-after');
  await uploadOne('trimmed garden hedge', 'james-waters/projects/hedge-trimming');

  await uploadOne('striped lawn garden grass', 'james-waters/projects/lawn-mowing');
  await uploadOne('tidy garden borders lawn', 'james-waters/projects/garden-tidy');
  await uploadOne('colourful summer garden flowers', 'james-waters/projects/seasonal-planting');

  await uploadOne('moss stone paving patio garden', 'james-waters/projects/patio-before');
  await uploadOne('clean stone patio garden table', 'james-waters/projects/patio-after');
  await uploadOne('clean stone paved patio garden', 'james-waters/projects/patio-cleaning');

  await uploadOne('garden bench table furniture', 'james-waters/projects/furniture-restoration');

  console.log('\n=== All UK Gardening Photos Uploaded Successfully! ===');
}

run().catch(console.error);
