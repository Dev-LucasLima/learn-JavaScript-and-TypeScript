let name = "fernanda"; // String variable
let age = 25; // Number variable
let isStudent = true; // Boolean variable

/*
Null variable
Warning: Null is an intentional absence of any object value
-> throw Error (Exceptions in  Java)
*/
let numberToSum = null;
if (numberToSum != null) {
  console.log("Sum numbers:", age + numberToSum);
}

/*
Undefined variable
Warning: Undefined can generate bugs in the code -> NaN (Not a Number) value
*/
let phone;
phone
  ? console.log("Phone number is:", phone)
  : console.log("Phone not exists");

/*
    Null and UNDEFINED -> Are false in booleans context
*/
