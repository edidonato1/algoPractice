function howManyGames(p, d, m, s) {
  let count = 0;
  while (s >= p) {
      s -= p
      p  = Math.max(p - d, m)
      count += 1;
  }
  return count;
}