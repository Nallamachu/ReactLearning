function addMe(n){
    console.log('from addMe()');
    return n+100;
}

console.log(addMe(10));
console.log(addMe(10));
console.log(addMe(10));

// Optimizing the above function by using Memoization
// First time the value is cached and second time returns the value from cache
let cache = {};
function memoizationAddMe(n){
    if(n in cache){
        return cache[n];
    } else {
        console.log('from memoizationAddMe()');
        cache[n] = 100 + n;
        return cache[n];
    }
}

console.log(1, memoizationAddMe(20));
console.log(2, memoizationAddMe(20));