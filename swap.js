var a = 5;
var b = 9;
var temp = a;
a = b;
b = temp;

console.log("Before a:",a, "b:", b);

var x = 7;
var y = 5;
x = x + y;
y = x - y;
x = x - y;

console.log("After Swap x:", x,"y:",y);



var p = 10;
var q = 15;
[p, q] = [q, p];

console.log("After Swap p =", p, "q =", q);