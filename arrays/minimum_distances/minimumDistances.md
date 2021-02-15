## Minimum Distances

The distance between two array values is the number of indices between them. Given , find the minimum distance between any pair of equal elements in the array. If no such value exists, return .

*Example*
```
a = [3, 2, 1, 2,3]
```

There are two matching pairs of values: `3` and `2`. The indices of the `3`'s are `i = 0` and `j = 4`, so their distance is `s[i, j] = |j - 1| = 4`. The indices of the `2`'s are `i = 1` and `j = 3`, so their distance is `d[i, j] = |j - i| = 2`. The minimum distance is `2`.

*Function Description*

Complete the minimumDistances function in the editor below.

minimumDistances has the following parameter(s):

int a[n]: an array of integers

*Returns*

int: the minimum distance found or `-1` if there are no matching elements