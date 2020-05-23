var myname;
myname = 'Mahesh';
console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.charAt(2));
console.log(myname.substr(2, 2));
console.log(myname.concat('Rameshrao Sabnis'));
console.log(myname.indexOf('h'));
var res = myname.slice(1, 2);
// ES 6 Concatination of string using 'Template String'
var fname = 'Mahesh';
var mname = 'Rameshrao';
var lname = 'Sabnis';
// JavaScript standard concatination using + operator
console.log(fname + ' ' + mname +
    ' ' + lname);
// ES 6 Template String
console.log(fname + " " + mname + " \n    " + lname);
