// a program to print factorial

// let n = Number(prompt("Entar a number"));
// let fact;
// for (fact = 1; n > 1; n--) {
//   fact = fact * n;
// }
// document.write(`factorial is ${fact}`);

let n = Number(prompt("Entar a number"));
let fact = 1;
for (;;) {
  if (n <= 1) {
    break;
  }
  fact = fact * n;
  n--;
}
document.write(`factorial is ${fact}`);
