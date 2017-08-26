/**
  *  Objects, as generic blobs of values, can be used to build all sorts of data 
  *  structures.  A common data structure is the list (not to be confused with the
  *  array).  A list is a nested set of objects, with the first object holding a
  *  reference to the second, the second to the third, and so on.
  *
  *  var list = {
	*    value: 1,
	*    rest: {
	*      value: 2,
	*      rest: {
	*        value: 3,
	*        rest: null
	*      }
	*    }
  *  };
  *
  *  The resulting objects form a chain, like this:
  *
  *  +-------------+
  *  | value: 1    |      +-------------+
  *  | rest:  -----+----->| value: 2    |      +-------------+
  *  +-------------+      | rest:  -----+----->| value: 3    |
  *                       +-------------+      | rest: null  |
  *                                            +-------------+
  *
  *  A nice thing about lists is that they can share parts of their structure.
  *  For example, If I create two new values {value: 0, rest: list} and
  *  {value: -1, rest: list} (with list referring to the variable defined 
  *  earlier), they are both independent lists, but they share the structure
  *  that makes up their last three elements.  In addition, the original list
  *  is also still a valid three-element list.
  *
  *
  *  Write a function arrayToList that builds up a data structure like the
  *  previous one when given [1, 2, 3] as argument, and write a listToArray
  *  function that produces an array from a list.  Also write the helper
  *  functions prepend, which takes an element and a list and creates a new
  *  list that adds the element to the fron of the input list, and nth, which
  *  takes a list and a number and returns the element at the given position
  *  in the list, or undefined when there is no such element.
  *
  *  If you haven't already, also write a recursive version of nth.
  *
  *  // Your code here.
  *
  *  console.log(arrayToList([10, 20]));
  *  // -> {value: 10, rest: {value: 20, rest: null}}
  *  console.log(listToArray(arrayToList([10, 20, 30])));
  *  // -> [10, 20, 30]
  *  console.log(prepend(10, prepend(20, null)));
  *  // -> {value: 10, rest: {value: 20, rest: null}}
  *  console.log(nth(arrayToList([10, 20, 30]), 1));
  *  // -> 20
  *
  *
  *  This exercise is from Chapter 4 of Eloquent JavaScript
  */


function prepend(element, list) {
	// given an element and a list, create a new list that adds
	// the element to the front of the input list

	var newList = {};
	newList.value = element;
	newList.rest = list;
	return newList;
}


function nth(list, i) {
	// given a list and a number, return the element at the given
	// position in the list

	if (i > 0) {
		return nth(list.rest, i - 1);
	} else {
		return list.value;
	}
}


function arrayToList(arrIn) {
	// given an array, return the equivalent list

	var list = {};
	if (arrIn.length == 1) {
		list.value = arrIn[0];
		list.rest = null
	} else {
		list = prepend(arrIn.shift(), arrayToList(arrIn));
	}
	return list;
}


function listToArray(list) {
	// given a list, return the equivalent array
	var retArr = [];
	while (list) {
		retArr.push(list.value);
		list = list.rest;
	}
	return retArr;
}


console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));