let fruits = ["Guava", "Apple", "Grapes", "Banana"];
document.write(`size:${fruits.length}<br>`);
document.write(`value:${fruits}<br>`);

fruits.splice(1, 0, "Orange");
document.write(`size:${fruits.length}<br>`);
document.write(`value:${fruits}<br>`);
