// video 2

// find maximum of 3 numbers


// debugger
// function maxOfThree(a, b, c) {

//     if (a >= b && a >= c) {

//         return a;
//     }

//     if (b >= a && b >= c) {
//         return b;
//     }
//     return c;
// }

// console.log(maxOfThree(7, 7, 3));



// check if num positive or negative or zero

// function checkNum(num) {
//     if (num > 0) {
//         return "Positive";
//     } else if (num < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }

// console.log(checkNum(5)); // Positive
// console.log(checkNum(-3)); // Negative
// console.log(checkNum(0)); // Zero



// calculate Electricity Bill

// function calculateElectricityBill(units) {
//     let billAmount = 0;

//     if (units <= 100) {
//         billAmount = units * 5;
//     } else if (units <= 200){
//         billAmount = 100 * 5 + (units - 100) * 7;

//     } else if (units <= 300) {
//         billAmount = (100 * 5) + (100 * 7) + (units - 200) * 10;
//     } else {
//         billAmount = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
//     }
//     return billAmount;
// }

// console.log(calculateElectricityBill(250));   // 250


// check character is vowel or consonant

// function checkVowelOrConsonant(char) {
//     char = char.toLowerCase();
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         return "Vowel";
//     } else if ((char >= 'a' && char <= 'z')) {
//         return "Consonant";
//     }
//     return "Invalid input";
// }

// console.log(checkVowelOrConsonant('A')); // Vowel
// console.log(checkVowelOrConsonant('b')); // Consonant
// console.log(checkVowelOrConsonant('1')); // Invalid input


// check if year is leap year or not

// function isLeapYear(year) {
//      if (year % 400 === 0 ){
//         return true;
//      } else if (year % 100 === 0) {
//         return false; 
//      } else if (year % 4 === 0){
//         return true;
//      }
//      return false;


// }

// console.log(isLeapYear(2020)); // true  
// console.log(isLeapYear(1900)); // false


