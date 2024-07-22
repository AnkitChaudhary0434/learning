let nums = [10,20,30,40,50,60];
document.write(`Length of array:${nums.length}<br>`);
for(let i of nums){
    document.write(`${i}<br>`);
}
document.write("<br>")

delete nums[2];

document.write("After Deleting <br>");

document.write("<br>")

document.write(`Length of array:${nums.length}<br>`);
for(let i of nums){
    document.write(`${i}<br>`);
}
document.write("<br>")

