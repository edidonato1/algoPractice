## Encryption

An English text needs to be encrypted using the following encryption scheme.
First, the spaces are removed from the text. Let L be the length of this text.

Example
s = if man was meant to stay on the ground god would have given us roots

After removing spaces, the string is 54 characters long. sqrt(54) is between 7 and 8, so it is written in the form of a grid with 7 rows and 8 columns.

```
ifmanwas  
meanttos          
tayonthe  
groundgo  
dwouldha  
vegivenu  
sroots
```

Ensure that rows x columns  >= L
If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e.  rows x columns.

The encoded message is obtained by displaying the characters of each column, with a space between column texts. The encoded message for the grid above is:
```
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
```
Create a function to encode a message.

*Function Description*

Complete the encryption function in the editor below.

encryption has the following parameter(s):

string s: a string to encrypt

*Returns*

string: the encrypted string

*Input Format*

One line of text, the string *s*

Sample Input
```
haveaniceday
```

Sample Output 0
```
hae and via ecy
```

Explanation 0
L = 12, sqrt(12) is between 3 and 4
Rewritten with 3 rows and 4 columns:
```
have
anic
eday
```

Sample Input 1
```
feedthedog    
```

Sample Output 1
```
fto ehg ee dd
```

Explanation 1
L = 10, sqrt(10) is between 3 and 4
Rewritten with 3 rows and 4 columns:
```
feed
thed
og
```