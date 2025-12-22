// //  Javascript is Dynamically Typed language i.e. no need to define the datatype


// // # Primitive Datatypes-(Call by value)
// // 7 types-> String, Number, Boolean, null, undefined, Symbol, BigInt

// // # Reference Type-(Call by reference)
// // 3 Types-> Array, Objects, Functions

// const id=Symbol("123")
// const anotherid=Symbol("123")
// console.log(id==anotherid)

// const bigNumber=8393940857483930n

// // Array
// const heros=["spiderman","hulk","superman"];

// // Object
// let myObj={
//     name:"Prajwal",
//     age: 20
// }
// console.log(typeof myObj)

// // Function

// const myFunction=function(){
//     console.log("Hello World")
// }
// myFunction();
// console.log(typeof myFunction)

// console.log(typeof bigNumber)


// const temp=null
// console.log(typeof temp)
// // When we check the datatype of null by typeof function we get it as object

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(all primitives) and Heap(non-primitive)
let myName="Prajwal"
let anotherName=myName //Gets copy of value
anotherName="Tushar"
console.log(myName)
console.log(anotherName)
 

let user1={
    email:"prajwal@gmail.com",
    upi:"user1@ybl"
}
let user2=user1; // Gets reference
user2.email="uuuu@ybl";
console.log(user1);
console.log(user2);