const myArray = [1,3,5,7,9];
const condition = 6;
const myPromise = new Promise((resolve,reject) => {
    //filter is used to check the number is > given number
    if(myArray.filter(e => e > condition).length > 0){
        setTimeout(() => {
            resolve('My work is completed successfully')
        },1000)
    } else {
        reject('My work is failed to complete');
    }
});

myPromise.then(value => console.log(value))
.catch(rejectValue => console.log(rejectValue));