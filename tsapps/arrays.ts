// implicit array declaration
let myarr = [];
myarr.push(1);myarr.push(2); myarr.push('A'); myarr.push('B'); myarr.push(true);
// explicit array declaration using Array<T>, the generic array class (ES6)
// T can be any type of datatype e.g. string, number, boolen, object, date, etc.
let names:Array<string> = new Array<string>();
names.push('James Bond');names.push('Indiana Jones');names.push('Ethan Hunt');
names.push('Jason Bourn'); names.push('Iron Man');names.push('Captain America');
names.push('Thor'); names.push('Hulk');
// iterate using for..loop, for..in loop, in ES 6 for..of loop i.e. itarator
// for(let i=0; i<names.length;i++){
//     console.log(names[i]);
// }
// for(let i in names){
//     console.log(names[i]);
// }
for(let n of names) {
    console.log(n);
}

console.log();
// using Array methods
// forEach() method to iterate over array
names.forEach(printData); // <--- pass the printData as callback function

function printData(n: string,i: number): void {
    console.log(`Name at ${i}th index = ${n}`);
}
console.log();
// using the direct function implementation as a  parameter to other function
names.forEach(function(n: string,i: number) {
    console.log(`Name at ${i}th index = ${n}`);
});
// using a new syntax of passing the Arraow operator to a function taht accepts
// callback function as input parameter (ES 6)
console.log();

names.forEach((n: string,i: number) => {
    console.log(`Name at ${i}th index = ${n}`);
});


























