let myname = "Archita";//length
console.log(myname.length);

const first = "Hello world";//include
console.log(first.includes("world"));

const second = "Hello world";
console.log(second.startsWith("Hello"));

const third = "Hello world"
console.log(third.endsWith("world"));


const fourth = "  This is my office!!   ";
const words = fourth.split(" ");
console.log(words);

const a1 = words.join(" ");
console.log(a1);

const a2 = fourth.trim();
console.log(a2);

const newa2 = a2.replace("office", "home");
console.log(newa2);
