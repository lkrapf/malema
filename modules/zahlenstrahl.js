registerModule({
  id: 'zahlenstrahl',
  name: 'Zahlenstrahl',
  icon: '\u2194\uFE0F',
  generate(level) {
    // labelStep: distance between labeled (big) ticks
    // subdivs: number of small ticks between each label (so small step = labelStep / subdivs)
    // numLabels: how many labeled segments on the line
    // Subdivs are always 1 (all labeled) or 10 (count ticks).
    // Ticks/labels are powers of 10: tick=1→label=10, tick=10→label=100, etc.
    // Difficulty: (1) subdivs 1→10, (2) number range grows,
    // (3) "zoom in": small visible window in a large number space.
    //
    // e.g. L11: max=1000, label=10, tick=1 → shows 570-620, answer=613
    const configs = [
      // Phase 1: alles beschriftet (sd=1), Zahlenraum waechst
      { max: 10,     ls: 1,    sd: 1,  nl: 10 }, //  1: 0-10
      { max: 100,    ls: 10,   sd: 1,  nl: 10 }, //  2: 0-100 (Labels 0,10,20...)
      { max: 1000,   ls: 100,  sd: 1,  nl: 10 }, //  3: 0-1000 (Labels 0,100,200...)
      // Phase 2: 10 subdivs, kleine Zahlen, Strahl wird laenger
      { max: 20,     ls: 10,   sd: 10, nl: 2  }, //  4: tick=1, 2 Labels (0-20)
      { max: 50,     ls: 10,   sd: 10, nl: 3  }, //  5: tick=1, 3 Labels
      { max: 100,    ls: 10,   sd: 10, nl: 5  }, //  6: tick=1, 5 Labels
      // Phase 3: 10 subdivs, groessere Schritte
      { max: 200,    ls: 10,   sd: 10, nl: 5  }, //  7: tick=1, max=200
      { max: 500,    ls: 100,  sd: 10, nl: 3  }, //  8: tick=10, label=100
      { max: 1000,   ls: 100,  sd: 10, nl: 5  }, //  9: tick=10, label=100
      // Phase 4: zoom in — kleines Fenster, grosse Zahlen
      { max: 200,    ls: 10,   sd: 10, nl: 3  }, // 10: tick=1, 30er-Fenster in 0-200
      { max: 500,    ls: 10,   sd: 10, nl: 3  }, // 11: tick=1, 30er-Fenster in 0-500
      { max: 1000,   ls: 10,   sd: 10, nl: 5  }, // 12: tick=1, 50er-Fenster in 0-1000 (→ 570-620)
      { max: 2000,   ls: 100,  sd: 10, nl: 3  }, // 13: tick=10, 300er-Fenster in 0-2000
      { max: 5000,   ls: 100,  sd: 10, nl: 5  }, // 14: tick=10, 500er-Fenster in 0-5000
      // Phase 5: deep zoom — Einer ablesen in Tausendern
      { max: 2000,   ls: 10,   sd: 10, nl: 3  }, // 15: tick=1, 30er in 0-2000 (→ 1570-1600)
      { max: 5000,   ls: 10,   sd: 10, nl: 5  }, // 16: tick=1, 50er in 0-5000
      { max: 10000,  ls: 100,  sd: 10, nl: 5  }, // 17: tick=10, 500er in 0-10000
      { max: 10000,  ls: 10,   sd: 10, nl: 5  }, // 18: tick=1, 50er in 0-10000 (→ 7830-7880)
      { max: 10000,  ls: 1000, sd: 10, nl: 5  }, // 19: tick=100, 5000er in 0-10000
      { max: 100000, ls: 10,   sd: 10, nl: 5  }, // 20: tick=1, 50er in 0-100000 (→ 34570-34620)
    ];
    const cfg = configs[Math.min(level, configs.length) - 1];

    const smallStep = cfg.ls / cfg.sd;
    const rangeSize = cfg.ls * cfg.nl;

    // Pick a range start (aligned to labelStep)
    const maxStart = Math.max(0, cfg.max - rangeSize);
    const start = Math.floor(Math.random() * (maxStart / cfg.ls + 1)) * cfg.ls;
    const end = start + rangeSize;

    // Total small ticks
    const totalSmallTicks = cfg.nl * cfg.sd;

    // Pick target: on a small tick, not start or end
    const targetIdx = 1 + Math.floor(Math.random() * (totalSmallTicks - 1));
    const answer = start + targetIdx * smallStep;

    // Build SVG
    const w = 320, h = 80, pad = 30;
    const lineY = 35, arrowY = 12;
    const lineW = w - pad * 2;

    let svg = `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" style="max-width:100%">`;

    // Main line
    svg += `<line x1="${pad}" y1="${lineY}" x2="${w - pad}" y2="${lineY}" stroke="#2d3436" stroke-width="2"/>`;
    // Arrowhead on right
    svg += `<polygon points="${w - pad},${lineY} ${w - pad - 6},${lineY - 4} ${w - pad - 6},${lineY + 4}" fill="#2d3436"/>`;

    // Ticks and labels
    for (let i = 0; i <= totalSmallTicks; i++) {
      const x = pad + (i / totalSmallTicks) * lineW;
      const val = start + i * smallStep;
      const isMajor = i % cfg.sd === 0;
      const tickH = isMajor ? 8 : 4;

      svg += `<line x1="${x}" y1="${lineY - tickH}" x2="${x}" y2="${lineY + tickH}" stroke="#2d3436" stroke-width="${isMajor ? 1.5 : 1}"/>`;

      if (isMajor) {
        svg += `<text x="${x}" y="${lineY + 22}" text-anchor="middle" font-size="11" fill="#2d3436" font-family="sans-serif">${val}</text>`;
      }
    }

    // Arrow pointing to target
    const targetX = pad + (targetIdx / totalSmallTicks) * lineW;
    svg += `<line x1="${targetX}" y1="${arrowY}" x2="${targetX}" y2="${lineY - 10}" stroke="#e74c3c" stroke-width="2"/>`;
    svg += `<polygon points="${targetX},${lineY - 6} ${targetX - 5},${arrowY + 4} ${targetX + 5},${arrowY + 4}" fill="#e74c3c"/>`;
    svg += `<text x="${targetX}" y="${arrowY}" text-anchor="middle" font-size="11" font-weight="bold" fill="#e74c3c" font-family="sans-serif">?</text>`;

    svg += '</svg>';

    // Generate choices aligned to smallStep
    const choices = new Set([answer]);
    while (choices.size < 4) {
      const offset = (Math.floor(Math.random() * 5) + 1) * smallStep;
      const candidate = answer + (Math.random() < 0.5 ? offset : -offset);
      if (candidate >= start && candidate <= end && candidate % smallStep === 0) {
        choices.add(candidate);
      }
    }
    const sorted = [...choices].sort((a, b) => a - b);

    return { text: '', html: svg, answer, choices: sorted };
  }
});
