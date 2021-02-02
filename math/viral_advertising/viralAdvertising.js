function viralAdvertising(n) {
  let shared = 5;
  let liked = []
  for (let i = 0; i < n; i++) {
      liked.push(Math.floor(shared / 2)) // array of everyone who liked the post
      shared = liked[i] * 3; // each person who liked post shares with 3 friends
  }
  return liked.reduce((a, b) => a + b) // sum of total likes
}