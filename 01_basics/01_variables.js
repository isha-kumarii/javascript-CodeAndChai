const accountId = 144553
let accountEmail = "singhisha@gmail.com"
var accountPassword = "12345"
accountCity = "Bihar"
let accountState;
//accountId = 2     //Not allowed

accountEmail = "isha@gmail.com"
accountPassword = "1098"
accountCity = "Kolkata"

console.log(accountId);

/*
Prefer not to use Var 
Becasue of issue in block scope and function scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity, accountState])