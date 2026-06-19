// Logo rendering module using preloaded SVG assets.
// Supports both multi-colored (color) and tintable monochromatic (mono) SVGs.

export const BrandStyles = {
  google: { type: 'color', bg: '#FFFFFF', padding: 0.15 },
  microsoft: { type: 'color', bg: '#FFFFFF', padding: 0.22 },
  apple: { type: 'mono', bg: '#161617', fg: '#FFFFFF', padding: 0.22 },
  meta: { type: 'color', bg: '#FFFFFF', padding: 0.22 },
  okta: { type: 'mono', bg: '#0F2C59', fg: '#FFFFFF', padding: 0.24 },
  authy: { type: 'color', bg: '#FFFFFF', padding: 0.2 },
  chase: { type: 'mono', bg: '#004B87', fg: '#FFFFFF', padding: 0.22 },
  paypal: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  venmo: { type: 'mono', bg: '#008CFF', fg: '#FFFFFF', padding: 0.25 },
  cashapp: { type: 'color', bg: '#00D632', padding: 0.22 },
  homedepot: { type: 'color', bg: '#F96302', padding: 0 },
  walmart: { type: 'mono', bg: '#0071DC', fg: '#FFC220', padding: 0.2 },
  target: { type: 'mono', bg: '#CC0000', fg: '#FFFFFF', padding: 0.18 },
  kohls: { type: 'color', bg: '#1C1C1C', padding: 0 },
  amazon: { type: 'mono', bg: '#131921', fg: '#FF9900', padding: 0.22 },
  bestbuy: { type: 'color', bg: '#0046BE', padding: 0.15 },
  costco: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  ups: { type: 'mono', bg: '#351C15', fg: '#FFB500', padding: 0.18 },
  fedex: { type: 'mono', bg: '#4D148C', fg: '#FFFFFF', padding: 0.2 },
  usps: { type: 'mono', bg: '#002561', fg: '#FFFFFF', padding: 0.18 },
  walgreens: { type: 'color', bg: '#FFFFFF', padding: 0.15 },
  cvs: { type: 'color', bg: '#CC0000', padding: 0 },
  budget: { type: 'color', bg: '#EE3124', padding: 0 },
  slateauto: { type: 'color', bg: '#3A4D5C', padding: 0 },
  vitaminshoppe: { type: 'color', bg: '#002855', padding: 0 },
  starbucks: { type: 'mono', bg: '#006241', fg: '#FFFFFF', padding: 0.15 },
  doordash: { type: 'mono', bg: '#FF3008', fg: '#FFFFFF', padding: 0.22 },
  dominos: { type: 'color', bg: '#006491', padding: 0.15 },
  uber: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.25 },
  lyft: { type: 'mono', bg: '#FF00BF', fg: '#FFFFFF', padding: 0.25 },
  capitalone: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  discord: { type: 'mono', bg: '#5865F2', fg: '#FFFFFF', padding: 0.2 },
  twitch: { type: 'mono', bg: '#9146FF', fg: '#FFFFFF', padding: 0.2 },
  github: { type: 'mono', bg: '#181717', fg: '#FFFFFF', padding: 0.2 },
  steam: { type: 'mono', bg: '#171A21', fg: '#FFFFFF', padding: 0.2 },
  americanexpress: { type: 'mono', bg: '#0070CD', fg: '#FFFFFF', padding: 0.15 },
  bankofamerica: { type: 'mono', bg: '#002C77', fg: '#FFFFFF', padding: 0.2 },
  stripe: { type: 'mono', bg: '#635BFF', fg: '#FFFFFF', padding: 0.25 },
  coinbase: { type: 'mono', bg: '#0052FF', fg: '#FFFFFF', padding: 0.22 },
  wellsfargo: { type: 'mono', bg: '#D11242', fg: '#F4B224', padding: 0.2 },
  ebay: { type: 'mono', bg: '#FFFFFF', fg: '#0064D2', padding: 0.2 },
  nike: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.25 },
  verizon: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  tmobile: { type: 'mono', bg: '#E20074', fg: '#FFFFFF', padding: 0.2 },
  netflix: { type: 'mono', bg: '#000000', fg: '#E50914', padding: 0.2 },
  zoom: { type: 'mono', bg: '#2D8CFF', fg: '#FFFFFF', padding: 0.2 },
  slack: { type: 'color', bg: '#FFFFFF', padding: 0.2 },
  dropbox: { type: 'mono', bg: '#0061FE', fg: '#FFFFFF', padding: 0.22 },
  cloudflare: { type: 'mono', bg: '#FAAD14', fg: '#FFFFFF', padding: 0.22 },
  linkedin: { type: 'mono', bg: '#0A66C2', fg: '#FFFFFF', padding: 0.2 },
  reddit: { type: 'mono', bg: '#FF4500', fg: '#FFFFFF', padding: 0.2 },
  pinterest: { type: 'mono', bg: '#E60023', fg: '#FFFFFF', padding: 0.2 },
  snapchat: { type: 'mono', bg: '#FFFC00', fg: '#000000', padding: 0.2 },
  tiktok: { type: 'color', bg: '#010101', padding: 0.2 },
  signal: { type: 'mono', bg: '#3A76F0', fg: '#FFFFFF', padding: 0.2 },
  telegram: { type: 'mono', bg: '#24A1DE', fg: '#FFFFFF', padding: 0.2 },
  shopify: { type: 'mono', bg: '#96BF48', fg: '#FFFFFF', padding: 0.2 },
  squarespace: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  notion: { type: 'mono', bg: '#FFFFFF', fg: '#000000', padding: 0.2 },
  figma: { type: 'color', bg: '#1E1E1E', padding: 0.2 },
  canva: { type: 'mono', bg: '#00C4CC', fg: '#FFFFFF', padding: 0.2 },
  patreon: { type: 'mono', bg: '#FF424D', fg: '#FFFFFF', padding: 0.2 },
  adobe: { type: 'mono', bg: '#FF0000', fg: '#FFFFFF', padding: 0.22 },
  wix: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.2 },
  airtable: { type: 'color', bg: '#1868F2', padding: 0.2 },
  citibank: { type: 'color', bg: '#003B70', padding: 0.15 },
  fidelity: { type: 'mono', bg: '#008A00', fg: '#FFFFFF', padding: 0.2 },
  vanguard: { type: 'mono', bg: '#800000', fg: '#FFFFFF', padding: 0.2 },
  schwab: { type: 'mono', bg: '#00A0E0', fg: '#FFFFFF', padding: 0.2 },
  robinhood: { type: 'mono', bg: '#00C805', fg: '#000000', padding: 0.2 },
  acorns: { type: 'mono', bg: '#00A86B', fg: '#FFFFFF', padding: 0.2 },
  sofi: { type: 'mono', bg: '#0052FF', fg: '#FFFFFF', padding: 0.2 },
  chime: { type: 'mono', bg: '#25C974', fg: '#FFFFFF', padding: 0.2 },
  ally: { type: 'mono', bg: '#4B0082', fg: '#FFFFFF', padding: 0.2 },
  discover: { type: 'mono', bg: '#FF6000', fg: '#FFFFFF', padding: 0.2 },
  mastercard: { type: 'color', bg: '#0A3A60', padding: 0.15 },
  visa: { type: 'color', bg: '#1A1F71', padding: 0.18 },
  turbotax: { type: 'mono', bg: '#0077C5', fg: '#FFFFFF', padding: 0.2 },
  creditkarma: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.2 },
  klarna: { type: 'mono', bg: '#FFB3C7', fg: '#000000', padding: 0.2 },
  affirm: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.2 },
  lowes: { type: 'mono', bg: '#004990', fg: '#FFFFFF', padding: 0.18 },
  ikea: { type: 'color', bg: '#0058A3', padding: 0.15 },
  wayfair: { type: 'color', bg: '#FFFFFF', padding: 0.2 },
  sephora: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  ulta: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  adidas: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  lululemon: { type: 'mono', bg: '#E3000F', fg: '#FFFFFF', padding: 0.2 },
  gap: { type: 'mono', bg: '#00005F', fg: '#FFFFFF', padding: 0.2 },
  hm: { type: 'mono', bg: '#E5001C', fg: '#FFFFFF', padding: 0.2 },
  zara: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  macys: { type: 'mono', bg: '#E11A22', fg: '#FFFFFF', padding: 0.2 },
  nordstrom: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  riteaid: { type: 'color', bg: '#00356B', padding: 0.18 },
  kroger: { type: 'mono', bg: '#002F6C', fg: '#FFFFFF', padding: 0.2 },
  instacart: { type: 'color', bg: '#FFFFFF', padding: 0.18 },
  shipt: { type: 'mono', bg: '#FFC400', fg: '#000000', padding: 0.2 },
  att: { type: 'mono', bg: '#009FDB', fg: '#FFFFFF', padding: 0.2 },
  mintmobile: { type: 'mono', bg: '#95D600', fg: '#FFFFFF', padding: 0.2 },
  xfinity: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.22 },
  spectrum: { type: 'mono', bg: '#003057', fg: '#FFFFFF', padding: 0.2 },
  disneyplus: { type: 'mono', bg: '#113CCF', fg: '#FFFFFF', padding: 0.2 },
  hulu: { type: 'mono', bg: '#1CE783', fg: '#000000', padding: 0.22 },
  max: { type: 'mono', bg: '#002EF6', fg: '#FFFFFF', padding: 0.2 },
  peacock: { type: 'color', bg: '#000000', padding: 0.18 },
  paramountplus: { type: 'mono', bg: '#0057E7', fg: '#FFFFFF', padding: 0.2 },
  spotify: { type: 'mono', bg: '#1DB954', fg: '#FFFFFF', padding: 0.2 },
  bookingcom: { type: 'mono', bg: '#003580', fg: '#FFFFFF', padding: 0.2 },
  expedia: { type: 'mono', bg: '#F3A51A', fg: '#FFFFFF', padding: 0.2 },
  airbnb: { type: 'mono', bg: '#FF5A5F', fg: '#FFFFFF', padding: 0.2 },
  vrbo: { type: 'mono', bg: '#0D47A1', fg: '#FFFFFF', padding: 0.2 },
  marriott: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.2 },
  hilton: { type: 'mono', bg: '#002F6C', fg: '#FFFFFF', padding: 0.2 },
  hyatt: { type: 'mono', bg: '#002F6C', fg: '#FFFFFF', padding: 0.2 },
  delta: { type: 'color', bg: '#002244', padding: 0.18 },
  united: { type: 'mono', bg: '#002244', fg: '#F2C811', padding: 0.2 },
  americanairlines: { type: 'color', bg: '#0078D2', padding: 0.18 },
  southwest: { type: 'color', bg: '#304FFE', padding: 0.18 },
  ticketmaster: { type: 'mono', bg: '#026CDF', fg: '#FFFFFF', padding: 0.2 },
  eventbrite: { type: 'mono', bg: '#F15C22', fg: '#FFFFFF', padding: 0.2 },
  hertz: { type: 'mono', bg: '#FFF200', fg: '#000000', padding: 0.2 },
  avis: { type: 'mono', bg: '#D4121A', fg: '#FFFFFF', padding: 0.2 },
  enterprise: { type: 'mono', bg: '#005A36', fg: '#FFFFFF', padding: 0.2 },
  mcdonalds: { type: 'color', bg: '#F11A22', padding: 0.15 },
  burgerking: { type: 'color', bg: '#FFFFFF', padding: 0.15 },
  wendys: { type: 'color', bg: '#E11A22', padding: 0.15 },
  subway: { type: 'color', bg: '#008C44', padding: 0.18 },
  tacobell: { type: 'mono', bg: '#702082', fg: '#FFFFFF', padding: 0.2 },
  chipotle: { type: 'mono', bg: '#451400', fg: '#FFFFFF', padding: 0.2 },
  dunkin: { type: 'mono', bg: '#FF671F', fg: '#FFFFFF', padding: 0.18 },
  chickfilay: { type: 'mono', bg: '#E5173F', fg: '#FFFFFF', padding: 0.2 },
  grubhub: { type: 'mono', bg: '#F63440', fg: '#FFFFFF', padding: 0.2 },
  postmates: { type: 'mono', bg: '#000000', fg: '#FFFFFF', padding: 0.2 },
  pizzahut: { type: 'color', bg: '#EE1C25', padding: 0.15 },
  papajohns: { type: 'mono', bg: '#005A36', fg: '#FFFFFF', padding: 0.2 },
  panerabread: { type: 'mono', bg: '#325232', fg: '#FFFFFF', padding: 0.2 },
  sweetgreen: { type: 'mono', bg: '#13322B', fg: '#FFFFFF', padding: 0.2 }

};

