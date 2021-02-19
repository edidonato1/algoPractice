const generateHashtag = str => {
  // edge cases include strings comprised of " ".repeat(200), so you need to grab length after applying methods
  let newStr = str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return newStr.length && newStr.length < 140 ? `#${newStr}` : false;
}