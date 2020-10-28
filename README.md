# lab5

Gameplay:

We used Math.random() to generate random values for red, blue and green color values. Then
we concatenated those values to create a color value for the color swatch that the user
will see. For the sliders that the player uses to guess, we used jQuery UI sliders. The
user can also type their guesses into form input fields. The sliders will update the values
in the input fields and vice versa. 

Clicking the Guess button runs some JavaScript that concatenates the values for each color
and checks the value matches the randomly generated  are correct. If they are, it alerts
the player that they have won. If the values do not match, the JavaScript runs the
percentOff function for each of the 3 guesses from the player. These percentages are then
displayed below the game.