const LogoImages = {};
const brands = Object.keys(BrandStyles);

// Preload SVG assets in the browser
brands.forEach(brandId => {
  const img = new Image();
  img.src = `logos/${brandId}.svg`;
  LogoImages[brandId] = img;
});

// Promise that resolves when all SVG logos have successfully loaded (or failed to load)
export const LogosLoaded = Promise.all(
  brands.map(brandId => {
    return new Promise(resolve => {
      const img = LogoImages[brandId];
      if (img.complete) {
        resolve();
      } else {
        img.onload = () => resolve();
        img.onerror = () => {
          console.error(`Failed to load SVG logo for: ${brandId}`);
          resolve(); // Resolve anyway so the UI can draw whatever is available
        };
      }
    });
  })
);

// Shared canvas drawing function
function drawBrandLogo(ctx, brandId, size) {
  const style = BrandStyles[brandId];
  if (!style) return;

  const img = LogoImages[brandId];
  
  // 1. Draw solid background color
  ctx.fillStyle = style.bg || '#FFFFFF';
  ctx.fillRect(0, 0, size, size);

  if (!img || !img.complete || img.naturalWidth === 0) {
    // If not loaded, draw text initials fallback inside the canvas
    ctx.fillStyle = style.fg || '#FFFFFF';
    ctx.font = `bold ${size * 0.4}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(brandId.substring(0, 2).toUpperCase(), size / 2, size / 2);
    return;
  }

  // 2. Compute sizing with padding, preserving aspect ratio
  const padding = style.padding !== undefined ? style.padding * size : 0;
  const maxDestSize = size - 2 * padding;

  let destWidth = maxDestSize;
  let destHeight = maxDestSize;

  // Use natural dimensions if available to calculate aspect ratio
  const imgRatio = (img.naturalWidth && img.naturalHeight) ? (img.naturalWidth / img.naturalHeight) : 1;
  if (imgRatio > 1) {
    // Landscape / wide logo
    destHeight = maxDestSize / imgRatio;
  } else if (imgRatio < 1) {
    // Portrait / tall logo
    destWidth = maxDestSize * imgRatio;
  }

  // Center horizontally and vertically inside the canvas
  const offsetX = (size - destWidth) / 2;
  const offsetY = (size - destHeight) / 2;

  // 3. Draw logo
  if (style.type === 'mono') {
    // Tint monochromatic SVGs using an offscreen canvas
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = size;
    tempCanvas.height = size;
    const tempCtx = tempCanvas.getContext('2d');

    // Draw SVG onto offscreen canvas
    tempCtx.drawImage(img, offsetX, offsetY, destWidth, destHeight);

    // Fill with official brand foreground color
    tempCtx.globalCompositeOperation = 'source-in';
    tempCtx.fillStyle = style.fg || '#FFFFFF';
    tempCtx.fillRect(0, 0, size, size);

    // Render tinted canvas back to parent
    ctx.drawImage(tempCanvas, 0, 0);
  } else {
    // Directly draw colored SVG
    ctx.drawImage(img, offsetX, offsetY, destWidth, destHeight);
  }
}

// Export object matching old BrandLogos interface with a Proxy fallback to prevent crashes
const BrandLogosTarget = {};
brands.forEach(brandId => {
  BrandLogosTarget[brandId] = (ctx, size) => drawBrandLogo(ctx, brandId, size);
});

export const BrandLogos = new Proxy(BrandLogosTarget, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return (ctx, size) => {
      console.warn(`BrandLogos: missing style config for '${String(prop)}'`);
      // Safe fallback rendering inside the canvas
      ctx.fillStyle = '#E5E7EB';
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = '#4B5563';
      ctx.font = `bold ${size * 0.4}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(prop).substring(0, 2).toUpperCase(), size / 2, size / 2);
    };
  }
});
