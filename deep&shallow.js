
let a = {a :2, b:{c:2}};//shallow
// let copya = {...a};
// copya.b.c = 3;
// console.log(a);

let copya = JSON.parse(JSON.stringify(a));//deep
copya.b.c = 4;
console.log(a);
