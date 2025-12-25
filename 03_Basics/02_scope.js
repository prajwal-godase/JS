// var c=100
let a=300 // Global scope
if(true){
    let a=10 // Block scope
    const b=20 // Block scope
    // var c=30
    console.log("Inner a=",a); 
}

console.log("Outer a=",a); 
// console.log(b); //Scope for block
// console.log(c); 