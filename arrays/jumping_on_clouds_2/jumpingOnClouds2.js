function jumpingOnClouds(c, k) {
  let e = 100;
  let n = c.length;
  for (let i = 0; i < n; i += k) {
      c[i] === 1 ? e -= 3 : e-- // -1 energy for regular jump, -3 for landing on thunderhead
      if (i + k > n) { 
          i = n % k; // return to start of array if jump size + index > array length
          if (n % k === 0 ) { // break if returning to index 0
              break;
          }
      }
  }
  return e
}