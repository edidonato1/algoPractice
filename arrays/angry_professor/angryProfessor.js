function angryProfessor(k, a) {
  return k <= a.filter(n => n <= 0).length ? 'NO' : 'YES'
} // filter array down to students who arrived early or on time, find length
// if greater than or equal to threshold , return 'YES'