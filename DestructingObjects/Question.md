Object destructuring and default values

const obj =  { two : 2 }

var { one, two } = obj

console.log(one) // outputs undefined

Use es6 object destructuring to add a default value of 1 to the one variable.
Ignore the .toString() function (used for validation)