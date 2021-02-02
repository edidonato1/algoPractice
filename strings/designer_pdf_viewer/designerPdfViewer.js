function designerPdfViewer(h, word) {
  const alphabet =  'abcdefghijklmnopqrstuvwxyz' // JS needs built-in ange operators...
  let heights = word.split('').map(letter => h[alphabet.indexOf(letter)])  // find index of letter in alphabet, then grab that index in h array
  return Math.max(...heights) * word.length // area of highest letter * length
}