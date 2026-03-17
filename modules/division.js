registerModule({
  id: 'division',
  name: 'Division',
  icon: '\u00F7',
  generate(level) {
    // Umkehrung der Multiplikation — immer ganzzahlig loesbar
    const reihen = [
      [1, 2, 10],
      [1, 2, 5, 10],
      [1, 2, 3, 5, 10],
      [1, 2, 3, 4, 5, 10],
      [1, 2, 3, 4, 5, 6, 10],
      [1, 2, 3, 4, 5, 6, 7, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [2, 3, 4, 5, 6, 7, 8, 9],
      [3, 4, 6, 7, 8, 9],
      [4, 6, 7, 8, 9],
      [6, 7, 8, 9],
    ];
    const pool = reihen[Math.min(level, reihen.length) - 1];
    const divisor = pool[Math.floor(Math.random() * pool.length)];
    const answer = Math.floor(Math.random() * 10) + 1;
    const dividend = divisor * answer;
    return { text: `${dividend} \u00F7 ${divisor}`, answer };
  }
});
