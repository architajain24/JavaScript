
function all(a,b,callback){
    return callback(a,b);
}
function add(a,b){
    return a+b;
}
function div(a,b){
    return a/b;
}
console.log(typeof(all(5,4,div)));