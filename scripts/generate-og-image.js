const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Start a simple static file server to serve the website files from the project root
const server = http.createServer((req, res) => {
  const cleanUrl = req.url.split('?')[0];
  // Serve files from root directory
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

server.listen(8086, async () => {
  console.log('Local static server running on port 8086');
  
  try {
    console.log('Launching headless browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Set viewport size for social sharing image (1200x630 is standard)
    await page.setViewport({
      width: 1200,
      height: 630,
      deviceScaleFactor: 2 // High-DPI/Retina rendering for ultra-crisp logos and text
    });
    
    console.log('Navigating to builder page...');
    await page.goto('http://localhost:8086/og-image-builder.html');
    
    console.log('Waiting for logos to render on canvas...');
    await page.waitForFunction(() => typeof window.OGImageReady !== 'undefined' && window.OGImageReady === true);
    
    // Small delay to ensure any text anti-aliasing/rendering completes
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Capturing screenshot...');
    const outputPath = path.join(__dirname, '..', 'og-image-v3.png');
    await page.screenshot({
      path: outputPath,
      type: 'png'
    });
    
    console.log(`Successfully generated high-fidelity OG image at: ${outputPath}`);
    
    // Generate Apple Touch Icon (180x180 png with solid forest green background)
    console.log('Generating Apple Touch Icon...');
    const appleTouchIconHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 180px;
            height: 180px;
            background: #224D30;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          svg {
            width: 110px;
            height: 110px;
            display: block;
          }
        </style>
      </head>
      <body>
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="9" r="2"/>
          <path d="M8 14c0-2 2-3 4-3s4 1 4 3"/>
        </svg>
      </body>
      </html>
    `;
    
    await page.setViewport({
      width: 180,
      height: 180,
      deviceScaleFactor: 1 // Apple Touch Icons must be exactly 180x180 in physical pixels
    });
    
    await page.setContent(appleTouchIconHtml);
    
    const appleIconPath = path.join(__dirname, '..', 'apple-touch-icon.png');
    await page.screenshot({
      path: appleIconPath,
      type: 'png'
    });
    
    console.log(`Successfully generated Apple Touch Icon at: ${appleIconPath}`);
    
    await browser.close();
    server.close();
    process.exit(0);
  } catch (err) {
    console.error('Error during OG image generation:', err);
    server.close();
    process.exit(1);
  }
});
