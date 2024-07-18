//sum of digites

let n = Number(prompt("Enter a number"));
let sum = 0,
  rem;
while (n > 0) {
  rem = n % 10;
  sum = sum + rem;
  n = Math.floor(n / 10);
}
document.write(`sum or tha digite is ${sum}`);
