function minimumDistances(a) {
  let min = a.length; // base case (no pairs)
  a.forEach((n, idx) => {
      for (let i = idx + 1; i < a.length; i++) {
          if (a[i] === n) {
              min = Math.min(min, i - idx) // test min against difference of indices of matching elements
          }
      }
  })
  return min < a.length ? min : -1 
}