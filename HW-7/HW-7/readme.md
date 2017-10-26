Leah Becker, 51

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball
## Description of What the Original Code is Doing


The first line sets the ball up as an object
lines 2-8 define certain properties of the ball.
lines 10-13 is the set up function. Here the canvas and background
colors are set-up. lines 19-20 dictates the movement of the ball based off of where the mouse was last clicked. lines 23-28 are the conditionals that keep the ball on the screen. If a wall is hit, the ball reverses it's direction. Delta_x and delta_y will always be either -1 or 1 and this dictates which whether the ball is increasing or decreasing its position across the screen. lines 30 and 30 set-up the fill color and draw the ball based of the modified ball.x and ball.y variables. 34-37 is the mousePressed function. This is what changes the direction and length of the moving ball. The closer to the top left corner you click, the tighter the circles become. This change is due to the map function and multiplication in lines 19-20.  





## How did you alter the sketch?

I changed the sketch into what amounts to the game pong without the opposing player. I coded a paddle close to the bottom of the screen that the ball will bounce off of. This paddle follows the user's mouse. I also had the ball change to a random shade of red if the mouse is held down. Otherwise the ball is a random shade of blue. I also put a loss counter in the top left corner of the window. I did this because the bouncing ball without the tail reminds me of either breakout or pong and I thought it would be fun to do something similar.
