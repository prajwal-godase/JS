const accountId=123324  // Value is locked- cannot be changed
let accountEmail="praj@gmail.com" // 
var accountPassword="12345"
accountCity="Pune"
let accountState
// accountId=2  // Not allowed

accountEmail="pg@gmail.com"
accountPassword="232343"
accountCity="Bengluru"

console.log(accountId);

/*
Prefer not to use var- 
Because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])