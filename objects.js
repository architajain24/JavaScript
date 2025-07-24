const person = {
    name:"Archita",//Object
    age: 22,
    Company : { //Nested object
        name : "GammaEdge",
        city: "Indore"
    }
};
// console.log(person.name);
// console.log(person['age']);
// console.log(person.Company.city);


// //For..in
// for(const key in person){
//     console.log(`${key} : ${person[key]}`);
// }

//Destructing
//const {name, age} = person;
// const {Company: {name, city}} = person;
// console.log(name);
// console.log(city);

//Spead Operator
const newPerson = {
    ...person, 
    Occupation: "Associate QA Engineer"
};
console.log(newPerson);


//Shallow copy
const original = {a : 1, b: { c : 2}};

const copy1 = {...original};
copy1.b.c = 3;
console.log(original);

//deep copy
const copy2 = JSON.parse(JSON.stringify(original));
copy2.b.c = 4;
console.log(original);