const ar = [1,2,4,5,6,7,7];
const el = ar.find(el => el === 7);
console.log(el); //The reason it will return only one 7 even there are matching records is,
// it will stop traversing further as on when matching record found

const el_new = ar.find(el => el > 5);
console.log(el_new);

const peopleArray = [{id:1},{id:2},{id:3},{id:5},{id:7}];
const people = peopleArray.find(people => people.id === 3);
console.log(people);

const people_new = peopleArray.find(people => people.id > 3);
console.log(people_new);