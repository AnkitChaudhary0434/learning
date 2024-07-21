// printing prime no til n

let n = Number(prompt("Enter a no"));
let i, j;
document.write(`prime no list upto ${n} <br>`);
for (i = 2; i <= n; i++) {
  for (j = 2; j <= i - 1; j++) {
    if (i % j === 0) {
      break;
    }
  }
  if (i === j) {
    document.write(`${i} <br>`);
  }
}
