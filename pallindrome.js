//Write a function to check if a string is a pallindrome.
// const prompt = require('prompt');

// let str = prompt("Enter a string: ").toLowerCase();
let str = "121";
let reversedStr = "";

for(let i = str.length-1; i>=0; i--){
    reversedStr += str[i];
}

if(str === reversedStr){
    console.log(`${str} is a Pallindrome`);
}else{
    console.log(`${str} is not a Pallindrome`);
}

// prompt(message?: string, _default?: string): string | null