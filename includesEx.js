//includes() example program
const newArray = [1,2,3,4,5,6];
const condition = 6;
console.log(newArray.includes(condition));

const objArray = [{'id':1},{'id':2},{'id':3}];
console.log(objArray);
console.log(objArray.includes({'id':1}));

const obj1 = {'id':1};
const obj2 = {'id':1};
console.log(obj1 === obj2);         // return as false because of two different object references

const obj3 = obj2;
console.log(obj2 === obj3);         // return true because of pointing to same object reference

const objArray1 = [obj1, obj2, obj3];
console.log(objArray1.includes(obj3));   // returns true