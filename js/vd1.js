// let a = 10;
// let b = 20;

// console.log("sum of 10 ans 20 is: " + a + b);
// console.log("sum of 10 ans 20 is " + (a + b));
// console.log(a + b + " is sum of 10 and 20 ");

// output
// sum of 10 ans 20 is: 1020
// vd1.js:5 sum of 10 ans 20 is 30
// 30 is sum of 10 and 20

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// type conversion (coercion) in js

// console.log("1" + 1); // 11 ak string ak number hai toh...conctination
// console.log("1" - 1); // 0  string ko number me convert krke subtraction
// console.log("1" * 1); // 1  string ko number me convert krke multiplication
// console.log("1" / 1); // 1  string ko number me convert krke division

// +++++++++++++++++++++++++++++++++++++
// type conversion/casting

// let age = Number(prompt("Enter your age: "));

// age = Number(age); // convert to number
// console.log(typeof age); agar wo convert ho skta hai toh honga warna NaN

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// swapping two variables 3 methods

// 1-swap with extra variable
// let a = 10;
// let b = 20;
// let c;

// c = a; // c=10, a=10;copy
// a = b; // a=20, b=20;
// b = c; // b=10

// console.log(a);
// console.log(b);

// ++++++++++++++++++

// 2-swap without extra variable
// let a = 10;
// let b = 20;

// a = a + b; // a=30,
// b = a - b; // b=10,
// a = a - b; // a=20

// console.log(a, b);

// +++++++++++++
// 3 - swap with destructuring

// let a = 10;
// let b = 20;

// [a, b] = [b, a];
// console.log(a, b); // 20 10

// ++++++++++++++++++++++++++++++++++++
// let a = 4563;
// console.log(1 % 10);// for last digit (get) malse..
// console.log(Math.floor(a / 1000));

// ++++++++++++++++++++++++++++++++++++++++++++++++++
// && -> left and right both should be true
// || -> left or right should be true , one side true is enough
// ! -> negation (opposite)

// ++++++++++++++++++++++++++++++++++++++++++
// unary operators, ++, --

// let a = 11,
//   b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;

// console.log("a=" + a); // 13
// console.log("b=" + b); // 24
// console.log("c=" + c); // 103

// +++++++++++++++++++++++++++++++++++
// let a = true;
// a++;
// console.log(a);//2

// +++++++++++++++++++++++++++++++++++++++++++++++
// let a = 11++;
// console.log(a);

// Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
// variable pe laga shakte haii....

// ++++++++++++++++++++++

// let a = 10;
// let b = ++(a++)
// console.log(b);

// ++++++++++++++++++++++Math functions++++++++++++

// console.log(Math.round(10.3)); //10
// console.log(Math.ceil(10.1)); //11
// console.log(Math.floor(10.6)); //10
// console.log(Math.trunc(18.98)); //18
// console.log(Math.pow(2, 5)); //2^5 = 32
// console.log(Math.sqrt(16)); //4 square root
// console.log(Math.cbrt(27)); //3 cube root
// console.log(Math.abs(-10)); //10 absolute value, negative ko positive me convert
// console.log(Math.max(10, 20, 30)); //30 maximum value
// console.log(Math.min(10, 20, 30)); //10 minimum value
// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.floor(Math.random() * 100)); // random number between 0 and 99

// let a = 89.0590595;
// console.log(a.toFixed(2)); // string

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let a = 5;
// let b = 7;

// console.log(a * b);
// console.log(2 * (a + b));

// +++++++++++++++++++++++++++++++++++++++

// let a = 5;
// let b = 4s;
// let c = 3;

// let s = (a + b + c) / 2; // semi-perimeter

// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// console.log(area);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
