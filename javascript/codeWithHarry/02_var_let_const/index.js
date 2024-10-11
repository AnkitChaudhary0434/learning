// console.log("JavaScript tutorial 3: var, let, const");
// var a = 45;
// var b = "bobby";
// var c = null;
// var d = undefined;
// {
//   var b = "this";
//   console.log(b);
// }
// console.log(b);

// var is not blocked scoped

console.log("JavaScript tutorial 2: var, let, const");
var a = 45;
var a = "lolo"; // variable redeclared alloued in var but not in let
let b = "bobby";
const author = "bobby";
//let author = 5 // throws an error because constent can not be changed
//const bobby; // give error must give inisilijation like const bobby = "ola";
let c = null;
c = "pipni"; // in let update is alloued BUT (let c = "pipni";) redeclaration in note allowed
var d = undefined;
{
  let b = "this";
  console.log(b);
}
console.log(b);
// let is blocked scoped
