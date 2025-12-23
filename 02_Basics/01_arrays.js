// Arrays

const myArr=[1,2,3,4,5]
const myHeros=["Spiderman","Batman"]
const myArr2=new Array(1,2,3,4)
// console.log(myArr2[1]);

// Array Methods

// myArr.push(6)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)  // Adds value at the starting of the array
// console.log(myArr)

// myArr.shift()  // Removes value from the starting of the array
// console.log(myArr)


// console.log(myArr.includes(8)) // Checks whether the array includes 8
// console.log(myArr.indexOf(4)) // gives the element of index 4 from array


// const newArr= myArr. join() // Gets converted into string
// console.log(myArr);
// console.log(newArr)

// Slice,Splice

console.log("A",myArr);

const myn1=myArr.slice(1,3) // Slice don't manipulate original array 
console.log(myn1)

console.log("B",myArr);

const myn2=myArr.splice(1,3)// Splice manipulates original array

console.log(myn2);
console.log("C",myArr);
