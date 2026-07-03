// Array  

// find the max and min elemenmt from Array

// function MaxMinFromArr(arr) {
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }

//     return { min, max }
// }

// console.log(MaxMinFromArr([10, 11,12,13,14,15,100]));




// Reverse an array manual method

// function reverseArray(arr){
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while(leftIndex < rightIndex){
//         const temp = arr[leftIndex]
//         arr[leftIndex] = arr[rightIndex]
//         arr[rightIndex] = temp;
//         leftIndex++
//         rightIndex--
//     }
//     return arr;
// }


// console.log(reverseArray([3, 5, 19, 9, 39]));



// check if arrray is sorted (ascending)

// function isArraySorted(arr){
//     for (let i = 1; i < arr.length; i++){
//         if(arr[i] < arr[i - 1]){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isArraySorted([9, 5, 2, 4, 10]));
// console.log(isArraySorted([1,2, 3, 4, 5]));



// remove all duplicates from an array use filter method

// function removeDuplicates(arr) {
//     return arr.filter((el, index) => {
//         return arr.indexOf(el) === index;
//     })
// }

// console.log(removeDuplicates([1, 2, 4, 4, 3, 2, 1, 5, 9]));



// merge two array without concat or spred...

// function mergeTwoArray(arr1, arr2) {
//     const arr = [];

//     for(const el of arr1){
//         arr.push(el)
//     }

//     for(const el of arr2){
//         arr.push(el)
//     }

//     return arr;
// }


// console.log(mergeTwoArray([1,3,4], [9,5,3]));



// find second largest element
// rotate array to the right by k steps
// check if two array are equal (same order)
// count how many times an element appears in an array
