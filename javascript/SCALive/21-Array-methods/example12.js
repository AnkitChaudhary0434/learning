let fruits = ["Guava", "Apple", "Grapes", "Banana"];
document.write(`lastEle:${fruits[-1]}<br>`);
document.write(`size:${fruits.length}<br>`);
document.write(`value:${fruits}<br>`);

fruits.splice(-1);
document.write(`size:${fruits.length}<br>`);
document.write(`value:${fruits}<br>`);
