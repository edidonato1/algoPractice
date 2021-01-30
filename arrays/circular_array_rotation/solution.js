function circularArrayRotation(a, k, queries) {
  for (let i = 0; i < k; i++) {
      let temp = a.pop();
      a.unshift(temp);   
  }
  return queries.map(i => a[i])
}