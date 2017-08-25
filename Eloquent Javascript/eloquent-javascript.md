# Eloquent JavaScript

## Chapter 1: VALUES, TYPES and OPERATORS

There are six basic types of values in JavaScript:

1. numbers
1. strings
1. booleans
1. objects
1. functions
1. undefined values

JavaScript uses 64 bits to store a numeric value.

_%_ is the remainder operator

There are three special values that are considered numbers:
    
1. _Infinity_
1. _-Infinity_
1. _NaN_ (not a number)

_+_ is the concatenate operator when applied to strings.

The _typeof_ operator produces a string value naming the type of value.

JavaScript has a _Boolean_ type with the values:
   
1. _true_
1. _false_

There is only one value in JavaScript that is not equal to itself, _NaN_.

JavaScript supports three logical operators:
    
1. and (_&&_)
1. or (_||_)
1. not (_!_)

Conditional (ternary) Operator _?:_

Undefined Values:

1. _null_
1. _undefined_

The _===_ and _!==_ operators compare type and value whereas _==_ and _!=_ use type coercion.

The _&&_, _||_ and _?:_ operators are short-circuited.


## Chapter 2: PROGRAM STRUCTURE

A fragment of code that produces a value is called an expression.

A program is simply a list of statements.

The simples kind of statement is an expression with a semicolon after it.

To catch and hold values, JavaScript provides a thing called a variable.

A variable name cannot include puctuation, except for the characters $ and _.

A single var statement may define multiple variables.  The definitions must be separated by commas.

The following is a list of reserved or keywords:

    break case catch class const continue debugger
    default delete do else enum export extends false
    finally for function if implements import in
    instanceof interface let new null package private
    protected public return static super switch this
    throw true try typeof var void while with yield

The collection of variables and their values that exist at a given time is called the environment.

A function is a piece of program wrapped in a value.

Executing a function is called invoking, calling, or applying it.

You can call a function by putting parentheses after an expression that produces a function value.  The values between parentheses are given to the program inside the function.  Values given to functions are called arguments.

A sequence of statments wrapped in braces is called a block.

The do/while loop is a control structure similar to the while loop with its test at the end.

JavaScript also has a standard for loop.

There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.

When continue is encountered in a loop body, control jumps out of the body and continues with the loop's next iteration.

JavaScript has a switch statement.

Camelcase is commonly used for JavaScript identifiers.  Constructor functions are usually capitalized.

