// console.log(2>1);
// console.log(2<1);
// console.log(2>=3);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);


// // The JS dont give the predictable answers
// // Always check datatypes(should be same) before comparing
// // JS automatically converts strings into numbers
// // But TypeScript doesnt allow to compare different datatypes
// console.log("2">1);
// console.log("02"<1);

/********** Avoide this type of comparisons ****************/
// console.log(null>0); //Output=false
// console.log(null==0); //Output=false
// console.log(null>=0); //Output=true

/* Because,
The equality check i.e. == works differently
and  the comparison operators i.e. <,>.<=,>= work differently
-> The comparison operators convert the null into number i.e. 0
whereas in equality check it treats null as same(null) 
*/


// console.log(undefined>0);//Output=false
// console.log(undefined<0);//Output=false
// console.log(undefined==0);//Output=false
// console.log(undefined>=0);//Output=false
// console.log(undefined<=0);//Output=false
// // Gives all False for undefined

// Strict check(===)
console.log("2"==2); // Simple(dont check datatype) check gives true
console.log("2"===2); // Strict (checks datatype) check gives false

