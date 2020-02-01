const ar = [1,2,3,4,5];
const value = ar.reduce(
    (accumulator,currentElement) => accumulator + currentElement,0
);
console.log(value);