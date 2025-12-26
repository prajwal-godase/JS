// var c=100
let a=300 // Global scope
if(true){
    let a=10 // Block scope
    const b=20 // Block scope
    // var c=30
    // console.log("Inner a=",a); 
}

// console.log("Outer a=",a); 
// console.log(b); //Scope for block
// console.log(c); 


// // Nested Scope

// function one(){
//     const username="Prajwal"
//     function two(){
//         const website="Youtube"
//         console.log(username);
//     }
//     // console.log(website); // Out of scope
//     two()
// }
// one()


//++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){ // First method
return num+1
}

// addtwo(5) // not allowed in this type of function declaration (Mini Hoisting)
const addtwo=function(num){ // Second method
return num+2
}
