const accountID = 123456;
let email = "he@gmail.com";
var passsword = "root123";
city = "New York";

// const accountID = 675666; // not allowed
email = "we@google.com"; // allowed
passsword = "root456"; // allowed
city = "Los Angeles"; // allowed
/*
Prefer to use let over var
because var has global scope and can create issues  
*/
console.log(accountID);

console.table([accountID, email, passsword, city]);