// ── Avatar Items ──
const AVATAR_ITEMS = [
  // Hats
  { id: 'hat-beanie',   category: 'Muetzen',  name: 'Muetze',       cost: 3, emoji: '\uD83E\uDDE2' },
  { id: 'hat-crown',    category: 'Muetzen',  name: 'Krone',        cost: 8, emoji: '\uD83D\uDC51' },
  { id: 'hat-tophat',   category: 'Muetzen',  name: 'Zylinder',     cost: 5, emoji: '\uD83C\uDFA9' },
  { id: 'hat-cap',      category: 'Muetzen',  name: 'Kappe',        cost: 3, emoji: '\uD83E\uDDE2' },
  { id: 'hat-flower',   category: 'Muetzen',  name: 'Blume',        cost: 4, emoji: '\uD83C\uDF3B' },
  // Hair
  { id: 'hair-short',   category: 'Frisur',   name: 'Kurz',         cost: 3, emoji: '\uD83D\uDC71' },
  { id: 'hair-long',    category: 'Frisur',   name: 'Lang',         cost: 3, emoji: '\uD83D\uDC69' },
  { id: 'hair-curly',   category: 'Frisur',   name: 'Locken',       cost: 4, emoji: '\uD83D\uDC69\u200D\uD83E\uDDB1' },
  { id: 'hair-punk',    category: 'Frisur',   name: 'Punk',         cost: 6, emoji: '\uD83E\uDDD1\u200D\uD83C\uDFA4' },
  { id: 'hair-braids',  category: 'Frisur',   name: 'Zoepfe',       cost: 5, emoji: '\uD83D\uDC67' },
  { id: 'hair-bun',     category: 'Frisur',   name: 'Dutt',         cost: 4, emoji: '\uD83D\uDC69\u200D\uD83E\uDDB0' },
  // Glasses
  { id: 'glasses-cool', category: 'Brillen',  name: 'Sonnenbrille', cost: 4, emoji: '\uD83D\uDD76\uFE0F' },
  { id: 'glasses-nerd', category: 'Brillen',  name: 'Nerdbrille',   cost: 3, emoji: '\uD83D\uDC53' },
  { id: 'glasses-star', category: 'Brillen',  name: 'Starbrille',   cost: 6, emoji: '\u2B50' },
  { id: 'glasses-heart',category: 'Brillen',  name: 'Herzbrille',   cost: 5, emoji: '\u2764\uFE0F' },
  // Eyes
  { id: 'eyes-blue',    category: 'Augen',    name: 'Blau',         cost: 3, emoji: '\uD83D\uDC99' },
  { id: 'eyes-green',   category: 'Augen',    name: 'Gruen',        cost: 3, emoji: '\uD83D\uDC9A' },
  { id: 'eyes-brown',   category: 'Augen',    name: 'Braun',        cost: 3, emoji: '\uD83E\uDD0E' },
  { id: 'eyes-purple',  category: 'Augen',    name: 'Lila',         cost: 5, emoji: '\uD83D\uDC9C' },
  { id: 'eyes-cat',     category: 'Augen',    name: 'Katze',        cost: 7, emoji: '\uD83D\uDE3A' },
  // Mouths
  { id: 'mouth-grin',   category: 'Mund',     name: 'Grinsen',      cost: 3, emoji: '\uD83D\uDE01' },
  { id: 'mouth-tongue', category: 'Mund',     name: 'Zunge',        cost: 4, emoji: '\uD83D\uDE1C' },
  { id: 'mouth-kiss',   category: 'Mund',     name: 'Kuss',         cost: 5, emoji: '\uD83D\uDE18' },
  { id: 'mouth-oh',     category: 'Mund',     name: 'Staunen',      cost: 3, emoji: '\uD83D\uDE2E' },
  { id: 'mouth-vampire',category: 'Mund',     name: 'Vampir',       cost: 8, emoji: '\uD83E\uDDB7' },
  // Shirts - plain colors
  { id: 'shirt-red',     category: 'Shirts', name: 'Rot',          cost: 3 },
  { id: 'shirt-blue',    category: 'Shirts', name: 'Blau',         cost: 3 },
  { id: 'shirt-pink',    category: 'Shirts', name: 'Pink',         cost: 3 },
  { id: 'shirt-green',   category: 'Shirts', name: 'Gruen',        cost: 3 },
  { id: 'shirt-yellow',  category: 'Shirts', name: 'Gelb',         cost: 3 },
  { id: 'shirt-orange',  category: 'Shirts', name: 'Orange',       cost: 3 },
  { id: 'shirt-black',   category: 'Shirts', name: 'Schwarz',      cost: 4 },
  { id: 'shirt-white',   category: 'Shirts', name: 'Weiss',        cost: 3 },
  // Shirts - special
  { id: 'shirt-hero',    category: 'Shirts', name: 'Superheld',    cost: 7 },
  { id: 'shirt-sport',   category: 'Shirts', name: 'Sport',        cost: 5 },
  { id: 'shirt-rainbow', category: 'Shirts', name: 'Regenbogen',   cost: 6 },
  { id: 'shirt-stripes', category: 'Shirts', name: 'Streifen',     cost: 5 },
  { id: 'shirt-star',    category: 'Shirts', name: 'Sternchen',    cost: 6 },
  // Backgrounds
  { id: 'bg-rainbow',   category: 'Hintergrund', name: 'Regenbogen', cost: 5, emoji: '\uD83C\uDF08' },
  { id: 'bg-space',     category: 'Hintergrund', name: 'Weltraum',   cost: 8, emoji: '\uD83C\uDF0C' },
  { id: 'bg-forest',    category: 'Hintergrund', name: 'Wald',       cost: 4, emoji: '\uD83C\uDF33' },
  { id: 'bg-beach',     category: 'Hintergrund', name: 'Strand',     cost: 6, emoji: '\uD83C\uDFD6\uFE0F' },
  { id: 'bg-sunset',    category: 'Hintergrund', name: 'Sonnenuntergang', cost: 5, emoji: '\uD83C\uDF05' },
];

