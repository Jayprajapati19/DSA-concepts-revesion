// Factors and multiple

// print factors of a aber


// function getAllFactors(a){
//     const factor = []

//     let loopCount  = 0

//     for(let i = 1; i <= a / 2;i++){
//         loopCount++;
//         if(a % i === 0){
//             factor.push(i)
//         }
//     }
//     console.log({a, loopCount});
//     factor.push(a)
//     return factor;

// }



// optimised solution
// function getAllFactors(a){
//     const factor = []

//     let loopCount  = 0

//     for(let i = 1; i <= Math.sqrt(a);i++){
//         loopCount++;
//         if(a % i === 0){
//             factor.splice(factor.length / 2, 0 , i)  
//             const otherpair = a / i;
//              if (i !== otherpair) factor.splice(factor.length / 2 + 1, 0 , otherpair);
//         }
//     }
//     console.log({a, loopCount});
//     return factor;

// }

// console.log(getAllFactors(10));
// console.log(getAllFactors(12));
// console.log(getAllFactors(15));
// console.log(getAllFactors(100));



// Print all multiples of a aber up to N

// function getMultiples(a, limit){
//     const multiples = [];

//     for(let i = a; i <= limit; i +=a){
//          multiples.push(i)
//     }
//     return multiples    
// }

// console.log(getMultiples(4, 40));
// console.log(getMultiples(5, 50));




// find HCF (heigest common factor) or GCD of two abers

// function findHCF(a,b){
//     let hcf;
//     let loopcout = 0; 
//     for(let i = 1;i <= a && i <= b;i++){
//         loopcout++
//         if(a % i === 0 && b % i ===0){
//             hcf = i
//         }
//     }

//     console.log({loopcout});

//     return hcf
// }

// console.log(findHCF(12, 18));



// opmised 

// function findHCF(a, b){
//     const factor = []


//     let loopCount  = 0
//     for(let i = 1; i <= Math.sqrt(a);i++){
//         loopCount++;
//         if(a % i === 0){
//             factor.splice(factor.length / 2, 0 , i)  
//             const otherpair = a / i;
//              if (i !== otherpair) factor.splice(factor.length / 2 + 1, 0 , otherpair);
//         }
//     }

//     for (let i = factor.length; i >= 1; i--){
//         loopCount++
//         if(b % factor[i] === 0) 
//             console.log({loopCount});
//             return  factor[i]
//     }


// }



// optimised

// function findHCF(a, b) {
//     let divisor = a < b ? a : b
//     let dividend = a > b ? a : b
//     let loopCount = 0;

//     while (dividend % divisor !== 0) {
//         loopCount++
//         const remainder = dividend % divisor;
//         dividend = divisor
//         divisor = remainder
//     }

//     console.log({ loopCount });

//     return divisor;

// }


// console.log(findHCF(12, 16));
// console.log(findHCF(12, 18));





// find LCM (least common Multiple) of two numbers


function findLCM(a, b) {
    let divisor = a < b ? a : b
    let dividend = a > b ? a : b
    let loopCount = 0;

    while (dividend % divisor !== 0) {
        loopCount++
        const remainder = dividend % divisor;
        dividend = divisor
        divisor = remainder
    }


    return (a * b /  divisor)

}


console.log(findLCM(12, 16));
console.log(findLCM(12, 18));






















