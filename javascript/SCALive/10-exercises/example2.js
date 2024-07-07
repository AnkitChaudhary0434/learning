// grater among 2 numbers

let a=Number(prompt("Enter 1st number: "));
let b=Number(prompt("Enter 2nd number: "));
if(isNaN(a) || isNaN(b)){
    document.write("Please enter valid number");
}
else if(a>b){
    document.write(`${a} is greater then ${b}`);
}else if(a<b){
    document.write(`${b} is greater then ${a}`);
}else{
    document.write(`${a} and ${b} are equal`)
}