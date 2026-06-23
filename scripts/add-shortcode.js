const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const https = require('https');

// Custom argument parser (zero-dependency)
const args = {};
for (let i = 2; i < process.argv.length; i++) {
  const arg = process.argv[i];
  if (arg.startsWith('--')) {
    const key = arg.slice(2);
    const val = process.argv[i + 1];
    if (val && !val.startsWith('--')) {
      args[key] = val;
      i++;
    } else {
      args[key] = true;
    }
  }
}

// Show help if requested or missing required fields
if (args.help || !args.id || !args.name || !args.shortcode || !args.category || !args.bg || !args.sms) {
  console.log(`
Usage:
  node scripts/add-shortcode.js \\
    --id <brand_id> \\
    --name "<Brand Name>" \\
    [--fullName "<Full Brand Name>"] \\
    --shortcode <number_or_comma_separated_numbers> \\
    --category <category> \\
    --bg "<hex_color>" \\
    [--fg "<fg_hex_color>"] \\
    [--padding <padding_scale>] \\
    --sms "<sample_sms_text>" \\
    [--svg <url_or_local_path>] \\
    [--type <mono|color>]

Arguments:
  --id         Lowercase, url-friendly unique identifier (e.g., staples)
  --name       Clean display name of the brand (e.g., Staples)
  --fullName   Official/full name. Defaults to "<Name> Alerts" (e.g., Staples Alerts)
  --shortcode  Single shortcode or comma-separated list of shortcodes (e.g., 41350)
  --category   Category (e.g., retail, tech, finance, food, travel, telecom, services)
  --bg         Hex color code for background (e.g., #C8102E)
  --fg         Hex color code for foreground (defaults to #FFFFFF)
  --padding    Logo scale/padding from 0.0 to 1.0 (defaults to 0.22)
  --sms        Example text message template
  --svg        URL or local file path to the SVG logo.
  --type       Style type: 'mono' or 'color' (defaults to 'mono')
`);
  process.exit(args.help ? 0 : 1);
}

// Set up parameter defaults
const id = args.id.toLowerCase().trim();
const name = args.name.trim();
const fullName = args.fullName ? args.fullName.trim() : `${name} Alerts`;
const shortcode = args.shortcode.toString().trim();
const category = args.category.trim();
const bg = args.bg.trim();
const fg = args.fg ? args.fg.trim() : '#FFFFFF';
const padding = args.padding ? parseFloat(args.padding) : 0.22;
const sms = args.sms.trim();
const type = args.type ? args.type.trim() : 'mono';
const svgSource = args.svg ? args.svg.trim() : null;

// Resolve absolute paths
const PROJECT_ROOT = path.join(__dirname, '..');
const LOGOS_JS = path.join(PROJECT_ROOT, 'logos.js');
const APP_JS = path.join(PROJECT_ROOT, 'app.js');
const LOGO_SVG_PATH = path.join(PROJECT_ROOT, 'logos', `${id}.svg`);

