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

% is the remainder operator

There are three special values that are considered numbers:
    
    1. Infinity
    2. -Infinity
    3. NaN (not a number)

+ is the concatenate operator when applied to strings.

The typeof operator produces a string value naming the type of value.

JavaScript has a Boolean type with the values:
   
    1. true
    2. false

There is only one value in JavaScript that is not equal to itself, NaN.

JavaScript supports three logical operators:
    
    1. and (&&)
    2. or (||)
    3. not (!)

Conditional (ternary) Operator ?:

Undefined Values:
    1. null
    2. undefined

The === and !=== operators compare type and value whereas == and != use type coercion.

The &&, || and ?: operators are short-circuited.


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

Almost all JavaScript values have properties.  The exceptions are null and undefined.  The two most common ways to access properties in JavaScript are with a dot and with square brackets.  Both value.x and value[x] access a property on value -- but not necessarily the same property.  The difference is in how x is interpreted.  When using a dot, the part after the dot must be a valid variable name, and it directly names the property.  When using square brackets, the expression between the brackets is evaluated to get the property name.  Property names can be any string.

The elements in an array are stored in properties.  Because the names of these properties are numbers, we have to use the bracket syntax to access them.

Properties that contain functions are generally called methods of the value they belong to.

The push method can be used to add values to the end of an array.  The pop method does the opposite: it removes the value at the end of the array and returns it.  An array of strings can be flattened to a single string with the join method.  the argument given to join determines the text that is glued between the array's elements.

One way to create an object is by using a curly brace notation:

    var myObj = { key1: value1, key2: value2, ... keyN: valueN}


