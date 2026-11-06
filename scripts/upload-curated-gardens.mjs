import https from 'https';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 's5weheq5',
  api_key: '797942729336197',
  api_secret: 'mxt9DNm8V02tmRum2yu8Zp5aMm4'
});

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

const PHOTO_MAP = {
  // Featured Before / After
  'james-waters/featured/before': 'File:Overgrown garden - geograph.org.uk - 1535699.jpg',
  'james-waters/featured/after': 'File:Crocus lawn, Walled Garden, Wallington - geograph.org.uk - 6406250.jpg',

  // Services
  'james-waters/services/lawn-care/lawn_1': 'File:Mowing the lawn at Fulham Palace - geograph.org.uk - 1896528.jpg',
  'james-waters/services/lawn-care/lawn_2': 'File:A Mowed Strip across a Giant Lawn - geograph.org.uk - 1310475.jpg',
  'james-waters/services/lawn-care/lawn_3': 'File:Mown lawn at Upton House - geograph.org.uk - 5034399.jpg',
  'james-waters/services/lawn-care/lawn_4': 'File:Garden Centre Lawn - geograph.org.uk - 164663.jpg',

  'james-waters/services/hedges/hedge_1': 'File:Box Hedge - geograph.org.uk - 419742.jpg',
  'james-waters/services/hedges/hedge_2': 'File:A trim box hedge - geograph.org.uk - 1734500.jpg',
  'james-waters/services/hedges/hedge_3': 'File:Hedge Cutting - geograph.org.uk - 1028601.jpg',
  'james-waters/services/hedges/hedge_4': 'File:Upper Walled Garden - geograph.org.uk - 536763.jpg',

  'james-waters/services/pruning/pruning_1': 'File:Rose Garden, Mottisfont Abbey - geograph.org.uk - 4048450.jpg',
  'james-waters/services/pruning/pruning_2': 'File:The Rose Garden at Castle Howard - geograph.org.uk - 3529362.jpg',
  'james-waters/services/pruning/pruning_3': 'File:Rose Garden, Cliveden - geograph.org.uk - 3557999.jpg',
  'james-waters/services/pruning/pruning_4': 'File:Rose garden, Polesden Lacey - geograph.org.uk - 3045618.jpg',

  'james-waters/services/planting/planting_1': 'File:Herbaceous Border, Kew, London - geograph.org.uk - 2493717.jpg',
  'james-waters/services/planting/planting_2': 'File:Flowers in the herbaceous border - geograph.org.uk - 5905519.jpg',
  'james-waters/services/planting/planting_3': 'File:The kitchen garden - one of the herbaceous borders - geograph.org.uk - 935410.jpg',
  'james-waters/services/planting/planting_4': 'File:Detail of herbaceous border - geograph.org.uk - 935484.jpg',

  'james-waters/services/weeding/weeding_1': 'File:Plas Newydd garden border - geograph.org.uk - 518996.jpg',
  'james-waters/services/weeding/weeding_2': 'File:Herbaceous border, Bodnant Gardens - geograph.org.uk - 332915.jpg',
  'james-waters/services/weeding/weeding_3': 'File:Herbaceous Border, Dewstow Gardens - geograph.org.uk - 656364.jpg',
  'james-waters/services/weeding/weeding_4': 'File:Double herbaceous border - June 2018 - geograph.org.uk - 5794475.jpg',

  'james-waters/services/tidy/tidy_1': 'File:Trim hedge, neat lawn and a bench - geograph.org.uk - 1538832.jpg',
  'james-waters/services/tidy/tidy_2': 'File:The Lawn and Garden at Prestwold Hall - geograph.org.uk - 869832.jpg',
  'james-waters/services/tidy/tidy_3': 'File:Crocus lawn, Walled Garden, Wallington - geograph.org.uk - 6406247.jpg',
  'james-waters/services/tidy/tidy_4': 'File:Lawn roller, Greenbank Garden (NTS) - geograph.org.uk - 1709397.jpg',

  'james-waters/services/clearance/clearance_1': 'File:Overgrown garden - geograph.org.uk - 1535699.jpg',
  'james-waters/services/clearance/clearance_2': 'File:Overgrown garden - geograph.org.uk - 2839092.jpg',
  'james-waters/services/clearance/clearance_3': 'File:Overgrown garden, Cammo - geograph.org.uk - 1523949.jpg',
  'james-waters/services/clearance/clearance_4': 'File:Overgrown Garden - geograph.org.uk - 2657130.jpg',

  'james-waters/services/patio/patio_1': 'File:A floral patio in the Gertrude Jekyll garden - geograph.org.uk - 913263.jpg',
  'james-waters/services/patio/patio_2': 'File:Patio Garden, Threave - geograph.org.uk - 5051720.jpg',
  'james-waters/services/patio/patio_3': 'File:Patio Garden at Threave - geograph.org.uk - 5936053.jpg',
  'james-waters/services/patio/patio_4': 'File:Patio Garden, Threave - geograph.org.uk - 7111307.jpg',

  // Projects
  'james-waters/projects/clearance': 'File:Overgrown Garden - geograph.org.uk - 2657130.jpg',
  'james-waters/projects/clearance-before': 'File:Overgrown garden - geograph.org.uk - 1535699.jpg',
  'james-waters/projects/clearance-after': 'File:Crocus lawn, Walled Garden, Wallington - geograph.org.uk - 6406250.jpg',

  'james-waters/projects/large-hedge-removal': 'File:Hedge Cutting - geograph.org.uk - 1028601.jpg',

  'james-waters/projects/hedge-trimming': 'File:A trim box hedge - geograph.org.uk - 1734500.jpg',
  'james-waters/projects/hedge-before': 'File:Overgrown garden, Cammo - geograph.org.uk - 1523949.jpg',
  'james-waters/projects/hedge-after': 'File:A trim box hedge - geograph.org.uk - 1734500.jpg',

  'james-waters/projects/lawn-mowing': 'File:A Mowed Strip across a Giant Lawn - geograph.org.uk - 1310475.jpg',
  'james-waters/projects/garden-tidy': 'File:Trim hedge, neat lawn and a bench - geograph.org.uk - 1538832.jpg',
  'james-waters/projects/seasonal-planting': 'File:Herbaceous Border, Kew, London - geograph.org.uk - 2493717.jpg',

  'james-waters/projects/patio-cleaning': 'File:A floral patio in the Gertrude Jekyll garden - geograph.org.uk - 913263.jpg',
  'james-waters/projects/patio-before': 'File:Patio Garden, Threave - geograph.org.uk - 7111307.jpg',
  'james-waters/projects/patio-after': 'File:Patio Garden at Threave - geograph.org.uk - 5936053.jpg',

  'james-waters/projects/furniture-restoration': 'File:Benches and table, Great Ambrook Italian Garden - geograph.org.uk - 7880661.jpg'
};

async function run() {
  console.log(`Starting upload of ${Object.keys(PHOTO_MAP).length} curated UK garden photos...`);
  for (const [publicId, fileTitle] of Object.entries(PHOTO_MAP)) {
    try {
      console.log(`Processing: ${publicId} <- ${fileTitle}`);
      const thumbUrl = await getThumbUrl(fileTitle);
      const buf = await downloadBuffer(thumbUrl);
      const res = await uploadBuffer(buf, publicId);
      console.log(`✓ Uploaded ${publicId} (${Math.round(buf.length / 1024)} KB) -> ${res.secure_url}`);
    } catch (err) {
      console.error(`✗ Error on ${publicId}:`, err.message);
    }
  }
  console.log('=== All Curated Garden Photos Uploaded! ===');
}

run().catch(console.error);
