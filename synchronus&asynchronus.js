// //SYNCHRONUS

// console.log("hello");

// function myfunction(){
//     console.log("Namaste");
// }
// myfunction();

// console.log("India");

// //Asynchronus

// setTimeout(() => {
//   console.log("This message appears after 2 seconds.");
// }, 2000);

// let count = 0;
// const intervalId = setInterval(() => {
//   console.log(`Interval tick: ${count++}`);
//   if (count === 3) {
//     clearInterval(intervalId); // Stop the interval after 3 ticks
//   }
// }, 1000);


//Promises

let mypromise = new Promise((resolve, reject) => {
    console.log("hello");
    
    setTimeout(() => {   /////set timeout
        console.log("Namaste");
    }, 2000);

    console.log("India");

    let success = false;
    if(success){
        resolve("Operation successful");
    }else{
        reject("Operation Failed");
    }
});