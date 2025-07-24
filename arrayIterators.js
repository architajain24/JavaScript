//Array iterators
// MAP

const yam1 = [2,3,4,5,6];
const yam2 = yam1.map((values) => values*3);
console.log(yam2);


//filter

const numbers = [1,2,3,4,5,6,7,8];
const evens = numbers.filter(num => num % 2 == 0);
console.log(evens);


let A1= [2,4,6,8,10,12];//find()
let sr = A1.find(num => num<10);
console.log(sr);


let A2= [2,3,4,5,6];//some
let sr2 = A2.some(n => n%2 == 0);
console.log(sr2);


let A3 = [1,2,3,4,5,6];//every
let sr3 = A3.every(n1 => n1<5);
console.log(sr3);


let A4 = [2,4,6,8,10];//reduce
let sr4 = A4.reduce((acc, sed) => acc + sed);
console.log(sr4);


//array destructing
    let colors = ['red', 'green', 'blue'];
    let [firstColor, secondColor] = colors; // firstColor is 'red', secondColor is 'green'
    console.log(firstColor);
    console.log(secondColor);
    let index = colors.findIndex(function(Element){return Element == 'blue'});//index
    console.log(index);

//array spreading 
let a = [1,2,3];
let b = [2,3,4];
let copya = [...a];//creating a copy array
console.log(copya); 

let combinearray = [...a,...b];// concatenating an array
console.log(combinearray);

let mixedarray = [10,...a,12,...b];//merging array/adding new elements 
console.log(mixedarray);


function sum(a,b,c){  //passing array elements as arguments in a function
    return a+b+c;
}
const result =sum(...a);
console.log(result);


