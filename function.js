//closures 

function createCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
let counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
for(count = 0; count < 9; count++){
    console.log(counter());
}