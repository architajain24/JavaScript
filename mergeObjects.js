//Merge two objects 

let a = {
    fname : "Archita",
    lname : "Jain"
};
let b = {
    age : 22
};

let combo = {...a, ...b};
console.log(combo);