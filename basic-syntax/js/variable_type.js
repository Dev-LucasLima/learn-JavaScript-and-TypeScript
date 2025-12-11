/* 
    let -> can change values, but is visible only in local scope 
*/
let value = "";
console.log("value variable: ", value);

value = 1;
console.log("value variable: ", value);

/*
    const -> constant -> is imutable value and type
    Exemple: PI number;
*/
const PI = 3.1415;
console.log("PI variable: ", PI);

/*
    var -> can change values and your visibility is global 
*/

for (let i = 0; i < 8; i++) {
    var myValue = i;
    console.log("myValue variable: ", myValue);
}

console.log("final value of myValue variable: ", myValue);
