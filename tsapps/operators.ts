// +, -, *, /, +=, -=, *=, /=, >, <, >=, <=

let a=1;
let b="1";
console.log(a==b); // the value equality will just focus on value i.e. 1 
console.log(a===b); // the value+type equality aka deep equiality (recommended)

// assignment statement
let x = 100;
let y = x;
console.log('Original Valuesx = ' + x + '   ' + "y =  " + y);
y = 200;
console.log('After updating y  the value of x = ' + x + '   ' + "y =  " + y);


