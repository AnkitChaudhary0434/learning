let fruits = ["Guava", "Apple", "Grapes", "Banana"];
document.write(`size:${fruits.length}<br>`);
document.write(`value:${fruits}<br>`);

let size = fruits.push("Orange");
document.write(`size:${size}<br>`);
document.write(`value:${fruits}<br>`);

size = fruits.push("Kiwi", "Pomengranate", "Pappaya");
document.write(`size:${size}<br>`);
document.write(`value:${fruits}<br>`);
