// the Object literal aka JSON object
let obj = {x:10};
console.log('Original obj.x is = ' + obj.x);
// assigning obj to myobj, means both obj and myobj will refer same object
let myobj = obj; 
console.log('Original obj.x is = ' + obj.x + '  Value of myobj.x = ' + myobj.x);
myobj.x = 300;
console.log('After updating myobj.x the value obj.x is = ' + obj.x + 
  '  Value of myobj.x = ' + myobj.x);

// to assign one object to other object use Object.assign() method
// let newObj = Object.assign(target,source)
// target is the blank object in which the data of the source will be deeply copied
// and the newObj will now contain or poin to the target object with data in it

let o1={x:20};
console.log('Original o1.x is = ' + o1.x);
let o2= Object.assign({},o1);
console.log('Original o1.x is = ' + o1.x + '  Value of o2.x = ' + o2.x);
o2.x = 400;
console.log('After updating o2.x the value o1.x is = ' + o1.x + 
  '  Value of o2.x = ' + o2.x);