Single-line comments use two slash characters (//).

Block comments are delimited with /* and */.


## Chapter 3:  FUNCTIONS

The parameters to a function behave like regular variables, but their initial values are given by the caller of the function, not the code in the function itself.

An important property of functions is that the variables created inside of them, including their parameters, are local to the function.

This "localness" of variables applies only to the parameters and to variables declared with the var keyword inside the function body.  Variables declared outside of any function are call global, because they are visible throughout the program.

Each local scope can also sell all the local scopes that contain it.

In JavaScript, functions are the only things that create a new scope.  Blocks do NOT create a new scope.

The next version of JavaScript will introduce a let keyword, which works like var but creates a variable that is local to the enclosing block, not the enclosing function.

Function variables usually simply act as names for a specific piece of the program.  Such a variable is defined once and never changed.  This makes it easy to start confusing the function and its name.

A function value can do all the things that other values can do.  Similarly, a variable that holds a function is still just a regular variable and can be assigned a new value.

There is a slightly shorter way to say

    var square = function(x) { return x * x; }

The function keyword can also be used at the start of the statement, as in the following:

    function square(x) {
        return x * x;
    }

This is a function declaration.  Function declarations are not part of the regular top-to-bottom flow of control.  They are conceptually moved to the top of their scope and can be used by all the code in that scope.  Only use function declarations in the outermost block of a function or program.

Because a function has to jump back to the place of the call when it returns, the computer must remember the context from which the function was called.  The place where the computer stores this context is the call stack.  Every time a function is called, the current context is put on top of this stack.  When the function returns, it removes the top context from the stack and uses it to continue execution.

JavaScript is extrememly broad-minded about the number of arguments you pass to a function.  If you pass too many, the extra ones are ignored.  If you pass too few, the missing parameters simply get assigned the value undefined.

Being able to reference a specific instance of local variable in an enclosing function -- is called closure.  A function that closes over some local variables is called a closure.  A parameter is itself a local variable.

Don't worry about efficiency until you know for sure that the program is too slow.  If it is, find out which parts are taking up the most time, and start exchanging elegance for efficiency in those parts.

A pure function is a specific kind of value-producing function that not only has no side effects but also doesn't rely on side effects from other code -- for example, it doesn't read global variables that are occasionally changed by other code.  A pure function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn't do anything else).  A call to such a fucntion can be metally substituted by its result, without changing the meaning of the code.


## Chapter 4:  DATA STRUCTURES: OBJECTS AND ARRAYS

Objects allow us to group values -- including other objects -- together and thus build more complex structures.

JavaScript provides a data type specifically for storing sequences of values.  It is called an array and is written as a list of values between square brackets, separated by commas.

The notation for getting at the elements inside an array also uses square brackets.  A pair of square brackets immediately after an expression, with another expression inside of them, will look up the element in the left-hand expression that corresponds to the index given by the expression in brackets.  The first index of an array is zero.

Almost all JavaScript values have properties.  The exceptions are null and undefined.  The two most common ways to access properties in JavaScript are with a dot and with square brackets.  Both `value.x`  and `value[x]` access a property on value -- but not necessarily the same property.  The difference is in how x is interpreted.  When using a dot, the part after the dot must be a valid variable name, and it directly names the property.  When using square brackets, the expression between the brackets is evaluated to get the property name.  Property names can be any string.

The elements in an array are stored in properties.  Because the names of these properties are numbers, we have to use the bracket syntax to access them.

Properties that contain functions are generally called methods of the value they belong to.

The push method can be used to add values to the end of an array.  The pop method does the opposite: it removes the value at the end of the array and returns it.  An array of strings can be flattened to a single string with the join method.  the argument given to join determines the text that is glued between the array's elements.

Values of the type *object* are arbitrary collections of properties, and we can add or remove these properties as we please. One way to create an object is by using a curly brace notation:

    var myObj = { key1: value1, key2: value2, ... keyN: valueN}

Inside the curly braces, we can give a list of properties separated by commas.  Each property is written as a name, followed by a colon, followed by an expression that provides a value for the property.  Properties whose names are not valid variable names or valid numbers have to be quoted.

This means that curly braces have *two* meanings in JavaScript.  At the start of a statement, they start a block of statements.  In any other position, they describe an object. 

Reading a property that doesn't exist will produce the value `undefined`. 

It is possible to assign a value to a property expression with the `=` operator.  This will replace the property's value if it already existed or create a new property on the object if it didn't.

The `delete` operator is a unary operator that, when applied to a property access expression, will remove the named property from the object.

The binary `in` operator, when applied to a string and an object, returns a Boolean value that indicates whether that object has that property.  The difference between setting a property to `undefined` and actually deleting it is that, in the first case, the object still *has* the property (it just doesn't have a very interesting value), whereas in the second case the property is no longer present and `in` will return `false`.

Arrays, then, are just a kind of object specialized for storing sequences of things.

The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all *immutable* -- it is impossible to change an existing value of those types.  You can combine them and derive new values from them, but when you take a specific string value, that value will always remain the same.  With objects, on the other hand, the content of a value *can* be modified by changinging its properties.

With objects, there is a defference between having two references to the same object and having two different objects that contain the same properties.  Consider the following code:

```javascript
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```

The `object1` and `object2` variables grasp the `same` object, which is why changing `object1` also changes the value of `object2.`  The variable `object3` points to a different object, which initially contains the same properties as `object1` but lives a seperate life.

JavaScript's `==` operator, when comparing objects, will return true only if both objects are precisely the same value.  Comparing different objects will return `false` even if they have identical contents.  There is no "deep" comparison operation build into JavaScript, which looks at object's contents.

Arrays have an `indexOf` method that tries to find a given value in the array and returns the index at which it was found or -1 if it wasn't found.

A *map* is a way to go from values in one domain to corresponding values in another domain.

JavaScript provides a loop construct specifically for going over the properties of an object.  It looks like a normal `for` loop but distinguishes itself by the use of the word `in`.

```javascript
for (var event in map)
  console.log("The correlation for '" + event +
              "' is " + map[event]);
// → The correlation for 'pizza' is 0.069
// → The correlation for 'touched tree' is -0.081```
```

We saw `push` and `pop`, which add and remove elements at the end of an arry, earlier in this chapter.  The corresponding methods for adding and removing things at the start of an array are called `unshift` and `shift`.

The `indexOf` method has a sibling called `lastIndexOf`, which starts searching for the given element at the end of the array instead of the front.  Both `indexOf` and `lastIndexOf` take an optional second argument that indicates where to start searching from.

Another fundamental method is `slice`, which takes a start index and an end index and returns an array that has only the elements between those indices.  The start index is inclusive, the end index exclusive.

```javascript
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```

When the end index is not given, `slice` will take all of the elements after the start index.  Strings also have a `slice` method, which has a similar effect.

The `concat` method can be used to glue arrays together, similar to what the `+` operator does for strings.

Values of type string, number, and Boolean are not objects, and though the language doesn't complain if you try to set new properties on them, it doesn't actually store those properties.  The values are immutable and cannot be changed.

A string's `indexOf` can take a string containing more than one character, whereas the corresponding array method loos only for a single element.

The `trim` method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

Accessing the individual characters in a string can be done with the `charAt` method but also by simply reading numeric properties, like you would for an array.

Whenever a function is called, a special variable named `arguments` is added to the environment in which the function body runs.  This variable refers to an object that holds all of the arguments passed to the function.  Remember that in JavaScript you are allowed to pass more (or fewer) arguments to a function than the number of parameters the function itself declares.

The `arguments` object has a `length` property that tells us the number of arguments that were really passed to the function.  I also has a property for each argument, named 0, 1, 2, and so on.

`Math` is a grab-bag of number-related utility functions, such as `Math.max` (maximum), `Math.min` (minimum), and `Math.sqrt` (square root).

The `Math` object is used simply as a container to group a bunch of related functionality.  There is only one `Math` object, and it is almost never useful as a value.  Rather, it provides a *namespace* so that all these functions and values do not have to be global variables.

`Math.random` is a function that returns a new pseudorandom number between zer(inclusive) and one (exclusive) every time you call it.

`Math.floor` rounds down to the nearest whole number.  `Math.ceil` rounds up to the nearest whole number and `Math.round (to the nearest whole number).

The global scope, the space in which global variables live, can also be approached as an object in JavaScript.  Each global variable is present as a property of this object.  In browsers, the global scope object is stored in the `window` variable.

 