// prime no

// let n = Number(prompt("enter a number"));
// let flag = true;

// for (let i = 2; i <= n - 1; i++) {
//   if (n % i === 0) {
//     flag = false;
//     break;
//   }
// }

// if (flag === true) {
//   document.write(`${n} is a prime no`);
// } else {
//   document.write(`${n} is not a prime no`);
// }

let n = Number(prompt("enter a number"));
let i;

for (i = 2; i <= n - 1; i++) {
  if (n % i === 0) {
    flag = false;
    break;
  }
}

if (i === n) {
  document.write(`${n} is a prime no`);
} else {
  document.write(`${n} is not a prime no`);
}
