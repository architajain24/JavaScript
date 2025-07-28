
// To convert the given array of strings into the desired camelCase format, where the first word remains lowercase and subsequent words start with an uppercase letter, you can use the map() method along with string manipulation techniques. 


const arr = ["archita jain", "aditi jain", "anupama dubey"];

const convertToCamelCase = (name) => {
    return name.split(' ').map((word, index) => {
        if (index === 0) {
            return word; // First word remains lowercase
        }
        // Capitalize the first letter of subsequent words and concatenate with the rest of the word
        return word.charAt(0).toUpperCase() + word.slice(1); 
    }).join(''); // Join the words back together without spaces.
};

const output = arr.map(convertToCamelCase);

console.log(output); // Output: ["architaJain", "aditiJain", "anupamaDubey"]




//Write a function that takes a string and returns a new string with the first 
// letter of each word capitalized.

const str = ["archita"];
function firstElementCapitallize(){
      const targetString = str[0]; 
    const newstr = targetString.charAt(0).toUpperCase()+targetString.slice(1);
    return newstr;
}
const capitallizedChar = firstElementCapitallize();
console.log(capitallizedChar);




// const arr =["archita jain", "aditi jain", "anupama dubey"]; // newarr = ["archita", "jain", ....]
// // const newarr = arr.flatMap((values) => values.split(" "));
// // console.log(newarr);
// let arr1 = []
// for(i =0; i<arr.length; i++){
//     const newarr = arr[i].split(" ");
//     arr1.push(...newarr);
// }
// console.log(arr1);


