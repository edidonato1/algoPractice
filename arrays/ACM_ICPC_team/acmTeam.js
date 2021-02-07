const acmTeam = topic => {
  let pairs = []; // home for pairs that have the maximum combined subjects known
  let max = 0; // counter to contain maximum subjects
  for (let i = 0; i < topic.length; i++) {
      for (let j = 0; j < topic.length; j++) {// nested loop to test each combination
          let count = 0;
          if (j !== i) { // don't test "student" against themself
              topic[j].split('').forEach((num, idx) => {
                  if (num === '1' || topic[i].charAt(idx) === '1') { // if either "student" has a '1' at this position, count += 1
                      count += 1;
                  }
              })
          }
          if (count > max) {
              max = count; // update max
          }
          if (count === max) {
              pairs.push([max, i, j]) // pushing "max" to first position to eliminate pairs that knew the maximum subjects at a lower value
          }
      }
  }
  return [max, pairs.filter(arr => arr[0] === max).length / 2]
} // second index of return filters to accept only pairs that match the current max
// since each pair will appear twice, divide by two