const CATEGORIES = [...new Set(AVATAR_ITEMS.map(i => i.category))];

// Background renderers: return { defs, fill, extras }
// defs = SVG gradient/pattern defs, fill = fill for the circle, extras = SVG on top of bg circle
const BG_RENDERS = {
  default: () => ({ defs: '', fill: '#dfe6e9', extras: '' }),

  'bg-rainbow': (cx, r) => ({
    defs: `<linearGradient id="bg-gr" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e74c3c"/><stop offset="20%" stop-color="#e67e22"/>
      <stop offset="40%" stop-color="#f1c40f"/><stop offset="60%" stop-color="#2ecc71"/>
      <stop offset="80%" stop-color="#3498db"/><stop offset="100%" stop-color="#9b59b6"/>
    </linearGradient>`,
    fill: 'url(#bg-gr)', extras: ''
  }),

  'bg-sunset': (cx, r) => ({
    defs: `<linearGradient id="bg-gr" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2d3436"/><stop offset="25%" stop-color="#6c5ce7"/>
      <stop offset="50%" stop-color="#e84393"/><stop offset="75%" stop-color="#e17055"/>
      <stop offset="100%" stop-color="#fdcb6e"/>
    </linearGradient>`,
    fill: 'url(#bg-gr)',
    extras: `<circle cx="${cx+14}" cy="${cx+18}" r="10" fill="#fdcb6e" opacity="0.8"/>`
  }),

  'bg-space': (cx, r) => {
    let stars = '';
    // Deterministic star positions using simple seed
    for (let i = 0; i < 20; i++) {
      const sx = cx + (((i * 37 + 7) % 53) - 26) * r / 30;
      const sy = cx + (((i * 23 + 13) % 47) - 23) * r / 30;
      const sr = (i % 3 === 0) ? 1.5 : 0.8;
      stars += `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="${sr}" fill="#fff" opacity="${0.5 + (i%3)*0.2}"/>`;
    }
    return {
      defs: `<radialGradient id="bg-gr" cx="30%" cy="30%">
        <stop offset="0%" stop-color="#2d3436"/><stop offset="100%" stop-color="#0a0a2e"/>
      </radialGradient>`,
      fill: 'url(#bg-gr)',
      extras: stars + `<circle cx="${cx-16}" cy="${cx-16}" r="5" fill="#fdcb6e" opacity="0.6"/>`
    };
  },

  'bg-forest': (cx, r) => ({
    defs: `<linearGradient id="bg-gr" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#87ceeb"/><stop offset="50%" stop-color="#87ceeb"/>
      <stop offset="50%" stop-color="#55a630"/><stop offset="100%" stop-color="#2d6a1e"/>
    </linearGradient>`,
    fill: 'url(#bg-gr)',
    extras: `<polygon points="${cx-20},${cx+10} ${cx-14},${cx-8} ${cx-8},${cx+10}" fill="#2d6a1e"/>`
      + `<polygon points="${cx-4},${cx+10} ${cx+4},${cx-14} ${cx+12},${cx+10}" fill="#388e3c"/>`
      + `<polygon points="${cx+12},${cx+10} ${cx+20},${cx-4} ${cx+28},${cx+10}" fill="#2d6a1e"/>`
  }),

  'bg-beach': (cx, r) => ({
    defs: `<linearGradient id="bg-gr" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#74b9ff"/><stop offset="45%" stop-color="#74b9ff"/>
      <stop offset="55%" stop-color="#0984e3"/><stop offset="60%" stop-color="#ffeaa7"/>
      <stop offset="100%" stop-color="#fdcb6e"/>
    </linearGradient>`,
    fill: 'url(#bg-gr)',
    extras: `<circle cx="${cx+18}" cy="${cx-20}" r="7" fill="#f9ca24" opacity="0.8"/>`
  }),
};

