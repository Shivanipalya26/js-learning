const accountId = 73297
let accountEmail = "xyz@google.com"
var accountPassword = "320918"
accountCity = "Jaipur"

// accountId = 1222

accountEmail = "abc@gmail.com"
accountPassword = "2112"
accountCity = "Bengluru"

console.log(accountId);

//prefer not to use var because of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity]);