// Step 1: Download or copy the SVG
if (svgSource) {
  console.log(`\n[1/5] Handling SVG logo for '${id}'...`);
  if (svgSource.startsWith('http://') || svgSource.startsWith('https://')) {
    console.log(`Downloading SVG from: ${svgSource}`);
    https.get(svgSource, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Error downloading SVG: HTTP ${res.statusCode}`);
        process.exit(1);
      }
      const fileStream = fs.createWriteStream(LOGO_SVG_PATH);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`SVG successfully saved to: ${LOGO_SVG_PATH}`);
        proceedWithUpdates();
      });
    }).on('error', (err) => {
      console.error(`Failed to fetch SVG logo:`, err.message);
      process.exit(1);
    });
  } else {
    // Local copy
    try {
      fs.copyFileSync(path.resolve(svgSource), LOGO_SVG_PATH);
      console.log(`SVG copied successfully to: ${LOGO_SVG_PATH}`);
      proceedWithUpdates();
    } catch (err) {
      console.error(`Error copying local SVG:`, err.message);
      process.exit(1);
    }
  }
} else {
  console.log(`\n[1/5] No SVG source provided. Proceeding (requires manual SVG file placement at 'logos/${id}.svg')...`);
  proceedWithUpdates();
}

function proceedWithUpdates() {
  // Step 2: Update logos.js
  console.log(`\n[2/5] Updating logos.js...`);
  try {
    let logosContent = fs.readFileSync(LOGOS_JS, 'utf8');
    const startMarker = 'export const BrandStyles = {';
    const endMarker = '};';
    const startIndex = logosContent.indexOf(startMarker);
    const endIndex = logosContent.indexOf(endMarker, startIndex);
    
    if (startIndex === -1 || endIndex === -1) {
      throw new Error("Could not find BrandStyles declaration in logos.js");
    }
    
    const objectContent = logosContent.substring(startIndex + startMarker.length - 1, endIndex + 1);
    const brandStyles = new Function(`return ${objectContent}`)();
    
    // Insert/Overwrite styling
    brandStyles[id] = { type, bg, fg, padding };
    
    // Sort and format each entry to be one-line
    const sortedStyles = {};
    Object.keys(brandStyles).sort().forEach(k => {
      sortedStyles[k] = brandStyles[k];
    });
    
    const styleLines = [];
    for (const [key, val] of Object.entries(sortedStyles)) {
      const fgPart = val.fg && val.fg !== '#FFFFFF' ? `, fg: '${val.fg}'` : (val.fg ? `, fg: '${val.fg}'` : '');
      styleLines.push(`  ${key}: { type: '${val.type}', bg: '${val.bg}'${fgPart}, padding: ${val.padding} }`);
    }
    
    const formattedStyles = `{\n${styleLines.join(',\n')}\n}`;
    logosContent = logosContent.substring(0, startIndex) + 'export const BrandStyles = ' + formattedStyles + ';' + logosContent.substring(endIndex + endMarker.length);
    
    fs.writeFileSync(LOGOS_JS, logosContent, 'utf8');
    console.log(`Successfully updated and alphabetized style in logos.js.`);
  } catch (err) {
    console.error(`Error updating logos.js:`, err.message);
    process.exit(1);
  }

  // Step 3: Update app.js
  console.log(`\n[3/5] Updating app.js...`);
  try {
    let appContent = fs.readFileSync(APP_JS, 'utf8');
    const startMarker = 'const DirectoryData = [';
    const endMarker = '];';
    const startIndex = appContent.indexOf(startMarker);
    const endIndex = appContent.indexOf(endMarker, startIndex);
    
    if (startIndex === -1 || endIndex === -1) {
      throw new Error("Could not find DirectoryData declaration in app.js");
    }
    
    const arrayContent = appContent.substring(startIndex + startMarker.length - 1, endIndex + 1);
    const directoryData = new Function(`return ${arrayContent}`)();
    
    // Add or update entry
    const existingIdx = directoryData.findIndex(d => d.id === id);
    const newEntry = {
      id,
      name,
      fullName,
      category,
      shortcodes: shortcode.split(',').map(s => s.trim()),
      sms
    };
    
    if (existingIdx !== -1) {
      directoryData[existingIdx] = newEntry;
      console.log(`Existing directory entry for '${id}' replaced.`);
    } else {
      directoryData.push(newEntry);
      console.log(`New directory entry for '${id}' appended.`);
    }
    
    // Sort array alphabetically by brand id
    directoryData.sort((a, b) => a.id.localeCompare(b.id));
    
    // Serialize in custom format matching existing structure
    const brandLines = [];
    for (const brand of directoryData) {
      const shortcodesStr = JSON.stringify(brand.shortcodes);
      brandLines.push([
        '  {',
        `    id: "${brand.id}",`,
        `    name: "${brand.name}",`,
        `    fullName: "${brand.fullName}",`,
        `    category: "${brand.category}",`,
        `    shortcodes: ${shortcodesStr},`,
        `    sms: ${JSON.stringify(brand.sms)}`,
        '  }'
      ].join('\n'));
    }
    
    const formattedArray = `[\n${brandLines.join(',\n')}\n]`;
    appContent = appContent.substring(0, startIndex) + 'const DirectoryData = ' + formattedArray + ';' + appContent.substring(endIndex + endMarker.length);
    
    fs.writeFileSync(APP_JS, appContent, 'utf8');
    console.log(`Successfully updated and alphabetized DirectoryData in app.js.`);
  } catch (err) {
    console.error(`Error updating app.js:`, err.message);
    process.exit(1);
  }

  // Step 4: Regenerate contacts.json
  console.log(`\n[4/5] Regenerating contacts.json...`);
  try {
    execSync('node scripts/generate-contacts-json.js', { cwd: PROJECT_ROOT, stdio: 'inherit' });
    console.log(`Successfully generated contacts.json.`);
  } catch (err) {
    console.error(`Error regenerating contacts.json:`, err.message);
    process.exit(1);
  }

  // Step 5: Regenerate Social Sharing Image
  console.log(`\n[5/5] Regenerating social sharing OG images...`);
  try {
    execSync('node scripts/generate-og-image.js', { cwd: PROJECT_ROOT, stdio: 'inherit' });
    console.log(`Successfully updated OG images.`);
  } catch (err) {
    console.warn(`Warning: Rebuilding OG images failed. This may happen if headless Chrome fails:`, err.message);
  }

  console.log(`\n🎉 Success! Brand '${id}' has been successfully added/updated in the directory.`);
}