const SHIRT_COLORS = {
  default: '#6c5ce7',
  'shirt-red': '#e74c3c',
  'shirt-blue': '#3498db',
  'shirt-pink': '#fd79a8',
  'shirt-green': '#00b894',
  'shirt-yellow': '#fdcb6e',
  'shirt-orange': '#e17055',
  'shirt-black': '#2d3436',
  'shirt-white': '#f5f5f5',
  'shirt-hero': '#e84393',
  'shirt-sport': '#00b894',
  'shirt-rainbow': '#6c5ce7',
  'shirt-stripes': '#3498db',
  'shirt-star': '#6c5ce7',
};

// Small SVG shirt icon for wardrobe preview
function shirtPreviewSVG(fillOrSvg) {
  const base = `<svg viewBox="0 0 36 32" width="36" height="32">`;
  const outline = `<path d="M10,2 L4,8 L8,10 L8,30 L28,30 L28,10 L32,8 L26,2 L21,6 Q18,8 15,6 Z"`;
  if (typeof fillOrSvg === 'string' && fillOrSvg.startsWith('<')) {
    return base + '<defs>' + fillOrSvg + '</defs>' + outline + ` fill="url(#sp)" stroke="#ccc" stroke-width="1"/></svg>`;
  }
  return base + outline + ` fill="${fillOrSvg}" stroke="#ccc" stroke-width="1"/></svg>`;
}

const SHIRT_PREVIEWS = {};
for (const [id, color] of Object.entries(SHIRT_COLORS)) {
  if (id === 'default') continue;
  SHIRT_PREVIEWS[id] = shirtPreviewSVG(color);
}
// Special pattern previews
SHIRT_PREVIEWS['shirt-rainbow'] = shirtPreviewSVG('<linearGradient id="sp" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e74c3c"/><stop offset="25%" stop-color="#f9ca24"/><stop offset="50%" stop-color="#00b894"/><stop offset="75%" stop-color="#0984e3"/><stop offset="100%" stop-color="#6c5ce7"/></linearGradient>');
SHIRT_PREVIEWS['shirt-stripes'] = shirtPreviewSVG('<pattern id="sp" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#3498db"/><rect width="3" height="6" fill="#fff"/></pattern>');
SHIRT_PREVIEWS['shirt-star'] = shirtPreviewSVG('#6c5ce7');

