var f1 = function() {
    x = 3;
    f2();
}

var f2 = function() {
    console.log("The value of x is %d", x);
}

f1();
