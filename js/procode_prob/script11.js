// more array quetions


// find missing number from range 1 to N

// function findMissing(arr){
//     const n = arr.length + 1;
//     const  expectedSum =  n * (n + 1) / 2;
//     const actualSum = arr.reduce((acc, cur)=> acc + cur , 0)

//     return expectedSum - actualSum;
// }

// console.log(findMissing([1,2,3,5,6,7]));



// moves all zeros to End  

// function moveZerosToEnd(arr){
//     let pos = 0;

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] !== 0){
//             arr[pos] = arr[i];
//             pos++;
//         }
//     }

//     while (pos <  arr.length){
//         arr[pos] = 0;
//         pos++;
//     }

//     return arr;
// }

// console.log(moveZerosToEnd([1,0,10,5,0,0,4,3])); 
// console.log(moveZerosToEnd([0,1,0,10,5,9,0,4,3])); 



// Find the first repeating Element  in the array

// function findFirstRepeatingElement(arr){
//     const newArr = [];

//     for (const el of arr){
//         if(newArr.includes(el)) return el;
//         newArr.push(el);
//     }

//     return null
// }

// console.log(findFirstRepeatingElement([1, 2, 4, 2, 5, 7, 8, 5, 2, 4]));



// maximun SubArray sum (Kadane's algorithm)

function  maxSubArraySum(arr){
    let maxSum = -Infinity;
    let currSum = 0;

    for(const n of arr){
        currSum += n;

        if(currSum > maxSum){
            maxSum = currSum
        }

        if(currSum < 0){
            currSum = 0;
        }
    }
    return maxSum;
}

console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
