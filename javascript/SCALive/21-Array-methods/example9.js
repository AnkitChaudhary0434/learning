let fruits = ["Guava", "Apple", "Grapes", "Banana"];
document.write(`size:${fruits.length}<br>`);
document.write(`value:${fruits}<br>`);

fruits.splice(2, 1, "Orange", "Cherry");
document.write(`size:${fruits.length}<br>`);
document.write(`value:${fruits}<br>`);
