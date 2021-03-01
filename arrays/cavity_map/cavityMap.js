function cavityMap(grid) {
  for (let i = 1; i < grid.length -1 ; i++) {
      for (let j = 1; j < grid[i].length -1 ; j++) {
          let curr = grid[i][j];
          let boundary = [grid[i-1][j], grid[i][j+1], grid[i+1][j], grid[i][j-1]]
          if (curr > Math.max(...boundary)) {
          grid[i] = grid[i].slice(0, j) + 'X' + grid[i].slice(j+1, grid[i].length)
          }
      }
  }
  return grid
}
