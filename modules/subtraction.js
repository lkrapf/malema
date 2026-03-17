registerModule({
  id: 'subtraction',
  name: 'Subtraktion',
  icon: '\u2796',
  generate(level) {
    const ranges = [
      10, 15, 20, 30, 50,
      75, 100, 150, 200, 300,
      400, 500, 600, 750, 800,
      900, 1000, 2000, 5000, 10000
    ];
    const max = ranges[Math.min(level, ranges.length) - 1];
    const a = Math.floor(Math.random() * (max - 1)) + 2;
    const b = Math.floor(Math.random() * (a - 1)) + 1;
    return { text: `${a} \u2212 ${b}`, answer: a - b };
  }
});
