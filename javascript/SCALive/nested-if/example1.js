// nasted if

let a = Number(prompt("enter first number."));
let b = Number(prompt("enter second number."));
let c = Number(prompt("enter third number."));

if (a > b) {
  if (a > c) {
    document.write(`${a} is the largest number`);
  } else {
    document.write(`${c} is the largest number`);
  }
} else {
  if (b > c) {
    document.write(`${b} is the largest number`);
  } else {
    document.write(`${c} is the largest number`);
  }
}