const EYE_COLORS = {
  default: '#2d3436',
  'eyes-blue': '#0984e3',
  'eyes-green': '#00b894',
  'eyes-brown': '#b5651d',
  'eyes-purple': '#6c5ce7',
  'eyes-cat': '#fdcb6e',
};

// All positions relative to cx:
// Head center: cy = cx - 4, radius = 30
// Head top: cx - 34, Eyes: cx - 8

// Hair: head circle center is (cx, hc) with hc=cx-4, radius=30
// Hairline is at y = hc - 12 (forehead). At that y, the head edge x = cx ± sqrt(30²-16²) ≈ cx ± 25
// We draw hair as a cap: arc along the head from hairline-left over the top to hairline-right, closed with a straight line.
const HAIR_RENDERS = {
  'hair-short': (cx) => {
    const hc = cx - 4;
    // Cap from hairline over the top — follows the head circle (r=30)
    // Hairline at hc-14: x = cx ± sqrt(900-100) ≈ cx ± 28
    return `<path d="M${cx-28},${hc-14} A30,30 0 0,1 ${cx+28},${hc-14} Z" fill="#8B4513"/>`;
  },
  'hair-long': (cx) => {
    const hc = cx - 4;
    // Cap over top + long strands hanging past chin
    return `<path d="M${cx-28},${hc-14} A30,30 0 0,1 ${cx+28},${hc-14} Z" fill="#5D4037"/>`
      + `<rect x="${cx-32}" y="${hc-14}" width="9" height="48" rx="4" fill="#5D4037"/>`
      + `<rect x="${cx+23}" y="${hc-14}" width="9" height="48" rx="4" fill="#5D4037"/>`;
  },
  'hair-curly': (cx) => {
    const hc = cx - 4;
    // Fluffy volume: cap + puffs around the head
    let s = `<path d="M${cx-28},${hc-14} A30,30 0 0,1 ${cx+28},${hc-14} Z" fill="#D4A017"/>`;
    // Puffs sticking out above and to the sides
    s += `<circle cx="${cx}" cy="${hc-36}" r="10" fill="#D4A017"/>`;
    s += `<circle cx="${cx-16}" cy="${hc-32}" r="9" fill="#D4A017"/>`;
    s += `<circle cx="${cx+16}" cy="${hc-32}" r="9" fill="#D4A017"/>`;
    s += `<circle cx="${cx-28}" cy="${hc-20}" r="8" fill="#D4A017"/>`;
    s += `<circle cx="${cx+28}" cy="${hc-20}" r="8" fill="#D4A017"/>`;
    // Side puffs
    s += `<circle cx="${cx-33}" cy="${hc-4}" r="8" fill="#D4A017"/>`;
    s += `<circle cx="${cx+33}" cy="${hc-4}" r="8" fill="#D4A017"/>`;
    return s;
  },
  'hair-punk': (cx) => {
    const hc = cx - 4, top = hc - 30;
    // Mohawk spikes standing up from the top of the head
    let s = '';
    const colors = ['#e74c3c', '#fdcb6e', '#e74c3c', '#fdcb6e', '#e74c3c'];
    for (let i = 0; i < 5; i++) {
      const x = cx - 16 + i * 8;
      const h = 26 - Math.abs(i - 2) * 5;
      s += `<rect x="${x}" y="${top - h + 4}" width="6" height="${h}" rx="3" fill="${colors[i]}"/>`;
    }
    return s;
  },
  'hair-braids': (cx) => {
    const hc = cx - 4;
    // Cap + two braids hanging down from sides
    let s = `<path d="M${cx-28},${hc-14} A30,30 0 0,1 ${cx+28},${hc-14} Z" fill="#2d3436"/>`;
    // Left braid
    for (let i = 0; i < 5; i++) {
      const y = hc - 6 + i * 8;
      const off = (i % 2 === 0) ? -2 : 2;
      s += `<ellipse cx="${cx-31+off}" cy="${y}" rx="5" ry="4" fill="#2d3436"/>`;
    }
    // Right braid
    for (let i = 0; i < 5; i++) {
      const y = hc - 6 + i * 8;
      const off = (i % 2 === 0) ? 2 : -2;
      s += `<ellipse cx="${cx+31+off}" cy="${y}" rx="5" ry="4" fill="#2d3436"/>`;
    }
    // Hair ties
    s += `<circle cx="${cx-31}" cy="${hc + 34}" r="4" fill="#e74c3c"/>`;
    s += `<circle cx="${cx+31}" cy="${hc + 34}" r="4" fill="#e74c3c"/>`;
    return s;
  },
  'hair-bun': (cx) => {
    const hc = cx - 4, top = hc - 30;
    // Cap + round bun sitting on top
    return `<path d="M${cx-28},${hc-14} A30,30 0 0,1 ${cx+28},${hc-14} Z" fill="#e17055"/>`
      + `<circle cx="${cx}" cy="${top - 8}" r="12" fill="#e17055"/>`;
  },
};

