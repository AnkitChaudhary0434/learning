// print week days name using switch case

// let n= number(prompt("Enter a number between 1 to 7"));

// switch(n){
//     case 1:
//         document.write("Monday");
//         break;
//     case 2:
//         document.write("Tuesday");
//         break;
//     case 3:
//         document.write("Wednesday");
//         break;
//     case 4:
//         document.write("Thursday");
//         break;
//     case 5:
//         document.write("Friday");
//         break;
//     case 6:
//         document.write("Saturday");
//         break;
//     case 7:
//         document.write("Sunday");
//         break;
//     default:
//         document.write("Invalid number");
//             break;
// }

// print even or odd number using switch case

// let n = Number(prompt("enter a number"));

// switch (n % 2 === 0) {
//   case true:
//     document.write(`${n} is even number`);
//     break;
//   default:
//     document.write(`${n} is odd number`);
// }

// priint vowels using switch case

// let ch = prompt("Enter a character");
// ch=ch.toLowerCase();
// switch(ch){
//     case 'a':
//         document.write("Vowel");
//         break;
//     case 'e':
//         document.write("Vowel");
//         break;
//     case 'i':
//         document.write("Vowel");
//         break;
//     case 'o':
//         document.write("Vowel");
//         break;
//     case 'u':
//         document.write("Vowel");
//         break;
//     default:
//         document.write("Consonant");
//         break;
// }

let ch = prompt("Enter a character");
ch=ch.toLowerCase();
switch(ch){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        document.write("It is an Vowel");
        break;
    default:
        document.write("Consonant");
        break;
}
