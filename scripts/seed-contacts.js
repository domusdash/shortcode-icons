const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

// 1. Start a simple static file server to serve the website files
const server = http.createServer((req, res) => {
  const cleanUrl = req.url.split('?')[0];
  let filePath = path.join(__dirname, '..', cleanUrl === '/' ? 'index.html' : cleanUrl);
  
  const ext = path.extname(filePath);
  let contentType = 'text/html';
  if (ext === '.js') contentType = 'text/javascript';
  else if (ext === '.css') contentType = 'text/css';
  else if (ext === '.svg') contentType = 'image/svg+xml';
  else if (ext === '.png') contentType = 'image/png';
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(8085, async () => {
  console.log('Local test server running on port 8085');
  
  try {
    const password = process.env.RADICALE_ADMIN_PASSWORD;
    if (!password) {
      throw new Error('RADICALE_ADMIN_PASSWORD environment variable is missing. Run with:\nRADICALE_ADMIN_PASSWORD=your_pass node scripts/seed-contacts.js');
    }
    
    console.log('Launching headless browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Navigate to local server
    await page.goto('http://localhost:8085/');
    
    console.log('Waiting for logos to load in browser...');
    await page.waitForFunction(() => typeof window.LogosLoaded !== 'undefined');
    await page.evaluate(() => window.LogosLoaded);
    
    // Get DirectoryData
    const directory = await page.evaluate(() => window.DirectoryData);
    console.log(`Found ${directory.length} contacts to sync.`);
    
    const authHeader = 'Basic ' + Buffer.from(`admin:${password}`).toString('base64');
    const collectionUrl = 'https://sync.shortcodeicons.com/public/shortcode-icons-selected/';
    
    // Check and create collection if needed (MKCOL)
    console.log('Verifying collection on live server...');
    const propfindRes = await fetch(collectionUrl, {
      method: 'PROPFIND',
      headers: {
        'Authorization': authHeader,
        'Depth': '0'
      }
    });
    
    if (propfindRes.status === 404) {
      console.log('Collection does not exist. Creating collection using MKCOL...');
      const mkcolXml = `<?xml version="1.0" encoding="utf-8" ?>
<D:mkcol xmlns:D="DAV:" xmlns:C="urn:ietf:params:xml:ns:carddav">
  <D:set>
    <D:prop>
      <D:resourcetype>
        <D:collection />
        <C:addressbook />
      </D:resourcetype>
      <D:displayname>Short Code Icons</D:displayname>
    </D:prop>
  </D:set>
</D:mkcol>`;

      const mkcolRes = await fetch(collectionUrl, {
        method: 'MKCOL',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'text/xml'
        },
        body: mkcolXml
      });
      
      if (!mkcolRes.ok) {
        throw new Error(`MKCOL failed with status ${mkcolRes.status}`);
      }
      console.log('Collection created successfully!');
    }
    
    // Loop through each contact and PUT it to the server
    for (let i = 0; i < directory.length; i++) {
      const brand = directory[i];
      console.log(`[${i+1}/${directory.length}] Compiling vCard for: ${brand.name}...`);
      
      const vcfString = await page.evaluate((brandId) => {
        const brandObj = window.DirectoryData.find(d => d.id === brandId);
        return window.buildContactVcardString(brandObj);
      }, brand.id);
      
      const fileUrl = `${collectionUrl}${brand.id}.vcf`;
      
      const putRes = await fetch(fileUrl, {
        method: 'PUT',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'text/vcard;charset=utf-8'
        },
        body: vcfString
      });
      
      if (!putRes.ok) {
        console.error(`Failed to upload ${brand.name}: HTTP ${putRes.status}`);
      } else {
        console.log(`Uploaded: ${brand.name}`);
      }
    }
    
    console.log('Successfully completed seeding all contacts!');
    await browser.close();
    server.close();
    process.exit(0);
  } catch (err) {
    console.error('Error during seeding:', err);
    server.close();
    process.exit(1);
  }
});
