# Wingardium LeviosFour :sparkles: :zap: :sparkles:
###### "It's leviOsa not leviosaR!"

[Link to the app!](https://emfoxily.com/connect4/)

-------------------------------------------
## How to Play:

**The best game in the wizarding world since Wizard's Chess!**

Represent your Hogwarts house in this revamped version of Connect Four! Each player will select their house and the first player that does so, makes the first move. Whoever gets four in a row vertically or horizontally, wins! Go to [this](https://emfoxily.com/connect4/) link to play!

### Prerequisites:
-------------------------------------------
##### **ALL** players must have received their Hogwarts letter in order to play.

##### **NO** muggles allowed.
-------------------------------------------
### This game was made using:
-------------------------------------------
- ATOM
- JavaScript & jQuery
- HTML & CSS
- Google Fonts
- GitHub Pages
- Magic

### Approach taken:
-------------------------------------------
Starting out, I used basic HTML and CSS to figure out where I wanted to place my board and from there I used jQuery to populate the actual board. At this point I didn't have much of an idea of what I wanted the game to be. I knew Connect 4 was the skeleton, but nothing more. That was truthfully the first hurdle in the project because I tend to be a very visual person. I couldn't picture the end goal. But then I thought...I should make this around something very near and dear to my heart -- Harry Potter.

Once I figured out that, everything seemed to be smooth sailing -- until the second hurdle came along. I had created the option to select houses, but I wanted the modal to close once two had been selected. This was achieved by creating an empty players array and providing an if statement to check that the players array length was equal to two. At that point, the modal would close and the game would begin. I celebrated that small victory.

And then...a new challenger approached. I had figured out and coded the ability for the players to choose what houses they wanted to be, but when it came to placing the pieces on the board, my click event would not work no matter how hard my efforts. I went through a trial and error process where I kept asking myself, "maybe my first click event is bubbling and preventing me from placing pieces on the board?" Unfortunately, that didn't solve my problem. I then proceeded to try hard coding my game board into the HTML in a last attempt at trying to get that functionality working.

To my (not) surprise, it didn't work either. I rearranged my code to no avail before resorting to hard coding the on click into my html. That, for whatever reason, worked. Not the most elegant solution, but it worked and so I took it.

From there, I went on to work on finding out how to get the player pieces to alternate between turns. I tried a lot of different things, but eventually made an empty 'moves' array and multiplied my max rows and max columns variables to determine how many moves there would be in the game. I did this so that if I ever wanted to grow upon this game and make it so that the players could decide how big the game board would be by just change the amounts set in the variables. The reason I didn't do this was for the sake of time and my poor fingers making the board image in Photoshop a hundred thousand times.

Once that portion was squared away, I came across my next problem -- checking for a winner. This was the hurdle that nearly made me pull my hair out. I ended up consulting my dad (he's a solution architect) and he suggested using a 2d array -- my arch nemesis. But despite my hatred towards 2d arrays, it ultimately was the best solution (pun intended).

I went back to populating my board with jQuery as opposed to hard coding it and made an empty board array as well as an empty board row array that went in my for loop for the board. As the board populated, the rows and columns were appended and pushed to the board array. More trial and error resulted in me getting rid of my hard coded house image tags and replacing them with their own divs and classes that were named after their respective houses. This made them more easily accessible in the array.

The big problem I ran into in that process, however, was trying to get rid of the column class that I had applied to all the circles on the board. It was the one thing giving them their shape. I tried using class inheritance, but I couldn't get that to work. But when I started giving each circle (or cell if you'd rather call it that) unique Id's with their coordinates, I was able to give the circles a value of null until a user clicks on one. At that point, the house class name populates the circle. I also achieved this by giving the house classes a background size of cover so that it would automatically fit itself to whatever div it was applied to.

And the big, BIG problem was the process of actually checking for four consecutive matches. I, again, consulted my dad and asked him what he suggested. All he said was, "use nested for loops." From that point on, things started to come a lot easier. I used to hate loops and couldn't really understand them, but this project really solidified that I know more about them than I realize. I took baby steps and calculated winners by row at first, but after that, I knew right off the bat that checking for columns would be the same method, just rearranging my loops -- columns on the outside, rows on the inside.

The few things that I wish I had been able to figure out were how to get the game piece to automatically go to the bottom rather than be placed wherever on the board. I found myself spending too much time trying to figure it out, so I moved on. And the other thing was checking for a winner diagonally. I plan to re-vist these features in the future, but for now, I'm really proud of how far I've come and what I accomplished in this first project.

### Features to come:
-------------------------------------------
- Clicking on a circle automatically puts the piece at the bottom and stacks them accordingly
- Sorting Hat randomizing who goes first
- Keep track of house points to win the house cup

-------------------------------------------
### Authors:
-------------------------------------------
- Emily Reno
-------------------------------------------
## Credits:
```
Images used from Pottermore
```
