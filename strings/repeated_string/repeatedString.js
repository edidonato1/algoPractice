function repeatedString(s, n) {
  let sliced = s.slice(0, n % s.length) // if string length not divisibile into n, grab the remainder
  let repeated = Math.floor(n / s.length) // # of times string repeats in n without remainder
  let count = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'a') {
          count += 1; // how many times 'a' appears in string
      }
  }
  let slicedCount = 0;
  for (let i = 0; i < sliced.length; i++) {
      if (sliced[i] === 'a') {
          slicedCount += 1; // how many times 'a' appears in remainder 
      } 
  }
  return count * repeated + slicedCount // total 'a' count in string, multiplied by # of repeats in n, plus 'a' count in remainder
}

// this would look a lot prettier by splitting 's' and 'sliced' then filtering to get the counts, 
// for example this one-liner:
function repeatedString(s, n) {
  return s.split('').filter(l => l === 'a').length
   * Math.floor(n / s.length)
   +  s.slice(0, n % s.length) .split('').filter(l => l === 'a').length;
}
// but the first method is more efficient and more legible