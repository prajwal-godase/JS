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
const result=addition(2,5) // Here are arguments
// console.log("Result:",result)

function loginUserMessage(username="Sam"){ // Sam as default value
    if(!username){
        console.log("Please Enter the username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Prajwal")) // If you dont give the argument then it takes the undefined

