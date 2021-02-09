const appendAndDelete = (s, t, k) => {
  if (k > s.length + t.length) {
    // since you can perform delete operation on empty string, it will always be "Yes" if
    // there are more moves than the combines lengths of the two strings
      return "Yes"
  }
  let count = 0; // begin counting # of operations made
  for (let i = s.length - 1; i >= 0; i--) { // moving backwards through strings to check for matches
      if (s[i] !== t[i]) {
        // if character doesn't match, must delete rest of string starting at character i.
        // this requires an operation at each character starting at the end of the string
        count += s.length - i;
          s = s.slice(0, i)
      }
  }
  for (let i = 0; i < t.length; i++) {
      if (s[i] !== t[i]) {
          s += t[i]; // append operation to make the strings match
          count += 1;
      }
  }
  let diff = k - count; // amount of moves left
  // strings will match at this point, so if there are moves left, there must be an even number,
  // otherwise you will have to end on a delete operation, leaving string s one character short
  return diff >= 0 ?
      diff % 2 === 0 ? "Yes" : "No" 
      : "No"
}