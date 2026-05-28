// let ans = Number(prompt("What is your Age?"));
// console.log(ans);

// if (isNaN(ans) === true) {
//   alert("Please enter a valid number. invalid input❌");
// }

// if (ans >= 18) {
//   alert("You are eligible to vote.✅");
// } else {
//   alert("You are not eligible to vote.❌");
// }

// +++++++++++++++++++++++++shop discout++++++++++++++++++++++++

// let amount = Number(prompt("what is the final amount ?"));

// let dis = 0;

// if (amount > 0 && amount <= 5000) {
//   dis = 0;
// } else if (amount > 5001 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   dis = 10;
// } else if (amount > 9000) {
//   dis = 20;
// } else {
//   alert("Please enter a valid amount.❌");
// }
// console.log(amount - Math.floor((dis * amount) / 100));

// +++++++++++++++++++++++++++++ Bijli bill +++++++++++++++++++++++++++++++++++

// let unit = Number(prompt("Enter the electricity  units :")); //700
// let amount = 0;

// if (unit > 400) {
//   amount = (unit - 400) * 13; //3900
//   unit = 400;
// } //400
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8; //1600
//   unit = 200;
// } //200
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6; //600
//   unit = 100;
// }
// amount += unit * 4;

// console.log(`Your electricity bill is ${amount} rupees.`);

// +++++++++++++++++++++++++++++++++INR denomination++++++++++++++++++++++++

// let amount = 1909;

// if (amount >= 500) {
//   console.log("500 notes : ", Math.floor(amount / 500));
//   amount = amount % 500;
// }

// if (amount >= 200) {
//   console.log("200 notes : ", Math.floor(amount / 200));
//   amount = amount % 200;
// }

// if (amount >= 100) {
//   console.log("100 notes : ", Math.floor(amount / 100));
//   amount = amount % 100;
// }

// if (amount >= 50) {
//   console.log("50 notes : ", Math.floor(amount / 50));
//   amount = amount % 50;
// }

// if (amount >= 20) {
//   console.log("20 notes : ", Math.floor(amount / 20));
//   amount = amount % 20;
// }

// if (amount >= 10) {
//   console.log("10 notes : ", Math.floor(amount / 10));
//   amount = amount % 10;
// }

// if (amount >= 5) {
//   console.log("5 notes : ", Math.floor(amount / 5));
//   amount = amount % 5;
// }

// if (amount >= 2) {
//   console.log("2 notes : ", Math.floor(amount / 2));
//   amount = amount % 2;
// }

// if (amount === 1) {
//   console.log("1 notes : ", amount);
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// ternary operator ->  ? :
// nested ternary operator -> ? : ? :

// let num = 10;
// console.log(num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");

// ++++++++++++++++++++++switch case++++++++++++++++++++++++++
// fall through condition // without break statement

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   default:
//     console.log("Invalid day");
//     break;
// }

// +++++++++++++++++++++++++++'
// .toFixed(1) → string mein convert karta hai "0.3"

// +() → use dobara number banata hai 0.3

let num = 0.1 + 0.2; // 0.30000000000000004
switch (num) {
  case 0.3:
    console.log("hello");
    break;
  case 0.5:
    console.log("heyyy");
    break;
  default:
    console.log("namsteee");
    break;
}
