/**
  * Write a program that creates a string that represents an 8 x 8 grid, using
  * newline characters to separate lines.  At each position of the grid there
  * is either a space or a "#" character.  The characters should form a chess
  * board.
  *
  * Passing this string to console.log should show something like this:
  *
  *      # # # #
  *     # # # #
  *      # # # #
  *     # # # #
  *      # # # #
  *     # # # #
  *      # # # #
  *     # # # #
  *
  * When you have a program that generates this pattern, deffine a variable
  * size = 8 and change the program so that it works for any size, outputting
  * a grid of the given width and height.
  *
  * This is an exercise in Chapter 2 of Eloquent JavaScript.
  *
  */

var size = 8;
var myString = "";
for (var row = 0; row < size; row++) {
    for (var col = 0; col < size; col++) {
        if ((col + row) % 2 == 0) {
            myString += ' ';
        } else {
            myString += '#';
        }
    }
    myString += '\n';
}
console.log(myString);

