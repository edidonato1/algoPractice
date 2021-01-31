function saveThePrisoner(n, m, s) {
  return (m-1 + s) % n || n;
}

// find remainder of (candy - 1) plus starting seat number, divided by number of prisoners
// use || operator to return n if the previous returns a falsy value 
// i.e. - if there is one piece of candy for every prisoner, 
// and you start at seat 1, the last person(n) will get the poison ( (m-1) + s === n )
