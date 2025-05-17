// print even 0 to 100
// console.log(`even num 0 to 100: `);
// for ( i = 0; i <= 100; i++){
//   if (i % 2 == 0){
//     console.log(i);
//   }
// }

// prompt full name. create user name based on prompt start with @ then full name then len of string

let fullName = prompt("enter your full name");
let trimFullName = fullName.replace(/\s+/g, '');
let lowerTrimFullName = trimFullName.toLowerCase();
console.log(`@${lowerTrimFullName}${fullName.length}`);