const HAT_RENDERS = {
  'hat-beanie':  (cx) => { const top = cx-34; return `<ellipse cx="${cx}" cy="${top+12}" rx="28" ry="10" fill="#e74c3c"/><rect x="${cx-24}" y="${top+2}" width="48" height="12" rx="4" fill="#e74c3c"/><circle cx="${cx}" cy="${top}" r="5" fill="#e74c3c"/>`; },
  'hat-crown':   (cx) => { const top = cx-34; return `<polygon points="${cx-22},${top+16} ${cx-18},${top-4} ${cx-8},${top+8} ${cx},${top-8} ${cx+8},${top+8} ${cx+18},${top-4} ${cx+22},${top+16}" fill="#f9ca24" stroke="#f0932b" stroke-width="1.5"/>`; },
  'hat-tophat':  (cx) => { const top = cx-34; return `<rect x="${cx-18}" y="${top-8}" width="36" height="24" rx="3" fill="#2d3436"/><rect x="${cx-26}" y="${top+14}" width="52" height="6" rx="3" fill="#2d3436"/>`; },
  'hat-cap':     (cx) => { const top = cx-34; return `<ellipse cx="${cx}" cy="${top+14}" rx="28" ry="8" fill="#0984e3"/><rect x="${cx-22}" y="${top+4}" width="44" height="12" rx="6" fill="#0984e3"/><rect x="${cx+4}" y="${top+12}" width="26" height="5" rx="2" fill="#074d8c"/>`; },
  'hat-flower':  (cx) => { const top = cx-34; return `<circle cx="${cx}" cy="${top-2}" r="8" fill="#fdcb6e"/><circle cx="${cx-7}" cy="${top-6}" r="5" fill="#e74c3c"/><circle cx="${cx+7}" cy="${top-6}" r="5" fill="#e74c3c"/><circle cx="${cx-7}" cy="${top+2}" r="5" fill="#e74c3c"/><circle cx="${cx+7}" cy="${top+2}" r="5" fill="#e74c3c"/><circle cx="${cx}" cy="${top-10}" r="5" fill="#e74c3c"/><circle cx="${cx}" cy="${top+6}" r="5" fill="#e74c3c"/>`; },
};

