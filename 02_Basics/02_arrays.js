const heros=["Thor","Ironman","Spiderman"]
const heros2=["Superman","Batman","Flash"]

// heros.push(heros2) //push: Array gets added in other array
// console.log(heros)

// console.log(heros[3][1]) // To access Batman

// const allHeros=heros.concat(heros2);
// // Concat:Array gets concatinated in other array but is not saved
// console.log(allHeros)
// console.log(heros)

const all_Heros=[...heros,...heros2] // Spread method
// console.log(all_Heros)


const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_anotherArr=anotherArr.flat(1);
console.log(usable_anotherArr)
const usable_anotherArr2=anotherArr.flat(2);
console.log(usable_anotherArr2)


console.log(Array.isArray("Prajwal")) // isArray: checks if it is array
console.log(Array.from("Prajwal")) // From: converts into array

console.log(Array.isArray({name:"Prajwal"}))
 // It gets confused that what array should i make keys or values 
 // and gives false or empty array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

