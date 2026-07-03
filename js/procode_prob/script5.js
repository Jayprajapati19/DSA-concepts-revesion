// Factors and multiple

// print factors of a number


function getAllFactors(num){
    const factor = []


    let loopCount  = 0

    for(let i = 1; i <= num;i++){
        loopCount++;
        if(num % i === 0){
            factor.push(i)
        }
    }
    console.log({num, loopCount});
    
    return factor;

}


console.log(getAllFactors(10));
console.log(getAllFactors(12));
console.log(getAllFactors(15));

