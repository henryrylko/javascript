/**
  *  The == operator compares objects by identity.  But sometimes, you would prefer to 
  *  compare the values of their actual properties.
  *
  *  Write a function, deepEqual, that takes two values and returns true only if they
  *  are the same value or are objects with the same properties whose values are also
  *  equal when compared with a recursive call to deepEqual.
  *
  *  To find out whether to compare two things by identity (use the === operator for
  *  that) or by looking at their properties, you can use the typeof operator.  If it
  *  produces "object" for both values, you should do a deep comparison.  But you have
  *  to take one silly exception into account: by a historical accident, typeof null
  *  also produces "object".
  *
  *  // Your code here.
  *
  *  var obj = {here: {is: "an"}, object: 2};
  *  console.log(deepEqual(obj, obj));
  *  // -> true
  *  console.log(deepEqual(obj, {here: 1, object: 2}));
  *  // -> false
  *  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  *  // -> true
  *
  *
  *  This exercise is from Chapter 4 of Eloquent JavaScript
  *
  */


function deepEqual(val1, val2) {
	var retBool = true;
	if ((typeof(val1) === "object" && val1 !== null) &&
		  (typeof(val2) === "object" && val2 !== null)) {
		// do a deep compare
	  if (Object.keys(val1).length !== Object.keys(val2).length) {
	  	// the two values are both objects but they have a different number
	  	// of properties, so they can't be equal
	  	retBool = false;
	  } else {
			for (var prop in val1) {
				retBool = retBool && deepEqual(val1[prop], val2[prop]);
			}
	  }
	} else {
		// these are not both objects so compare by identity
		retBool = (val1 === val2);
	}
	return retBool;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
