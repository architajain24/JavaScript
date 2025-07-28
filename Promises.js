//Exmple 1
const mypromise = new Promise((resolve,reject) => { //Promise
    setTimeout(() => {
        const success = true;
        if(success){
            resolve("Operation Solved");
        }else{
            reject(new Error("Operation Failed!"));
        }
    },3000);
});

function handledA(data) {
    console.log("Promise Solved with:", data); 
}  
mypromise
  .then(handledA)
  .catch((error) => console.log("Error:", error))
  .finally(() => console.log("I'll execute anyways!!"));
  




//Example 2  
  let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) 
    .catch((error) => console.error(error)); 

