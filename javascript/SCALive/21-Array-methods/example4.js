let fruits = ["Guava", "Apple", "Grapes", "Banana"];
document.write(`size:${fruits.length}<br>`);
document.write(`value:${fruits}<br>`);

let remEle = fruits.shift();
document.write(`deleted element is: ${remEle}<br>`);
document.write(`size: ${fruits.length}<br>`);
document.write(`value: ${fruits}<br>`);
