//write a function for returning factorial of a number

function factorialNum(n){
    result = 1;
    for(i = 1; i<=n; i++){
        result *= i;
    }
    return result;
}

console.log(factorialNum(5));


//reverse a string

// let str = "Allow";
// let reverseStrr = str.split("").reverse().join("");
// console.log(reverseStrr);