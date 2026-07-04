// sorting algorim

// sort an array in ascending order using bubble sort


// const arr = [4, 2, 1, 3, 5, 6]

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             const temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp;
//         }
//     }
// }

// console.log("Sorted Array: "+arr);


// optimised
// const arr = [4, 2, 1, 3, 5, 6]
// const arr = [4, 2, 1, 3, 5, 6, 55, 30, 19, 54, 34, 9, 1, 200, 50]

// function bubbleSort(arr) {
//     let loopCount = 0;

//     for (let i = 0; i < arr.length - 1; i++) {
//         let swapped = false;
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             loopCount++;
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp;
//                 swapped = true
//             }
//         }
//         if (!swapped) break;
//     }
//     console.log({ loopCount });
//     return arr;
// }

// console.log("Sorted Array: " + bubbleSort(arr));




// sort array using bubble sort desceding


// const arr = [4, 2, 1, 3, 5, 6, 55, 30, 19, 54, 34, 9, 1, 200, 50]

// function bubbleSortDesc(arr) {
//     let loopCount = 0;

//     for (let i = 0; i < arr.length - 1; i++) {
//         let swapped = false;
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             loopCount++;
//             if (arr[j] < arr[j + 1]) {
//                 const temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp;
//                 swapped = true
//             }
//         }
//         if (!swapped) break;
//     }
//     console.log({ loopCount });
//     return arr;
// }
// console.log("Sorted Array: " + bubbleSortDesc(arr));




// 