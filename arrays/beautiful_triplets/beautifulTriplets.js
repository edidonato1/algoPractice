function beautifulTriplets(d, arr) {
  let count = 0;
  arr.forEach((n, i) => {
      for (let j = i; j < arr.length; j++) {
          if (n + d === arr[j]) {
              for (let k = j; k < arr.length; k++) {
                  if (arr[j] + d === arr[k]) {
                      count += 1;
                  }
              }
          }
      }
  })
  return count;
}