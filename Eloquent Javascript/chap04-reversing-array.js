/**
  *  Arrays have a method reverse, which changes the array by inverting the order in
  *  which its elements appear.  For this exercise, write two functions, reverseArray
  *  and reverseArrayInPlace.  The first, reverseArray, takes an array as argument
  *  and produces a new array that has the same elements in the inverse order.  The
  *  second, reverseArrayInPlace, does what the reverse method does: it modifies the
  *  array given as argument in order to reverse its element.  Neither may use the
  *  standard reverse method.
  *
  *  Thinking back to the notes about side effects and pure functions in the previous
  *  chapter, which variant do you expect to be useful in more situations?  Which one
  *  is more efficient?
  *
  *  // Your code here.
  *
  *  console.log(reverseArray(["A", "B", "C"]));
  *  // -> ["C", "B", "A"]
  *  var arrayValue = [1, 2, 3, 4, 5];
  *  reverseArrayInPlace(arrayValue);
  *  console.log(arrayValue);
  *  // -> [5, 4, 3, 2, 1]
  *
  *
  *  This exercise is from Chapter 4 of Eloquent Javascript
  *
  */


function reverseArray(arrIn) {
  var retArr = [];
  for (var i = arrIn.length - 1; i >= 0; i--) {
    retArr.push(arrIn[i]);
  }
  return retArr;
}


function reverseArrayInPlace(arrIn) {
  var temp;
  var j = arrIn.length - 1
  for (var i = 0; i < j; i++, j--) {
    // Swap entries i and j
    temp = arrIn[i];
    arrIn[i] = arrIn[j];
    arrIn[j] = temp;
  }
  return;
}


console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);