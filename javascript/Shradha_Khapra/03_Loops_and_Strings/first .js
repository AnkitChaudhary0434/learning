// Loops and Strings

// for Loop
// Runs a block a specific number of times.

// for (let i = 0; i < 5; i++) {
//   console.log("Count: " + i);
// }

// while Loop
// Runs as long as a condition is true.

// let i = 0;
// while (i < 5) {
//   console.log("i is: " + i);
//   i++;
// }

// do...while Loop
// Runs at least once, then checks the condition.

// let i = 0;
// do {
//   console.log("Number: " + i);
//   i++;
// } while (i < 5);

// for...of Loop
// Used to loop over arrays or strings.

// let colors = ["red", "green", "blue"];
// for (let color of colors) {
//   console.log(color);
// }

// let name = "Ankit";
// for (let char of name) {
//   console.log(char);
// }

// for...in Loop
// Used to loop over object properties.

// let person = { name: "Ankit", age: 25 };
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }


// String


// String Declaration

// let str1 = "Hello";
// let str2 = 'World';
// let str3 = `Hello, ${str2}!`;  // Template literals

// String Methods

// length – Returns length of string

// let str = "Hello";
// console.log(str.length); // Output: 5

// toUpperCase() – Converts to uppercase

// let str = "hello";
// console.log(str.toUpperCase()); // Output: "HELLO"

// toLowerCase() – Converts to lowercase

// let str = "HELLO";
// console.log(str.toLowerCase()); // Output: "hello"

// includes() – Checks if string contains a substring

// let str = "JavaScript";
// console.log(str.includes("Script")); // Output: true

// indexOf() – Finds index of first match

// let str = "apple";
// console.log(str.indexOf("p")); // Output: 1

// slice(start, end) – Extracts part of a string

// let str = "Hello";
// console.log(str.slice(1, 4)); // Output: "ell"

// replace() – Replaces part of the string

// let str = "hello world";
// console.log(str.replace("world", "JS")); // Output: "hello JS"

// trim() – Removes whitespace from both ends

// let str = "  test  ";
// console.log(str.trim()); // Output: "test"

// split() – Splits string into array

// let str = "a,b,c";
// console.log(str.split(",")); // Output: ["a", "b", "c"]