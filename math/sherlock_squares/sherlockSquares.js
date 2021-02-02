function squares(a, b) {
  let max = Math.floor(Math.sqrt(b)); // find square roots of range
  let min = Math.ceil(Math.sqrt(a));
  return max - min + 1; // difference between max and min.. add 1 to count both in range
}

// easily could be one line, but it's ugly :/