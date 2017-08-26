/** 
  *  The introduction of this book alluded to the following as a nice way to compute the
  *  sum of a range of numbers:
  *  
  *  	console.log(sum(range(1, 10)));
  *  
  *  Write a range function that takes two arguments, start and end, and returns an
  *  array containing all the number from start up to (and including) end.
  * 
  * 
  *  This exercise is from Chapter 4 of Eloquent JavaScript
  * 
  */


function myRange(start, end) {
	var retArr = [];
	for (var i = start; i <= end; i++) {
		retArr.push(i);
	}
	// console.log(retArr);
	return retArr;
}

// myRange(1,4);


/**
  *  Next, write a sum function that takes an array of numbers and returns the sum of
  *  these numbers.  Run the previous program and see whether it does indeed return 55.
  *
  */


function mySum(arrIn) {
	var retSum = 0;
	for (var i = 0; i < arrIn.length; i++) {
		retSum += arrIn[i];
	}
  return retSum;
}

console.log(mySum(myRange(1, 10)));


/**
  *  As a bonus assignment, modify your range function to take an optional third
  *  argument that indicates the "step value" used to build up the array.  If no step
  *  is given, the array elements go up by increments of one, corresponding to the old
  *  behavior.  The funciton call range(1, 10, 2) should return [1, 3, 5, 7, 9].  Make
  *  sure it also works with negative step values so that range(5, 2, -1) produces
  *  [5, 4, 3, 2].
  *  
  *  // Your code here.
  *  
  *  console.log(range(1, 10));
  *  // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  *  console.log(range(5, 2, -1));
  *  // -> [5, 4, 3, 2]
  *  console.log(sum(range(1, 10)));
  *  // -> 55
  *
  */


function myRange2(start, end, step) {
  var retArr = [];
  var myStep;
  if (arguments.length < 3) {
    myStep = 1;
  } else {
    myStep = step;
  }
  if (myStep >= 0) {
    for (var i = start; i <= end; i += myStep) {
      retArr.push(i);
    }
  } else {
    for (var i = start; i >= end; i += myStep) {
      retArr.push(i);
    }
  }
  return retArr;
}


  console.log(myRange2(1, 10));
  console.log(myRange2(5, 2, -1));
  console.log(mySum(myRange2(1, 10)));