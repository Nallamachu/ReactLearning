const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const curriedMultiplyBy10 = curriedMultiply(10);

console.log(multiply(10,5));
console.log(curriedMultiply(1)(10));
console.log(curriedMultiplyBy10(10));
console.log(curriedMultiplyBy10(20));
console.log(curriedMultiplyBy10(30));