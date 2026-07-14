// let prompt = require("prompct-sync")();
// let n = input("Enter a number: ")

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }



// same code but using function
// function star(n){
//   for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
// return n
// }

// console.log(star(6));


// right angle triangle

// for (let i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// *
// * *
// * * *
// * * * *
// * * * * *

// +++++++++++++++++++++++++++++++

// for (let i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// +++++++++++++++++++++++++++

// for (let i = 1; i <= n; i++) {
//   for (j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(64 + j) + " ");
//   }
//   console.log();
// }

// Enter a number: 5
// A
// A B
// A B C
// A B C D
// A B C D E

// inverted right angle triangle (undha start *)

// for (let i = 1; i <= n; i++) {
//   //   for (let j = 1; j <= n - i + 1; j++) {
//   for (let j = n; j >= i; j--) {
//     process.stdout.write(" * ");
//   }
//   console.log();
// }

// mirror right angle triangle

// for (let i = 1; i <= n; i++) {
//   for (let space = 1; space <= n - i; space++) {
//     process.stdout.write("  ");
//   }

//   for (let star = 1; star <= i; star++) {
//     process.stdout.write(" * ");
//   }

//   console.log();
// }

// print X pattern
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j == n + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// V pattern

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= 2 * n - 1; j++) {
//     if (j === i || j === 2 * n - i) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// triangle * pattern piramid

// for (let i = 1; i <= n; i++) {
//   for (let space = 1; space <= n - i; space++) {
//     process.stdout.write(" ");
//   }

//   for (let star = 1; star <= i; star++) {
//     process.stdout.write("* ");
//   }

//   console.log();
// }
