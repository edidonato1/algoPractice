function hourglassSum(arr) {
  let max = -63  // lowest possible hourglass (-9 * 6)
  for (let i = 0; i < arr.length - 2; i++) { // subtract 2 from matrix so only whole hourglass is measured (hourglass "height" = 3)
      for (let j = 0; j < arr.length - 2; j++) {  // subtract 2 from array so only whole hourglass is measured (hourglass "width" = 3)
          let sum = 
          arr[i][j] + arr[i][j+1] + arr[i][j+2] + // top 3
          arr[i+1][j+1] + // middle 1
          arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]; // bottom 3
          if (sum > max) {
              max = sum // reassign max to largest sum
          }
      }
  }
  return max
}