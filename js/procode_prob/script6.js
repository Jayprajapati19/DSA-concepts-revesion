// Prime and Fibonacci


// check no is prime

function isPrime(a){
    let  factorCount  = 0;
    for(let i = 1; i <= Math.sqrt(a);i++){
        if(a % i === 0){
            factorCount++; 
            const otherpair = a / i;
             if (i !== otherpair) factorCount++
        }
    }
    return factorCount === 2 ? "Prime" :  "Not Prime";

}

console.log(isPrime(2));
console.log(isPrime(19));
console.log(isPrime(35));
console.log(isPrime(3));
console.log(isPrime(1));
console.log(isPrime(4));











