
// console.log("Alphabates OR Number and Alphabates together:")
// let score="33abc"
// let valueInNumber= Number(score)
// console.log(valueInNumber) // NaN= Not a number
// console.log(typeof valueInNumber)

// console.log("For null:")
// let score1=null
// let valueInNumber1= Number(score1)
// console.log(valueInNumber1) // Gives 0
// console.log(typeof valueInNumber1)

// console.log("For undefined:")
// let score2=undefined
// let valueInNumber2= Number(score1)
// console.log(valueInNumber2) // Gives 0
// console.log(typeof valueInNumber2)

// // Converting to number:
// // "33"=> 33
// // "33abc"=> NaN(Not a Number)-> But NaN's type is number
// // "true"=1; "false"=>0



// console.log("For number")
// let isLoggedIn=1
// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// console.log(typeof booleanIsLoggedIn)

// let isLoggedIn1=0
// let booleanIsLoggedIn1=Boolean(isLoggedIn1)
// console.log(booleanIsLoggedIn1)
// console.log(typeof booleanIsLoggedIn1)

// console.log("For string")
// let isLoggedIn2="Prajwal"
// let booleanIsLoggedIn2=Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn2)
// console.log(typeof booleanIsLoggedIn2)

// let isLoggedIn3=""
// let booleanIsLoggedIn3=Boolean(isLoggedIn3)
// console.log(booleanIsLoggedIn3)
// console.log(typeof booleanIsLoggedIn3)

// // Converting to boolean:
// // 1=>true; 0=>false
// // "aaaa"=>true
// // ""=>false

// let someNumber=33
// let stringSomeNumber=String(someNumber)
// console.log(stringSomeNumber)
// console.log(typeof stringSomeNumber)

/*************Operations******************/
// let value =3
// let negValue=-value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(3**2)
// console.log(2%2)

// let str1="Prajwal"
// let str2=" Godase"
// let str3=str1+str2
// console.log(str3);

// console.log(1+"2");
// console.log("1"+2);

// //Numbers before the string are treated as numbers 
// //And the numbers after the string are treated as the strings
// console.log("1"+2+2); 
// console.log(1+2+"2");
// console.log(1+1+"2"+2);

// console.log(true); // gives output true
// console.log(+true); // (Converting boolean to number) gives output 1
// //console.log(true+); // Not allowed

// console.log(""); // gives empty space as output
// console.log(+""); // (Converting boolean to number) gives output 0

// let num1,num2,num3
// num1=num2=num3=num=2+2 // Not recommended

// let gameCounter=100
// gameCounter++; // Increment operator
// console.log(gameCounter)

// Prefix increment (++a)
let a=100
let b=(++a)+50 // First increment and then addition
console.log(a) // output=101
console.log(b) // output=151 (i.e. 101+50)

// Postfix increment (a++)
let c=100
let d=(c++)+50 // First Addition and then increment
console.log(c) // output=101
console.log(d) // output=150 (i.e. 100+50)