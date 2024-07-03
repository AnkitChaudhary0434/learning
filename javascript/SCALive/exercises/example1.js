// check weather the given number is even or odd

let n = Number(prompt("Enter a no:"));
if (isNaN(n)) {
  document.write("Enter a valid number");
} else if (n % 2 === 0) {
  document.write(`${n} is an EVEN number`);
} else {
  document.write(`${n} is an ODD number`);
}
