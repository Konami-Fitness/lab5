# lab5
Henry Claisse, Teddy Clark, Michael Kokkatt, Shane Riggs


***Quick Note: Running  play2.html will 
have the right functionality for the lab and running the play.html will have most of the right functionality 
and has a good emphasis on the styling of the page.***


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

The sliders were made using JQuery's .slider widget and were synced to the numbers to allow players to 
change their guess without having to manually type in numbers, and instead use a horizontal slider to either 
increase or decrease the values of their guesses.

Unfortunately we were not able to connect the jquery plugin we tailored to the html and maintain the proper css.
In order to demonstate both the plugin and css, we created two separate files where files ending
in "2" indicate that those files have the proper plugin functionality, while those without
a "2" have the most of the functionality and page design considerations. Running the play2.html will 
have the right functionality for the lab and running the play.html will have most of the right functionality 
and has a good emphasis on the styling of the page.

To initialize the game using the jquery plugin which we named hexed, we wrapped all our jquery code into
that function hexed and then called the hexed function on a div tag in our html with the attributes of 
the setting, game and color objects. 

For creativity, we created a landing page separate from the actual play page to model professional
applications. Then, we separated the settings page from the game play page for separation of
concerns. All pages have a colorful background to enhance the Hexed! game and have colored
elements taken from components of the background image. The sliders on the game play page are spread
out in the columns with the respective input text fields placed above for best functionality.
We kept round results at the bottom of the page to put an emphasis on the color box and sliders.
