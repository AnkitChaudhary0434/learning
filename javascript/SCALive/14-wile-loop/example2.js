// table 

// let n=Number(prompt("Enter a number"));
// let i = 1;
// document.write(`<h2>Table of ${n}</h2>`);
// document.write("<table border='2'>");
// while (i<=10){
//     document.write(` <tr> <td> ${n} * ${i} = ${n*i} </td> </tr>`);
//     i++;
// }
// document.write("</table>");

//a code to calculate factorial

let n=Number(prompt("Enter a number"));
let fact=1;
while(n>1){
    fact = fact*n;
    n--;
}
document.write(`Factorial is ${fact}`)
