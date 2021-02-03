function cutTheSticks(arr) {
  let results = []
  while (arr.length) {
      let min = Math.min(...arr); 
      results.push(arr.length) // don't want to return 0, so grab the length before the last iteration removes remaining indices
      arr = arr.filter(n => n > min).map(n => n -= min); // remove indices equal to min, then subtract from all remaining indices
  }
  return results;
}