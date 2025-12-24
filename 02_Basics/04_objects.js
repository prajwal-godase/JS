//Declaring objects using constructors

// const tinderUser=new Object()// This is non-singleton object
const tinderUser={} // This is singleton object
tinderUser.id="123abc"
tinderUser.name="Prajwal"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"sda@gmalil.com",
    fullname:{
        userfullname:{
            firstname:"Prajwal",
            lastname:"Godase"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3={obj1,obj2} // object inside object
// console.log(obj3)

const obj4=Object.assign({},obj1,obj2)// To join the two objects 
// It stores obj1 and obj2 in the seperate object i.e. in {}
// Target--> {}
// Sources--> obj1, obj2 

// console.log(obj4)

const obj5={...obj1,...obj2} // Spread Operator(same as arrays)
// console.log(obj5)


const users=[
    {
        id:1,
        email:"praj@gmail.com"
    },
    {
        id:2,
        email:"praj@gmail.com"
    }
]

// // When we access the data from the database
// console.log(users[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // output is given as array
// console.log(Object.values(tinderUser)) // output is given as array
// console.log(Object.entries(tinderUser)) // output is given as array

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// Destructuring

const course={
    name:"Javascript",
    price:"999",
    instructor:"Hitesh"
}

// course.instructor //normal way to access

const {instructor:instr}=course // For accessing multiple times
console.log(instr) // Just  print this because of the above line


// for react-
// const navbar=({company})=>{
// }
// navbar(compay="prajwal")

//JSON format
// {
//     name:"Prajwal",
//     courseName:"JS",
//     price:"Free"
// }