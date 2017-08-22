/**
  * The previous chanpter introduced the standard function Math.min that returns
  * its smallest argument.  We can do that ourselves now.  Write a function min
  * that takes two arguments and returns their minimum.
  *
  * This is an excercise from Chapter 3 of Eloquent JavaScript
  *
  */

var min = function(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log("min(3,4) = %d", min(3, 4));
console.log("min(9,5) = %d", min(9, 5));
console.log("min(2.3, 2.3) = %d", min(2.3, 2.3));
