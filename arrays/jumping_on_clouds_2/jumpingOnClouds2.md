## Jumping On Clouds

A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

There is an array of clouds,  and an energy level . The character starts from  and uses  unit of energy to make a jump of size  to cloud . If it lands on a thundercloud, , its energy () decreases by  additional units. The game ends when the character lands back on cloud .

Given the values of , , and the configuration of the clouds as an array , determine the final value of  after the game ends.

Example. 
c = [0, 0, 1, 1]
k = 2
The indices of the path are 0 -> 2 -> 0. The energy level reduces by 1 for eawch jump to 98.  The character landed on one thunderhead at an additional cost of 2 energy units. The final energy level is 96.

