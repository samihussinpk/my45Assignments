// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let name1 = "sami";
let name2 = "Hussain";
let num1 = 5;
let num2 = 10;
let arr = ["sami","junaid",11,"faizan"]

// • Tests for equality and inequality with strings
console.log("Tests for equality and inequality with string");
console.log(name1 === "sami");
console.log(name1 === name2);

// • Tests using the lower case function
console.log("\nTests for lowercase function");
console.log(name1.toLowerCase() === "sami");
console.log(name2.toLowerCase() === "Hussain");


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nTests for numerics");
console.log(num1 !== num2);
console.log(num1 === num2);
console.log("\n");

console.log(num2 > num1);
console.log(num1 > num2);
console.log("\n");
                                              //num1=5   num2=10
console.log(num2 >= num1);
console.log(num1 >= num2);
console.log("\n");

console.log(num1 <= num2);
console.log(num2 <= num1);
console.log("\n");
                                                                                      
// • Tests using "and" and "or" operator
console.log((num1 < num2) && (num2 > num1));
console.log((num1 ===10) && (num2===5));
console.log("\n");

console.log((num1=== num2) || (num1 < num2));
console.log((num1 === num2) || (num2 === num1));
                              
// • Test whether an item is in a array
console.log("\n Whether item is in the array");
console.log(arr.includes("sami"));
console.log(arr.includes("salman"));

// • Test whether an item is not in a array
console.log("\n Whether item is not in the array");
console.log(!arr.includes(20));
console.log(!arr.includes(11));   

























