

// try{
//     console.log("Hello");
// }catch(error){
//     console.log("Eresolved : ",error.message);
// }finally{
//     console.log("I'll print anyways!!!");
// }

function cloth(a,b){
    try{
    let result = 10/0;{
        throw new Error("Infinite Value");
        
    }
}catch(error){
        console.error("Error Resolved : ", error.message);
}finally{
    console.log("I'll print anyways!!!");
}
};

c1 = cloth();
console.log(c1);

