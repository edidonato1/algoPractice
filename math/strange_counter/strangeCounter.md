## Strange Counter

There is a strange counter. At the first second, it displays the number . Each second, the number displayed by decrements by `1` until it reaches `1`. In next second, the timer resets to `2 x the initial number for the prior cycle` and continues counting down. The diagram below shows the counter values for each time `t` in the first three cycles



Find and print the value displayed by the counter at time `t`.

*Function Description*

Complete the strangeCounter function in the editor below.

strangeCounter has the following parameter(s):

int t: an integer


*Returns*

int: the value displayed at time `t`

*Input Format*

A single integer, the value of `t`.


*Sample Input*
```
4
```

*Sample Output*
```
6
```

*Explanation*

Time `t = 4` marks the beginning of the second cycle. It is double the number displayed at the beginning of the first cycle: `2 x 3 = 6`. This is shown in the diagram in the problem statement.