const GLASSES_RENDERS = {
  'glasses-cool': (cx) => { const ey = cx-8; return `<rect x="${cx-20}" y="${ey-4}" width="16" height="12" rx="6" fill="#2d3436" opacity="0.8"/><rect x="${cx+4}" y="${ey-4}" width="16" height="12" rx="6" fill="#2d3436" opacity="0.8"/><line x1="${cx-4}" y1="${ey+2}" x2="${cx+4}" y2="${ey+2}" stroke="#2d3436" stroke-width="2"/>`; },
  'glasses-nerd': (cx) => { const ey = cx-8; return `<circle cx="${cx-12}" cy="${ey}" r="10" fill="none" stroke="#636e72" stroke-width="2"/><circle cx="${cx+12}" cy="${ey}" r="10" fill="none" stroke="#636e72" stroke-width="2"/><line x1="${cx-2}" y1="${ey}" x2="${cx+2}" y2="${ey}" stroke="#636e72" stroke-width="2"/>`; },
  'glasses-star': (cx) => { const ey = cx-8; return `<polygon points="${cx-12},${ey-5} ${cx-9},${ey-1} ${cx-5},${ey-1} ${cx-8},${ey+2} ${cx-7},${ey+6} ${cx-12},${ey+3} ${cx-17},${ey+6} ${cx-16},${ey+2} ${cx-19},${ey-1} ${cx-15},${ey-1}" fill="#f9ca24"/><polygon points="${cx+12},${ey-5} ${cx+15},${ey-1} ${cx+19},${ey-1} ${cx+16},${ey+2} ${cx+17},${ey+6} ${cx+12},${ey+3} ${cx+7},${ey+6} ${cx+8},${ey+2} ${cx+5},${ey-1} ${cx+9},${ey-1}" fill="#f9ca24"/><line x1="${cx-3}" y1="${ey}" x2="${cx+3}" y2="${ey}" stroke="#f9ca24" stroke-width="2"/>`; },
  'glasses-heart': (cx) => { const ey = cx-8; return `<path d="M${cx-17},${ey-1} C${cx-17},${ey-5} ${cx-12},${ey-7} ${cx-12},${ey-3} C${cx-12},${ey-7} ${cx-7},${ey-5} ${cx-7},${ey-1} C${cx-7},${ey+3} ${cx-12},${ey+6} ${cx-12},${ey+6} C${cx-12},${ey+6} ${cx-17},${ey+3} ${cx-17},${ey-1}Z" fill="#e74c3c"/><path d="M${cx+7},${ey-1} C${cx+7},${ey-5} ${cx+12},${ey-7} ${cx+12},${ey-3} C${cx+12},${ey-7} ${cx+17},${ey-5} ${cx+17},${ey-1} C${cx+17},${ey+3} ${cx+12},${ey+6} ${cx+12},${ey+6} C${cx+12},${ey+6} ${cx+7},${ey+3} ${cx+7},${ey-1}Z" fill="#e74c3c"/><line x1="${cx-3}" y1="${ey}" x2="${cx+3}" y2="${ey}" stroke="#e74c3c" stroke-width="2"/>`; },
};

const MOUTH_RENDERS = {
  default:         (cx) => `<path d="M${cx-8},${cx+6} Q${cx},${cx+14} ${cx+8},${cx+6}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
  'mouth-grin':    (cx) => `<path d="M${cx-10},${cx+4} Q${cx},${cx+16} ${cx+10},${cx+4}" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="${cx-6}" y1="${cx+9}" x2="${cx+6}" y2="${cx+9}" stroke="currentColor" stroke-width="1"/>`,
  'mouth-tongue':  (cx) => `<path d="M${cx-8},${cx+6} Q${cx},${cx+14} ${cx+8},${cx+6}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><ellipse cx="${cx}" cy="${cx+13}" rx="4" ry="5" fill="#e74c3c"/>`,
  'mouth-kiss':    (cx) => `<circle cx="${cx}" cy="${cx+8}" r="4" fill="#e74c3c"/>`,
  'mouth-oh':      (cx) => `<ellipse cx="${cx}" cy="${cx+8}" rx="5" ry="7" fill="#2d3436" opacity="0.15" stroke="currentColor" stroke-width="2"/>`,
  'mouth-vampire': (cx) => `<path d="M${cx-8},${cx+6} Q${cx},${cx+14} ${cx+8},${cx+6}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><polygon points="${cx-4},${cx+6} ${cx-2},${cx+12} ${cx},${cx+6}" fill="#fff"/><polygon points="${cx},${cx+6} ${cx+2},${cx+12} ${cx+4},${cx+6}" fill="#fff"/>`,
};

