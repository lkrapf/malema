registerModule({
  id: 'addition',
  name: 'Addition',
  icon: '\u2795',
  generate(level) {
    const ranges = [
      10, 15, 20, 30, 50,       // 1-5: bis 50
      75, 100, 150, 200, 300,    // 6-10: bis 300
      400, 500, 600, 750, 800,   // 11-15: bis 800
      900, 1000, 2000, 5000, 10000 // 16-20: bis 10000
    ];
    const max = ranges[Math.min(level, ranges.length) - 1];
    const a = Math.floor(Math.random() * max) + 1;
    const b = Math.floor(Math.random() * (max - a)) + 1;
    return { text: `${a} + ${b}`, answer: a + b };
  }
});
