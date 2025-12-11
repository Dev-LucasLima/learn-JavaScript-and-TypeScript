/*
In addition to the standard IF ELSE statement found in all programming languages, we have the SWITCH statement, which compares exact values.
*/

let age = 16;

switch (age) {
    case 16:
        console.log("age is 16");
        break;

    case 17:
        console.log("age is 17");
        break;

    case 18:
        console.log("age is 18");
        break;

    default:
        console.log("age is not 16, 17 or 18");
        break;
}