// ── Render Avatar SVG ──
function buildAvatarSVG(size, equipped) {
  const s = size || 120;
  const cx = s / 2;
  const eq = equipped || state.equipped;

  const bgRenderer = BG_RENDERS[eq['Hintergrund']] || BG_RENDERS.default;
  const bg = bgRenderer(cx, cx - 2);
  const shirtColor = SHIRT_COLORS[eq['Shirts']] || SHIRT_COLORS.default;

  const eyeColor = EYE_COLORS[eq['Augen']] || EYE_COLORS.default;
  const isCatEyes = eq['Augen'] === 'eyes-cat';
  const mouthId = eq['Mund'] || 'default';

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s + 40}" width="${s}" height="${s + 40}">`;

  // Shirt defs
  const shirtId = eq['Shirts'];
  let shirtDefs = '';
  let shirtFill = shirtColor;
  if (shirtId === 'shirt-rainbow') {
    shirtDefs = `<linearGradient id="av-shirt" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e74c3c"/><stop offset="25%" stop-color="#f9ca24"/><stop offset="50%" stop-color="#00b894"/><stop offset="75%" stop-color="#0984e3"/><stop offset="100%" stop-color="#6c5ce7"/></linearGradient>`;
    shirtFill = 'url(#av-shirt)';
  } else if (shirtId === 'shirt-stripes') {
    shirtDefs = `<pattern id="av-shirt" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#3498db"/><rect width="3" height="6" fill="#fff"/></pattern>`;
    shirtFill = 'url(#av-shirt)';
  }
  const allDefs = (bg.defs || '') + (shirtDefs || '');
  if (allDefs) svg += `<defs>${allDefs}</defs>`;

  // Background circle
  svg += `<clipPath id="bg-clip"><circle cx="${cx}" cy="${cx}" r="${cx - 2}"/></clipPath>`;
  svg += `<circle cx="${cx}" cy="${cx}" r="${cx - 2}" fill="${bg.fill}"/>`;
  if (bg.extras) svg += `<g clip-path="url(#bg-clip)">${bg.extras}</g>`;

  // Body
  svg += `<rect x="${cx - 22}" y="${s - 30}" width="44" height="36" rx="12" fill="${shirtFill}"/>`;
  // Star decoration on shirt
  if (shirtId === 'shirt-star') {
    svg += `<polygon points="${cx},${s-22} ${cx+2},${s-17} ${cx+7},${s-17} ${cx+3},${s-14} ${cx+5},${s-9} ${cx},${s-12} ${cx-5},${s-9} ${cx-3},${s-14} ${cx-7},${s-17} ${cx-2},${s-17}" fill="#f9ca24"/>`;
  }
  // Head
  svg += `<circle cx="${cx}" cy="${cx - 4}" r="30" fill="#ffeaa7"/>`;

  // Hair (behind face features, but on top of head circle)
  if (eq['Frisur'] && HAIR_RENDERS[eq['Frisur']]) {
    svg += HAIR_RENDERS[eq['Frisur']](cx);
  }

  // Eyes
  if (isCatEyes) {
    svg += `<ellipse cx="${cx - 10}" cy="${cx - 8}" rx="3" ry="4" fill="${eyeColor}"/>`;
    svg += `<rect x="${cx - 11}" y="${cx - 9}" width="2" height="5" rx="1" fill="#2d3436"/>`;
    svg += `<ellipse cx="${cx + 10}" cy="${cx - 8}" rx="3" ry="4" fill="${eyeColor}"/>`;
    svg += `<rect x="${cx + 9}" y="${cx - 9}" width="2" height="5" rx="1" fill="#2d3436"/>`;
  } else {
    svg += `<circle cx="${cx - 10}" cy="${cx - 8}" r="3" fill="${eyeColor}"/>`;
    svg += `<circle cx="${cx + 10}" cy="${cx - 8}" r="3" fill="${eyeColor}"/>`;
  }

  // Mouth
  const mouthFn = MOUTH_RENDERS[mouthId] || MOUTH_RENDERS.default;
  svg += `<g style="color:#2d3436">${mouthFn(cx)}</g>`;

  // Hat
  if (eq['Muetzen'] && HAT_RENDERS[eq['Muetzen']]) {
    svg += HAT_RENDERS[eq['Muetzen']](cx);
  }

  // Glasses
  if (eq['Brillen'] && GLASSES_RENDERS[eq['Brillen']]) {
    svg += GLASSES_RENDERS[eq['Brillen']](cx);
  }

  svg += '</svg>';
  return svg;
}

function renderAvatarPreview(container, size) {
  if (!container) return;
  container.innerHTML = buildAvatarSVG(size || 100);
}

