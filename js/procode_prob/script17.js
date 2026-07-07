// Recursion

// function called it self

// print number 1 to  N using recursion

// function printNum( num){
//     if(num > 1) printNum(num - 1)    
//     console.log(num);

// }


// printNum(5)


// print number reverse

// function printNumReverse(num) {
//     console.log(num);
//     if (num > 1) printNumReverse(num - 1)
// }


// printNumReverse(5)


// factorial of number using recursion

// function factorial(num) {
//     if (num <= 1) return 1;
//     return num * factorial(num - 1)
// }


// console.log(factorial(5))



// find the sum of n natural numbers using recursion

// function sumofNatural(num) {
//     if(num <= 0) throw new Error("only natual num.")
//     if (num === 1) return 1;
//     return num + sumofNatural(num - 1)
// }


// console.log(sumofNatural(3))




// calculate power using recursion

function powerofnum(a, n) {
 if(n === 0) return 1;
 return a * powerofnum(a, n -1 )
}


console.log(powerofnum(3, 3))