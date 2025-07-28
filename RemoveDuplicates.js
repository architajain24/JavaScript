
//Write a function that takes an array and returns a new array with duplicate elements removed.

const arr = [2,2,4,5,6,6,7,8,8];
function removeDuplicates(arr){
    return arr.filter((value, index, self) => {
          return self.indexOf(value) === index;
});
}
let uniquearr = removeDuplicates(arr);
console.log(uniquearr);


