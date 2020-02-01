const fetch = require("node-fetch");
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const currentUser = users[0];
        console.log(currentUser);
        return fetch(
            'https://jsonplaceholder.typicode.com/posts?userId='+currentUser.id
        );
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.error(error));


//Asynchronous Code
const myAsyncFunction = async() => {
    try{
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await userResponse.json()
        const anotherUser = users[1];
        console.log(anotherUser);
    
        const postResponse = await fetch(
            'https://jsonplaceholder.typicode.com/posts?userId='+anotherUser.id
        );
        const posts = await postResponse.json();
        console.log(posts);
    } catch (error){
        console.error(error);
    }
}

console.log(myAsyncFunction());