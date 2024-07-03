//check vowels in a string

let ch = prompt("Enter a character: ");
let ch2 = ch;
ch = ch.toLowerCase();
if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
  document.write(`${ch2} is a vowel`);
} else {
  document.write(`${ch2} is not a vowel`);
}
