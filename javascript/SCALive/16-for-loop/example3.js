// a program to prin sum of evan or odd

let n = Number(prompt("Enter a number"));
let soe = 0;
let sod = 0;
for (let i = 1; i <= n; i++) {
  i % 2 === 0 ? (soe = soe + i) : (sod = sod + i);
}
document.write(`sum of EVEN numbers from 1 to ${n} is ${soe}<br>`);
document.write(`sum of OOD numbers from 1 to ${n} is ${sod}<br>`);

// let n = Number(prompt("Enter a number"));
// let soe = 0;
// let sod = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     soe = soe = i;
//   } else {
//     sod = sod + i;
//   }
// }
// document.write(`sum of EVEN numbers from 1 to ${n} is ${soe}<br>`);
// document.write(`sum of OOD numbers from 1 to ${n} is ${sod}<br>`);
