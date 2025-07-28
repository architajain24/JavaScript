
//Explain the difference between global and local scope in JavaScript functions.
//  Provide an example demonstrating variable access within different scopes.
function exampleBlock(){
    let functionBlock = 5;
    if(true){
        let scopeBlocked = 6;
        console.log(functionBlock);
        console.log(scopeBlocked);
    }
    console.log(functionBlock);
    // console.log(scopeBlocked);
}
exampleBlock();

