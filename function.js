
//Write a function named greet that takes a name as an argument and logs a greeting message like "Hello, [name]!" to the console.

function greet(name='Abc'){
    return name;
}
// greetUser(John);
const g1 = greet("Archita Jain");
console.log("Hello!! ",g1);


//Modify the greet function to include a default parameter for name, so it greets "Guest" if no name is provided.

function greet(name='Abc'){
    return name;
}
console.log(greet());


// Rewrite the add function as a function expression and assign it to a variable.

function add(a,b){
    function sum(){
        return a+b;
    }
    return sum;
}
const all = add(2,4);
console.log(all());

//Rewrite the add function using arrow function syntax.

const add = (a,b) => {
    const sum = () => a+b;
    return sum;
}

const all2 = add(2,4);
console.log(all2());



