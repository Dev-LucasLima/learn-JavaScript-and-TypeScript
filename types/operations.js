/*
You not convert character String in number. 
-> Result: NaN 
*/

let characterString = "Lucas";
console.log("multiplication", characterString * 2);

/*

If String is a valid number, the javacript accept and convert String in a number to operate.
-> Result: 4

Exception: If String is empty or is 0, can convert with many situations.
-> Be careful with String variables; always check the value or content of the variable.
*/
let numberString = "2";
console.log("mulplication 2:", numberString * 2); // multiplication is successs

// Implicit conversion
console.log("5" + 1); // 51 (string) -> operator '+' is using to concatenate Strings too
console.log("5" - 1); // 4 (number)
console.log("5" * 2); // 10 (number)
console.log("5" / 2); // 2.5 (number)

// Explicit conversion
console.log(Number("5") + 1); // 6 (number)
console.log(String(5) + 1); // 51 (string)
console.log("5".toString() + 1); // 51 (string)

let myNumber = 2;
console.log(typeof numberString, numberString); // string
console.log(typeof myNumber, myNumber); // number

/*
Other operations
== or != -> compare value

=== or !== -> compare value and type

(condition) ? condition is true : condition is false; -> ternary comparion

*/
console.log("1" == 1); // true
console.log("1" != 1); // false

console.log("1" === 1); // false
console.log("1" !== 1); // true
