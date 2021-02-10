const encryption = s =>  {
  let chunkSize = Math.ceil(Math.sqrt(s.length)); // # of columns
  let height = Math.round(Math.sqrt(s.length)) // # of rows
  let arr = [];
  for (let i = 0; i < s.length; i += chunkSize) {
      arr.push(s.slice(i, i + chunkSize)) // create array with chunks of strings
  }
  let newArr = [] 
  for (let i = 0; i < chunkSize; i++) {
      let newStr = '';
      for (let j = 0; j < height; j++) {
          newStr += arr[j].charAt(i) // new string from column i of each string in arr
      }
      newArr.push(newStr)
  }
  return newArr.join(' ')
}