function utopianTree(n) {
  let h = 0;
  for (let i = 0; i <= n; i++) {
      i % 2 === 0 ? h++ : h *= 2;
  }
  return h
}