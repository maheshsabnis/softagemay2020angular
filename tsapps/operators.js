// +, -, *, /, +=, -=, *=, /=, >, <, >=, <=
var a = 1;
var b = "1";
console.log(a == b); // the value equality will just focus on value i.e. 1 
console.log(a === b); // the value+type equality aka deep equiality (recommended)
// assignment statement
var x = 100;
var y = x;
console.log('Original Values x = ' + x + '   ' + "y =  " + y);
y = 200;
console.log('After updating y  the value of x = ' + x + '   ' + "y =  " + y);
