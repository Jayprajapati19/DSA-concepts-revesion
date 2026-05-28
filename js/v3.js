// loop
// fact and sum of n numbers

// let pr = prompt("Enter a number:");
// let n = pr * 1; // simple numeric conversion

// if (!pr) {
//   console.log("cancelled");
// } else if (n <= 0 || n != n) {
//   console.log("should be positive and more than zero");
// } else {
//   let sum = 0,
//     fact = 1;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//     fact *= i;
//   }
//   console.log(`Sum: ${sum}, Factorial: ${fact}`);
// }

// +++++++++++++++++++++++Factorial of number+++++++++++++++++++++++++++++++++

// var pr = prompt("Kaha tak add karwaoge?");
// var n = pr * 1;

// if (!pr) {
//   console.log("cancelled");
// } else if (n != n || n <= 0) {
//   console.log("should be +ve and more than 0");
// } else {
//   for (var i = 1; i <= n / 2; i++) {
//     if (n % i === 0) console.log(i);
//   }
//   console.log(n);
// }

// +++++++++++++++++++++++Prime number+++++++++++++++++++

// let pr = prompt("Enter a number:");
// let n = pr * 1;

// if (!pr) console.log("cancelled");
// else if (n != n || n <= 0) console.log("should be +ve and more than 0");
// else {
//   let prime = true;
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   console.log(prime ? "Prime" : "Not Prime");
// }

// ++++++++++++++++++++++sum of digit++++++++++++++++++++++++++++

// var sum = 0;
// while (n > 0) {
//   var rem = n % 10;
//   sum = sum + rem;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// +++++++++++++++++++++++strong number++++++++++++++++++++

// sum = 0;
// while (n > 0) {
//   let rem = n % 10;
//   let fact = 1;
//   for (let i = 2; i <= rem / 2; i++) {
//     fact = fact * i;
//   }
//   sum = sum + fact;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// *****************

// let n = 145;
// let original = n;
// let sum = 0;

// while (n > 0) {
//   let rem = n % 10; // last digit
//   let fact = 1;

//   for (let i = 1; i <= rem; i++) {
//     fact *= i; // factorial of digit
//   }

//   sum += fact; // add to sum
//   n = (n / 10) | 0; // remove last digit (bitwise floor)
// }

// if (sum === original) {
//   console.log("Strong Number");
// } else {
//   console.log("Not a Strong Number");
// }

// +++++++++++++++++++++++++guess the number+++++++++++++++++++++++++

let random = Math.floor(Math.random() * 100) + 1;

let guess = 0;
while (guess !== random) {
  guess = prompt("Guess a number between 1 and 100:");
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Please enter a valid number between 1 and 100.");
    continue;
  }
  if (guess > random) {
    console.log("Too high! Try again.");
  } else if (guess < random) {
    console.log("Too low! Try again.");
  } else {
    console.log("Congratulations! You've guessed the number!🥳");
  }
}
