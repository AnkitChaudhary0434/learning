const accountId = 112233;
let accountEmail = "bobby@gmail.com";
var accountPassword = "123456";
accountCity = "mathura";
let accountState;

// accountId= 2 //not allowed

accountEmail = "lodalesson.com";
accountPassword = "1234567";
accountCity = "delhi";

console.log(accountId);

/*
. Prefer not to use var keyword, because of issue in block scope and functional scope
. use let instead.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
