function permutationEquation(p) {
  return  p.map((n, i) => p.indexOf((p.indexOf(i+ 1) + 1)) + 1) 
}


