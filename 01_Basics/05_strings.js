const name="Prajwal"
const repoCount=50
console.log(name+repoCount+"Value");// Outdated syntax

console.log(`Hello ny name is ${name} and my repo count is ${repoCount}`);
// called as string interpolation


// Differnt way to declare string

const gameName=new String("Tushar");
// console.log(gameName)

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())  
// console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'));

const  newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="   Prajwal   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://prajwal.com/prajwal godase";
console.log(url.replace(" ","-"))
console.log(url.includes("prajwal"))
console.log(url.includes("ddff"))

console.log(gameName.split("-"))