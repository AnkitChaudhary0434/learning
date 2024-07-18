//sum of first and last digites

// let n = Number(prompt("Enter a number"));
// let sum = 0,
//   rem;
// rem = n % 10;
// n = Math.floor(n / 10);
// while (n > 9) {
//   n = Math.floor(n / 10);
// }
// document.write(`um of the digites is ${rem + n}`);

// let n = Number(prompt("Enter a number"));
// let sum = 0,
//   rem;
// rem = n % 10;
// // n = Math.floor(n / 10);
// while (n > 9) {
//   n = Math.floor(n / 10);
// }
// document.write(`um of the digites is ${rem + n}`);

let n = Number(prompt("Enter a number"));
let sum = 0,
  rem;
rem = n % 10;
do{
    n = Math.floor(n / 10);
}while (n > 9);
document.write(`um of the digites is ${rem + n}`);
