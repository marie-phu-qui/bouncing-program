<<<<<<< HEAD
<h1>Bounce the square</h1>


<p>A page where on click a randomly colored squares appears. <br>
According to the lenght of the click the square is more or less big. <br>
The dot is attracted to the closest edge of the page and bounce at a 90* angle to it. <br>
You can add as many dots as you want and they will react to each other by bouncing back if they are from a different color, or merge to a bigger dot if they are from the same color.<br>
The merged dot will have a different size according to the size of the two dots respectively.</p>


<h2>Pseudocoding the bouncing</h2>
<p>when the page is charged :
   when event click : create a square on the page {
         add it to the html;
         place it at the cursor clicked location;
   }
   every second call the function moving on the existing square {
          if (the square is closest to the right edge) {
              while ( not touching the right edge) {
                        add 10px to this square right css;
                        }
               else {
                        bounce at 45* in other direction;
                        }
               }
            if (the square is closest to the left edge) {
              while ( not touching the left edge) {
                        add 10px to this square left css;
                        }
               else {
                        bounce at 45* in other direction;
                        }
               }
</P>
=======
<h1>Bounce the square</h1>


<p>A page where on click a randomly colored squares appears. <br>
According to the lenght of the click the square is more or less big. <br>
The dot is attracted to the closest edge of the page and bounce at a 45* angle to it. <br>
You can add as many dots as you want and they will react to each other by bouncing back if they are from a different color, or merge to a bigger dot if they are from the same color.<br>
The merged dot will have a different size according to the size of the two dots respectively.</p>
>>>>>>> bcb9c5d3050ea1a0376f1084d7e970691f43fea3
