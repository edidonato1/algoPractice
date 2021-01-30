function minimumSwaps(arr) {
  let swaps = 0;
  let temp;
  let i = 0;
  while (i < arr.length) {
      if (arr[i] !== i + 1) {
          temp = arr[i]; // store current value into temporary variable
          arr[i] = arr[temp-1]; // use index (current value - 1) to locate proper position of current value
          arr[temp-1] = temp; // complete swap 
          swaps++;
      } else {
          i++
      }
  }
  return swaps;
}

