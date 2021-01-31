function beautifulDays(i, j, k) {
  let arr = [];
  for (let x = i; x <= j; x++) {
      arr.push(x); // create array from range [i...j]
  }
  return arr.filter(num => {
      let reversed = Number((num).toString(10).split('').reverse().join('')) // reverse number at each index
      return Math.abs(num - reversed) % k === 0; // return to new array if difference is divisible by k
  }).length
}