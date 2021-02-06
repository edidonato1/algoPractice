function equalizeArray(arr) {
  let counts = arr.map(n => {
      let count = 0;
      arr.forEach(curr => {
          n === curr ? count ++ : null; 
      })
      return count; // find # of times each item appears in array
  })
  return arr.length - Math.max(...counts); // subtract highest counts from array length
}