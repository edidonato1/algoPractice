const kaprekarNumbers = (p, q)=> {
  let results = []
  for (let i = p; i <= q; i++) {
      let splits = (i*i).toString().split(''); // split each integer into individual digits
      if (Number(splits.slice(0, splits.length /2).join("")) + // add left half of integer to right half
          Number(splits.slice(splits.length/2, splits.length).join("")) === i) { 
          results.push(i) // if sum = i, push to results array
        }
  }
  console.log( results.length ? results.join(' ') : "INVALID RANGE" )
}
