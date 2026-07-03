// Prime and Fibonacci


// check no is prime

// function isPrime(a){
//     let  factorCount  = 0;
//     for(let i = 1; i <= Math.sqrt(a);i++){
//         if(a % i === 0){
//             factorCount++; 
//             const otherpair = a / i;
//              if (i !== otherpair) factorCount++
//         }
//     }
//     return factorCount === 2 ? "Prime" :  "Not Prime";

// }

// console.log(isPrime(2));
// console.log(isPrime(19));
// console.log(isPrime(35));
// console.log(isPrime(3));
// console.log(isPrime(1));
// console.log(isPrime(4));


// check if two number are co-prime

// function isCOPrime(a, b) {
//     let divisor = a < b ? a : b
//     let dividend = a > b ? a : b

//     while (dividend % divisor !== 0) {
//         const remainder = dividend % divisor;
//         dividend = divisor
//         divisor = remainder
//     }

//     return divisor === 1 ;

// }
// console.log(isCOPrime(7, 9));
// console.log(isCOPrime(12, 18));



// print fibonacci series up to n numbers

// function fibonacci(num){
//     const series = [0 ,1];
    
//     for (let i = 2; i < num; i++){
//         series.push(series[i-1] + series[i -2])
//     }
//     return series
// }

// console.log(fibonacci(10));



// find nth fibonacci no.

// function Nthfibonacci(num){
//     const series = [0 ,1];
    
//     for (let i = 2; i < num; i++){
//         series.push(series[i-1] + series[i -2])
//     }
//     return series[series.length - 1]
// }

// console.log(Nthfibonacci(8));



// belongsTOFibonacci

function BelongsToFibonacci(num){
    return Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
     Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
}

console.log(BelongsToFibonacci(7));
console.log(BelongsToFibonacci(0));




















