// Logo rendering functions for Shortcode Studio.
// Each function takes a canvas 2D context (ctx) and a size (typically 192px or 256px).

// Helper function to draw a star (used by Starbucks and others)
function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, fillStyle) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
}

export const BrandLogos = {
  google: (ctx, size) => {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, size, size);
    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.28;
    const w = size * 0.12;

    ctx.lineWidth = w;
    ctx.lineCap = 'square';

    // Red (top)
    ctx.strokeStyle = '#EA4335';
    ctx.beginPath();
    ctx.arc(cx, cy, r, -Math.PI * 0.75, -Math.PI * 0.25);
    ctx.stroke();

    // Blue (right & bar)
    ctx.strokeStyle = '#4285F4';
    ctx.beginPath();
    ctx.arc(cx, cy, r, -Math.PI * 0.25, Math.PI * 0.15);
    ctx.stroke();

    // Green (bottom)
    ctx.strokeStyle = '#34A853';
    ctx.beginPath();
    ctx.arc(cx, cy, r, Math.PI * 0.15, Math.PI * 0.75);
    ctx.stroke();

    // Yellow (left)
    ctx.strokeStyle = '#FBBC05';
    ctx.beginPath();
    ctx.arc(cx, cy, r, Math.PI * 0.75, Math.PI * 1.25);
    ctx.stroke();

    // Blue horizontal bar
    ctx.fillStyle = '#4285F4';
    ctx.fillRect(cx, cy - w / 2, r * 1.1, w);
  },

  microsoft: (ctx, size) => {
    ctx.fillStyle = '#F2F2F2';
    ctx.fillRect(0, 0, size, size);

    const pad = size * 0.22;
    const sq = size * 0.25;
    const gap = size * 0.06;

    // Top Left - Red/Orange
    ctx.fillStyle = '#F25022';
    ctx.fillRect(pad, pad, sq, sq);

    // Top Right - Green
    ctx.fillStyle = '#7FBA00';
    ctx.fillRect(pad + sq + gap, pad, sq, sq);

    // Bottom Left - Blue
    ctx.fillStyle = '#00A4EF';
    ctx.fillRect(pad, pad + sq + gap, sq, sq);

    // Bottom Right - Yellow
    ctx.fillStyle = '#FFB900';
    ctx.fillRect(pad + sq + gap, pad + sq + gap, sq, sq);
  },

  apple: (ctx, size) => {
    ctx.fillStyle = '#161617';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2 + size * 0.05;
    const r = size * 0.22;

    ctx.fillStyle = '#FFFFFF';

    // Apple Body - Left lobe
    ctx.beginPath();
    ctx.arc(cx - r * 0.45, cy, r, Math.PI * 0.4, Math.PI * 1.6);
    // Apple Body - Right lobe
    ctx.arc(cx + r * 0.45, cy, r, Math.PI * 1.4, Math.PI * 0.6);
    ctx.closePath();
    ctx.fill();

    // Top indent (cleavage)
    ctx.fillStyle = '#161617';
    ctx.beginPath();
    ctx.arc(cx, cy - r * 0.95, r * 0.3, 0, Math.PI * 2);
    ctx.fill();

    // Bottom indent
    ctx.beginPath();
    ctx.arc(cx, cy + r * 0.98, r * 0.35, 0, Math.PI * 2);
    ctx.fill();

    // Bite cutout
    ctx.beginPath();
    ctx.arc(cx + r * 1.05, cy - r * 0.1, r * 0.55, 0, Math.PI * 2);
    ctx.fill();

    // Apple Leaf
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    const lx = cx + size * 0.05;
    const ly = cy - r * 1.05;
    ctx.moveTo(lx, ly);
    ctx.quadraticCurveTo(lx + size * 0.12, ly - size * 0.08, lx + size * 0.14, ly - size * 0.22);
    ctx.quadraticCurveTo(lx + size * 0.02, ly - size * 0.18, lx, ly);
    ctx.closePath();
    ctx.fill();
  },

  meta: (ctx, size) => {
    ctx.fillStyle = '#0668E1';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const w = size * 0.16; // width of loops
    const h = size * 0.12; // height of loops
    const thickness = size * 0.06;

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    // Left loop
    ctx.moveTo(cx, cy);
    ctx.bezierCurveTo(cx - w, cy - h, cx - w * 1.8, cy + h * 0.8, cx - w, cy + h);
    ctx.bezierCurveTo(cx - w * 0.4, cy + h * 1.1, cx - w * 0.2, cy + h * 0.2, cx, cy);
    // Right loop
    ctx.bezierCurveTo(cx + w * 0.2, cy - h * 0.2, cx + w * 0.4, cy - h * 1.1, cx + w, cy - h);
    ctx.bezierCurveTo(cx + w * 1.8, cy - h * 0.8, cx + w, cy + h, cx, cy);
    ctx.stroke();
  },

  okta: (ctx, size) => {
    ctx.fillStyle = '#0F2C59';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = size * 0.08;
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.24, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.08, 0, Math.PI * 2);
    ctx.fill();
  },

  authy: (ctx, size) => {
    ctx.fillStyle = '#EC1C24';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.14;

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = size * 0.045;

    // Draw overlapping circles forming the Authy key icon
    // Bottom Left Circle
    ctx.beginPath();
    ctx.arc(cx - r * 0.6, cy + r * 0.4, r, 0, Math.PI * 2);
    ctx.stroke();

    // Top Circle
    ctx.beginPath();
    ctx.arc(cx, cy - r * 0.7, r, 0, Math.PI * 2);
    ctx.stroke();

    // Bottom Right Circle
    ctx.beginPath();
    ctx.arc(cx + r * 0.6, cy + r * 0.4, r, 0, Math.PI * 2);
    ctx.stroke();
  },

  chase: (ctx, size) => {
    ctx.fillStyle = '#004B87';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const rOuter = size * 0.3;
    const rInner = size * 0.11;
    const gap = size * 0.04;

    // Draw outer octagon
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4 + Math.PI / 8;
      const x = cx + rOuter * Math.cos(angle);
      const y = cy + rOuter * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();

    // Draw diagonal gap lines (crossing at center)
    ctx.strokeStyle = '#004B87';
    ctx.lineWidth = gap;

    ctx.beginPath();
    ctx.moveTo(cx - rOuter, cy - rOuter);
    ctx.lineTo(cx + rOuter, cy + rOuter);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(cx - rOuter, cy + rOuter);
    ctx.lineTo(cx + rOuter, cy - rOuter);
    ctx.stroke();

    // Center square cutout
    ctx.fillStyle = '#004B87';
    ctx.fillRect(cx - rInner, cy - rInner, rInner * 2, rInner * 2);
  },

  paypal: (ctx, size) => {
    ctx.fillStyle = '#003087';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    
    // Draw two overlapping italic P shapes
    ctx.save();
    ctx.translate(cx, cy);
    ctx.skewX && ctx.skewX(-0.15); // italicize if supported

    const drawP = (dx, dy, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      // Stem
      ctx.roundRect(dx - size * 0.12, dy - size * 0.22, size * 0.09, size * 0.42, size * 0.02);
      ctx.fill();
      // Bowl
      ctx.beginPath();
      ctx.arc(dx - size * 0.05, dy - size * 0.1, size * 0.12, -Math.PI / 2, Math.PI / 2);
      ctx.lineTo(dx - size * 0.12, dy + size * 0.02);
      ctx.lineTo(dx - size * 0.12, dy - size * 0.22);
      ctx.closePath();
      ctx.fill();
    };

    // Back P (Darker blue/white overlay)
    drawP(-size * 0.06, -size * 0.05, '#0079C1');
    // Front P (Lighter blue)
    drawP(size * 0.03, size * 0.05, '#00457C');
    ctx.restore();
  },

  venmo: (ctx, size) => {
    ctx.fillStyle = '#008CFF';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `italic bold ${size * 0.45}px "Outfit", "Inter", Arial, sans-serif`;
    ctx.fillText("V", size * 0.48, size * 0.48);
  },

  cashapp: (ctx, size) => {
    ctx.fillStyle = '#00D632';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${size * 0.42}px "Outfit", "Inter", Arial, sans-serif`;
    ctx.fillText("$", size * 0.5, size * 0.48);
  },

  homedepot: (ctx, size) => {
    ctx.fillStyle = '#F96302';
    ctx.fillRect(0, 0, size, size);

    const margin = size * 0.12;
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = size * 0.04;
    ctx.strokeRect(margin, margin, size - 2 * margin, size - 2 * margin);

    ctx.save();
    ctx.translate(size / 2, size / 2);
    ctx.rotate(-Math.PI / 4);

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.font = `bold ${size * 0.14}px "Outfit", "Inter", sans-serif`;
    ctx.fillText("THE", 0, -size * 0.18);
    ctx.font = `bold ${size * 0.18}px "Outfit", "Inter", sans-serif`;
    ctx.fillText("HOME", 0, 0);
    ctx.fillText("DEPOT", 0, size * 0.18);

    ctx.restore();
  },

  walmart: (ctx, size) => {
    ctx.fillStyle = '#0071DC';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const spokes = 6;
    const rInner = size * 0.08;
    const rOuter = size * 0.28;
    const thickness = size * 0.055;

    ctx.strokeStyle = '#FFC220';
    ctx.lineWidth = thickness;
    ctx.lineCap = 'round';

    for (let i = 0; i < spokes; i++) {
      const angle = (i * Math.PI * 2) / spokes;
      const x1 = cx + rInner * Math.cos(angle);
      const y1 = cy + rInner * Math.sin(angle);
      const x2 = cx + rOuter * Math.cos(angle);
      const y2 = cy + rOuter * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  },

  target: (ctx, size) => {
    ctx.fillStyle = '#CC0000';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.32, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#CC0000';
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.21, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.10, 0, Math.PI * 2);
    ctx.fill();
  },

  kohls: (ctx, size) => {
    ctx.fillStyle = '#1C1C1C';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${size * 0.2}px "Outfit", "Inter", Arial, sans-serif`;
    ctx.fillText("KOHL'S", size * 0.5, size * 0.5);
  },

  amazon: (ctx, size) => {
    ctx.fillStyle = '#131921';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${size * 0.18}px "Outfit", "Inter", Arial, sans-serif`;
    ctx.fillText("amazon", cx, cy - size * 0.05);

    // Smile arrow curve
    ctx.strokeStyle = '#FF9900';
    ctx.lineWidth = size * 0.025;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(cx, cy + size * 0.02, size * 0.18, Math.PI * 0.15, Math.PI * 0.85);
    ctx.stroke();

    // Smile Arrow Head
    ctx.fillStyle = '#FF9900';
    ctx.save();
    ctx.translate(cx + size * 0.16, cy + size * 0.085);
    ctx.rotate(Math.PI * 0.45);
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.04);
    ctx.lineTo(size * 0.05, 0);
    ctx.lineTo(0, size * 0.04);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },

  bestbuy: (ctx, size) => {
    ctx.fillStyle = '#0046BE';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;

    // Draw yellow price tag
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI * 0.08);

    ctx.fillStyle = '#FFE000';
    ctx.beginPath();
    ctx.moveTo(-size * 0.28, -size * 0.18);
    ctx.lineTo(size * 0.18, -size * 0.18);
    ctx.lineTo(size * 0.28, size * 0.18);
    ctx.lineTo(-size * 0.18, size * 0.18);
    ctx.closePath();
    ctx.fill();

    // Circle cut in tag
    ctx.fillStyle = '#0046BE';
    ctx.beginPath();
    ctx.arc(-size * 0.18, 0, size * 0.035, 0, Math.PI * 2);
    ctx.fill();

    // "BEST BUY" text in black
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${size * 0.08}px "Outfit", "Inter", sans-serif`;
    ctx.fillText("BEST", 0, -size * 0.04);
    ctx.fillText("BUY", 0, size * 0.04);
    ctx.restore();
  },

  costco: (ctx, size) => {
    ctx.fillStyle = '#E31837';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `italic bold ${size * 0.22}px "Outfit", "Inter", Arial, sans-serif`;
    ctx.fillText("COSTCO", cx, cy - size * 0.06);

    ctx.fillStyle = '#FFFFFF';
    if ('letterSpacing' in ctx) {
      ctx.letterSpacing = '2px';
    }
    ctx.font = `bold ${size * 0.07}px "Outfit", "Inter", Arial, sans-serif`;
    ctx.fillText("WHOLESALE", cx, cy + size * 0.08);
    if ('letterSpacing' in ctx) {
      ctx.letterSpacing = '0px';
    }

    // Three blue accent stripes on the right (highly characteristic Costco styling)
    ctx.strokeStyle = '#005A9C';
    ctx.lineWidth = size * 0.015;
    ctx.beginPath();
    ctx.moveTo(cx + size * 0.22, cy - size * 0.15);
    ctx.lineTo(cx + size * 0.32, cy - size * 0.15);
    ctx.moveTo(cx + size * 0.24, cy - size * 0.11);
    ctx.lineTo(cx + size * 0.34, cy - size * 0.11);
    ctx.stroke();
  },

  ups: (ctx, size) => {
    ctx.fillStyle = '#351C15';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const w = size * 0.52;
    const h = size * 0.62;

    ctx.strokeStyle = '#FFB500';
    ctx.lineWidth = size * 0.04;
    ctx.fillStyle = '#FFB500';

    ctx.beginPath();
    ctx.moveTo(cx - w / 2, cy - h / 2.5);
    ctx.lineTo(cx + w / 2, cy - h / 2.5);
    ctx.quadraticCurveTo(cx + w / 2, cy + h / 5, cx, cy + h / 2);
    ctx.quadraticCurveTo(cx - w / 2, cy + h / 5, cx - w / 2, cy - h / 2.5);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = '#351C15';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${size * 0.24}px "Outfit", "Inter", sans-serif`;
    ctx.fillText("ups", cx, cy - size * 0.03);
  },

  fedex: (ctx, size) => {
    ctx.fillStyle = '#4D148C';
    ctx.fillRect(0, 0, size, size);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${size * 0.25}px "Outfit", "Inter", Arial, sans-serif`;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillText("Fed", size * 0.36, size * 0.5);
    ctx.fillStyle = '#FF6200';
    ctx.fillText("Ex", size * 0.63, size * 0.5);
  },

  usps: (ctx, size) => {
    ctx.fillStyle = '#002561';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;

    ctx.fillStyle = '#FFFFFF';
    
    // Draw stylized eagle head silhouette
    ctx.beginPath();
    ctx.moveTo(cx - size * 0.25, cy + size * 0.15);
    // Beak bottom & curve
    ctx.quadraticCurveTo(cx - size * 0.35, cy - size * 0.08, cx - size * 0.1, cy - size * 0.18);
    // Crown/head top
    ctx.quadraticCurveTo(cx + size * 0.12, cy - size * 0.24, cx + size * 0.26, cy - size * 0.05);
    // Neck curve
    ctx.quadraticCurveTo(cx + size * 0.32, cy + size * 0.18, cx + size * 0.12, cy + size * 0.23);
    // Wing cuts (USPS bars)
    ctx.lineTo(cx + size * 0.05, cy + size * 0.1);
    ctx.lineTo(cx - size * 0.03, cy + size * 0.19);
    ctx.lineTo(cx - size * 0.08, cy + size * 0.1);
    ctx.closePath();
    ctx.fill();

    // Eagle eye (small cut out)
    ctx.fillStyle = '#002561';
    ctx.beginPath();
    ctx.arc(cx - size * 0.08, cy - size * 0.06, size * 0.02, 0, Math.PI * 2);
    ctx.fill();
  },

  walgreens: (ctx, size) => {
    ctx.fillStyle = '#E31837';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `italic bold ${size * 0.44}px "Georgia", "Times New Roman", serif`;
    ctx.fillText("W", size * 0.5, size * 0.46);
  },

  cvs: (ctx, size) => {
    ctx.fillStyle = '#CC0000';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;

    // Draw white CVS Heart
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    // Heart shape curves
    ctx.moveTo(cx, cy - size * 0.12);
    ctx.bezierCurveTo(cx - size * 0.18, cy - size * 0.32, cx - size * 0.36, cy - size * 0.14, cx - size * 0.36, cy + size * 0.08);
    ctx.bezierCurveTo(cx - size * 0.36, cy + size * 0.22, cx - size * 0.12, cy + size * 0.3, cx, cy + size * 0.34);
    ctx.bezierCurveTo(cx + size * 0.12, cy + size * 0.3, cx + size * 0.36, cy + size * 0.22, cx + size * 0.36, cy + size * 0.08);
    ctx.bezierCurveTo(cx + size * 0.36, cy - size * 0.14, cx + size * 0.18, cy - size * 0.32, cx, cy - size * 0.12);
    ctx.closePath();
    ctx.fill();

    // Red "CVS" text inside the heart
    ctx.fillStyle = '#CC0000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${size * 0.14}px "Outfit", "Inter", sans-serif`;
    ctx.fillText("CVS", cx, cy + size * 0.06);
  },

  budget: (ctx, size) => {
    ctx.fillStyle = '#EE3124';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `italic bold ${size * 0.22}px "Outfit", "Inter", Arial, sans-serif`;
    ctx.fillText("Budget", size * 0.5, size * 0.5);
  },

  slateauto: (ctx, size) => {
    ctx.fillStyle = '#3A4D5C';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const w = size * 0.5;

    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = size * 0.035;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Draw stylized sleek car silhouette
    ctx.beginPath();
    // Wheels/Bottom
    ctx.moveTo(cx - w / 2, cy + size * 0.1);
    ctx.lineTo(cx - w * 0.4, cy + size * 0.1);
    // Front wheel arc
    ctx.arc(cx - w * 0.28, cy + size * 0.1, size * 0.06, Math.PI, 0);
    ctx.lineTo(cx + w * 0.16, cy + size * 0.1);
    // Rear wheel arc
    ctx.arc(cx + w * 0.28, cy + size * 0.1, size * 0.06, Math.PI, 0);
    ctx.lineTo(cx + w / 2, cy + size * 0.1);
    // Back outline
    ctx.quadraticCurveTo(cx + w * 0.48, cy - size * 0.02, cx + w * 0.36, cy - size * 0.06);
    // Roof
    ctx.lineTo(cx + w * 0.1, cy - size * 0.16);
    ctx.lineTo(cx - w * 0.2, cy - size * 0.16);
    // Hood
    ctx.lineTo(cx - w * 0.42, cy - size * 0.02);
    ctx.quadraticCurveTo(cx - w / 2, cy + size * 0.02, cx - w / 2, cy + size * 0.1);
    ctx.closePath();
    ctx.stroke();

    // Fill wheels in white
    ctx.beginPath();
    ctx.arc(cx - w * 0.28, cy + size * 0.1, size * 0.035, 0, Math.PI * 2);
    ctx.arc(cx + w * 0.28, cy + size * 0.1, size * 0.035, 0, Math.PI * 2);
    ctx.fill();
  },

  vitaminshoppe: (ctx, size) => {
    ctx.fillStyle = '#002855';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;

    ctx.strokeStyle = '#FFC72C'; // Gold/Yellow
    ctx.lineWidth = size * 0.035;

    // Draw stylized leaf/medical cross icon
    ctx.beginPath();
    // Vertical bar of cross
    ctx.roundRect(cx - size * 0.06, cy - size * 0.22, size * 0.12, size * 0.44, size * 0.03);
    // Horizontal bar of cross
    ctx.roundRect(cx - size * 0.22, cy - size * 0.06, size * 0.44, size * 0.12, size * 0.03);
    ctx.stroke();

    // Center leaf vein
    ctx.fillStyle = '#FFC72C';
    ctx.beginPath();
    ctx.moveTo(cx - size * 0.14, cy - size * 0.14);
    ctx.quadraticCurveTo(cx, cy, cx + size * 0.14, cy + size * 0.14);
    ctx.quadraticCurveTo(cx, cy + size * 0.05, cx - size * 0.14, cy - size * 0.14);
    ctx.closePath();
    ctx.fill();
  },

  starbucks: (ctx, size) => {
    ctx.fillStyle = '#006241';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;

    // Outer white circle
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = size * 0.04;
    ctx.beginPath();
    ctx.arc(cx, cy, size * 0.35, 0, Math.PI * 2);
    ctx.stroke();

    // Stylized coffee cup outline
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.moveTo(cx - size * 0.15, cy - size * 0.12);
    ctx.lineTo(cx + size * 0.15, cy - size * 0.12);
    ctx.lineTo(cx + size * 0.11, cy + size * 0.14);
    ctx.lineTo(cx - size * 0.11, cy + size * 0.14);
    ctx.closePath();
    ctx.fill();

    // Cup handle
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = size * 0.04;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(cx + size * 0.14, cy, size * 0.08, -Math.PI / 2, Math.PI / 2);
    ctx.stroke();

    // Green star inside cup
    drawStar(ctx, cx, cy, 5, size * 0.05, size * 0.02, '#006241');
  },

  doordash: (ctx, size) => {
    ctx.fillStyle = '#FF3008';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const w = size * 0.44;

    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = size * 0.07;
    ctx.lineCap = 'round';

    // DoorDash Dash (curved path resembling a D wing)
    ctx.beginPath();
    ctx.moveTo(cx - w / 2, cy - size * 0.06);
    ctx.quadraticCurveTo(cx, cy - size * 0.18, cx + w / 2, cy - size * 0.06);
    ctx.quadraticCurveTo(cx + size * 0.05, cy + size * 0.12, cx - w * 0.1, cy + size * 0.12);
    ctx.stroke();
  },

  dominos: (ctx, size) => {
    ctx.fillStyle = '#006491';
    ctx.fillRect(0, 0, size, size);

    const cx = size / 2;
    const cy = size / 2;
    const sq = size * 0.22;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.PI * 0.2); // Tilted domino tiles

    // Red Tile (left/bottom)
    ctx.fillStyle = '#E31837';
    ctx.fillRect(-sq * 1.05, -sq / 2, sq, sq);

    // Blue Tile (right/top)
    ctx.fillStyle = '#006491';
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = size * 0.025;
    ctx.fillRect(sq * 0.05, -sq / 2, sq, sq);
    ctx.strokeRect(sq * 0.05, -sq / 2, sq, sq);

    ctx.strokeRect(-sq * 1.05, -sq / 2, sq, sq);

    // Draw Dots on Domino
    const drawDot = (x, y) => {
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(x, y, size * 0.022, 0, Math.PI * 2);
      ctx.fill();
    };

    // Red tile - 1 dot
    drawDot(-sq * 0.55, 0);

    // Blue tile - 2 dots
    drawDot(sq * 0.3, -sq * 0.25);
    drawDot(sq * 0.8, sq * 0.25);

    ctx.restore();
  },

  uber: (ctx, size) => {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${size * 0.24}px "Outfit", "Inter", Arial, sans-serif`;
    ctx.fillText("Uber", size * 0.5, size * 0.5);
  },

  lyft: (ctx, size) => {
    ctx.fillStyle = '#FF00BF';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `bold ${size * 0.25}px "Outfit", "Inter", Arial, sans-serif`;
    ctx.fillText("lyft", size * 0.5, size * 0.48);
  }
};
