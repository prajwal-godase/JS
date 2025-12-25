function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("W");
    console.log("A");
    console.log("L");
}
// sayMyName();

// function addition(number1,number2){ // Here are parameters
//     console.log(number1+number2)
// }
// const result=addition(2,5) // Here are arguments
// console.log("Result:",result)

function addition(number1,number2){ // Here are parameters
    // let result=(number1+number2)
    // return result
    return number1+number2
}
// const result=addition(2,5) // Here are arguments
// console.log("Result:",result)

function loginUserMessage(username="Sam"){ // Sam as default value
    if(!username){
        console.log("Please Enter the username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Prajwal")) // If you dont give the argument then it takes the undefined



function calculateCartPrice(val1,val2, ...num1){// val1 for first, val2 for second and other is in the num1 array
    // Rest(...) operator (same as the spread) is used to take n number of parameters 
    // and makes an array of them
    return num1
}
// console.log(calculateCartPrice(200,400,500))

const user={
    username:"Prajwal",
    price:199
}

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// handleObject({
//     username:"Sam",
//     price:399
// })

const myNewArr=[200,400,100,600]

function returnSecondValue(getArr){
    return getArr[1]
}
console.log(returnSecondValue(myNewArr))