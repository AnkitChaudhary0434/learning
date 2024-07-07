// code to jernrate pass or fail

// let marks = Number(prompt("Enter your marks"));
// let result = marks >= 35 ? "Pass" : "Fail";
// document.write(`your marks are ${marks}</br> and your result is ${result}`);

// code to find even or odd by using ternary operator

// let num = Number(prompt("Enter a number"));
// let result = num % 2 === 0 ?'Even' :'Odd';
// document.write(`The number is ${num} <br> It is ${result}`)

// grater among 2 numbers

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let result =
  num1 >= num2
    ? num1 > num2
      ? `${num1} is greater`
      : `both are equal`
    : `${num2} is greater`;
    document.write(result);
