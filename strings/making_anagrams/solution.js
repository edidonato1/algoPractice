function makeAnagram(a, b) {
  let newA = a.split('');
  let newB = b.split('');
  let count = newA.length + newB.length
  let pair = 0;
  for (let i = 0; i < newA.length; i++) {
      for ( let j = 0; j < newB.length; j++) {
          if (newA[i] == newB[j]) {
              pair ++;
              newB.splice(j, 1);
              break;
          }
      }
  }
  return(count - (pair * 2))
}