// ── Wardrobe ──
let currentCategory = CATEGORIES[0];
let previewItem = null; // item being previewed

function renderWardrobe() {
  showScreen('wardrobe');
  updateHeader();

  // Build preview equipped set (real equipped + preview override)
  const previewEquipped = Object.assign({}, state.equipped);
  if (previewItem) {
    previewEquipped[previewItem.category] = previewItem.id;
  }

  document.getElementById('wardrobe-avatar').innerHTML = buildAvatarSVG(120, previewEquipped);

  // Action bar
  const actionBar = document.getElementById('wardrobe-action');
  actionBar.innerHTML = '';
  if (previewItem) {
    const unlocked = state.unlocked.includes(previewItem.id);
    const equipped = state.equipped[previewItem.category] === previewItem.id;

    if (equipped) {
      // Already equipped — offer to remove
      const removeBtn = document.createElement('button');
      removeBtn.className = 'btn btn-secondary';
      removeBtn.textContent = 'Ausziehen';
      removeBtn.onclick = () => {
        delete state.equipped[previewItem.category];
        previewItem = null;
        saveState();
        renderWardrobe();
      };
      actionBar.appendChild(removeBtn);
    } else if (unlocked) {
      // Owned but not equipped — offer to equip
      const equipBtn = document.createElement('button');
      equipBtn.className = 'btn';
      equipBtn.textContent = 'Anziehen';
      equipBtn.onclick = () => {
        state.equipped[previewItem.category] = previewItem.id;
        previewItem = null;
        saveState();
        renderWardrobe();
      };
      actionBar.appendChild(equipBtn);
    } else {
      // Not owned — offer to buy (if enough stars)
      const canAfford = state.stars >= previewItem.cost;
      const buyBtn = document.createElement('button');
      buyBtn.className = 'btn btn-buy' + (canAfford ? '' : ' disabled');
      buyBtn.textContent = `Kaufen (\u2B50 ${previewItem.cost})`;
      buyBtn.onclick = () => {
        if (!canAfford) return;
        state.stars -= previewItem.cost;
        state.unlocked.push(previewItem.id);
        state.equipped[previewItem.category] = previewItem.id;
        previewItem = null;
        saveState();
        renderWardrobe();
      };
      actionBar.appendChild(buyBtn);
      if (!canAfford) {
        const hint = document.createElement('div');
        hint.className = 'preview-hint';
        hint.textContent = `Noch ${previewItem.cost - state.stars} \u2B50 noetig`;
        actionBar.appendChild(hint);
      }
    }
  } else {
    const hint = document.createElement('div');
    hint.className = 'preview-hint';
    hint.textContent = 'Klicke ein Item zum Anprobieren';
    actionBar.appendChild(hint);
  }

  const catContainer = document.getElementById('wardrobe-categories');
  catContainer.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (cat === currentCategory ? ' active' : '');
    btn.textContent = cat;
    btn.onclick = () => { currentCategory = cat; previewItem = null; renderWardrobe(); };
    catContainer.appendChild(btn);
  });

  const grid = document.getElementById('wardrobe-grid');
  grid.innerHTML = '';
  const items = AVATAR_ITEMS.filter(i => i.category === currentCategory);

  items.forEach(item => {
    const unlocked = state.unlocked.includes(item.id);
    const equipped = state.equipped[item.category] === item.id;
    const isPreviewing = previewItem && previewItem.id === item.id;

    const el = document.createElement('div');
    el.className = 'wardrobe-item'
      + (equipped ? ' equipped' : '')
      + (isPreviewing ? ' selected' : '')
      + (!unlocked ? ' locked' : '');

    el.innerHTML = `
      <div class="item-preview">${SHIRT_PREVIEWS[item.id] || item.emoji || ''}</div>
      <div class="item-name">${item.name}</div>
      ${!unlocked ? `<div class="item-cost">\u2B50 ${item.cost}</div>` : equipped ? '<div class="item-cost">Angezogen</div>' : ''}
    `;

    el.onclick = () => {
      previewItem = (isPreviewing) ? null : item;
      renderWardrobe();
    };

    grid.appendChild(el);
  });
}
