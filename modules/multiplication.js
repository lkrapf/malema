registerModule({
  id: 'multiplication',
  name: 'Multiplikation',
  icon: '\u00D7',
  generate(level) {
    // Kleines Einmaleins: schrittweise Reihen einfuehren
    // Level 1: 1er,2er,10er  Level 2: +5er  Level 3: +3er  etc.
    const reihen = [
      [1, 2, 10],           // 1
      [1, 2, 5, 10],        // 2
      [1, 2, 3, 5, 10],     // 3
      [1, 2, 3, 4, 5, 10],  // 4
      [1, 2, 3, 4, 5, 6, 10],         // 5
      [1, 2, 3, 4, 5, 6, 7, 10],      // 6
      [1, 2, 3, 4, 5, 6, 7, 8, 10],   // 7
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],// 8: volles kleines 1x1
      [2, 3, 4, 5, 6, 7, 8, 9],       // 9: ohne 1er/10er (schwerer)
      [3, 4, 6, 7, 8, 9],             // 10: nur die schwierigen
      [4, 6, 7, 8, 9],                // 11
      [6, 7, 8, 9],                   // 12: Koenigsreihen
    ];
    const pool = reihen[Math.min(level, reihen.length) - 1];
    const a = pool[Math.floor(Math.random() * pool.length)];
    const b = Math.floor(Math.random() * 10) + 1;
    return { text: `${a} \u00D7 ${b}`, answer: a * b };
  }
});
