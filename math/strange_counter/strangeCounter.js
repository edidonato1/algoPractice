function strangeCounter(t) {
  let time = 1, init = 3, prev = 3
  while (time < t) {
      time++;
      init--;
      if (init === 0) {
          prev *= 2;
          init = prev;
      }
  }
  return init;
}