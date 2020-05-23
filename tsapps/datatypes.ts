// the DataType is power of TypeScript

// implicit type declaration
let n1 = 100; // n1 will be implicitly set to datatype as number because of initial value

// explicit typedeclaration
let n2: number =100;

let str1: string;
let str2 = "ddd";

// union types --> declaring a variable with more than one datatypes
let myval: string|number; // myval will be either string or number
myval = "Mahesh"; // valid
myval = 113233; // valid
myval = true; // invalid

// the 'any' datatype --> runtime type definition for a variable
// any variable declared w/o datatype will be default to 'any' datatype
 
let anyVal: any;
anyVal = "ddd";
console.log(anyVal + typeof(anyVal)); // typeof() is operator to read type of variable
anyVal = 2333;
console.log(anyVal + typeof(anyVal));
anyVal = true;
console.log(anyVal + typeof(anyVal));

