//sum and avrage

// let count=0;
// let sum=0;

// do{
//     var n = Number(prompt("Enter a number"));
//     sum = sum + n;
//     count++;
// }while(n!=0);
// document.write(`sum of all number is ${sum}<br>`);
// document.write(`avg of all number is ${sum / (count-1)}`);

// factoreal

let n = Number(prompt("Enter a number"));
let fact = 1;
if (n > 0) {
  do {
    fact = fact * n;
    n--;
  } while (n > 1);
}
document.write(`Factorial is ${fact}`);
