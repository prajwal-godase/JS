// Singleton-> when created by constructors


//Object Literals

const mySym=Symbol("key1")// Symbol

const user1={
    name:"Prajwal",
    [mySym]:"myKey1",//Symbol
    "Full Name":"Prajwal Godase",
    age:20,
    location:"Pune",
    email:"praj@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(user1.name)
// console.log(user1["email"])
// console.log(user1["Full Name"])
// console.log(user1[mySym]) //Symbol

user1.name="Tushar"
// console.log(user1["name"])

Object.freeze="praj@gmail.com" // Freeze doesnt allow to make changes


user1.greeting=function(){
    console.log("Hello User")
}

console.log(user1.greeting)
console.log(user1.greeting())
user1.greeting()

user1.greeting2=function(){
    console.log(`Hello User,${this.name}`);
}
console.log(user1.greeting2());