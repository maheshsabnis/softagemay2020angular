// the 'let' is the block scope definition keyword for the variable declaration in ES 6
// this is a replace / an alternative for 'var' keyword in JavaScript
// the variable declared using 'var' keyword is the function scope
function myFunc(x) {
    if (x) {
        // var y = 10;
        var y = 10;
        console.log('in condition y = ' + y);
    }
    console.log('out of condition y = ' + y);
}
console.log('\n\n------ begin with true:  ------');
myFunc(true);
console.log('------ end with:  ------\n\n');
console.log();
console.log('\n\n------ begin with false:  ------');
myFunc(false);
console.log('------ end false:  ------\n\n');
for (var i = 0; i < 5; i++) {
    console.log('Inside loop i =' + i);
}
console.log();
console.log('Outside loop i =' + i);
i++;
console.log('Outside loop with increament i =' + i);
