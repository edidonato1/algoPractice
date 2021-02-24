function flatlandSpaceStations(n, c) {
  c.sort((a, b) => a - b);
  let max = Math.max(((n - c[c.length-1]) - 1), c[0]); // test against outer parameters of n
  c.forEach((num, i) => {
      let curr = Math.floor((c[i+1] - num) / 2) // largest distance for any current index is halfway between two stations
      if (curr > max) {
          max = curr;
      }
  })
  return max;
}