// prime factorization and composite number

function primeFactorization(num){
    const primeFactors = [];

    let factor = 2;

    while(factor <= Math.sqrt(num)) {
        while(num % factor === 0){
            primeFactors.push(factor)
            num = num / factor
        }
        factor++
    }

     if (num > 2) primeFactors.push(num)
    return primeFactors;

}

console.log(primeFactorization(24));
console.log(primeFactorization(16));
