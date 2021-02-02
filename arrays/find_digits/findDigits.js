function findDigits(n) {
  return n.toString(10).split('').filter(num => n % Number(num) === 0).length
}

// stringify number in order to split to array
// filter down to array items that are evenly divided into n
// return length of filtered array