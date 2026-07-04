// selection sort 
// find min in the array

// sort an array using selection sort ascendign order 

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let minIndex = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         if (minIndex !== i) {
//             const temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr;
// }

// console.log(selectionSort([7, 2, 4, 10, 9, 8]));
// console.log(selectionSort([70, 20, 44, 110, 90, 100]));


// sort in descending

// function selectionSortDesc(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let minIndex = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] > arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         if (minIndex !== i) {
//             const temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr;
// }

// console.log(selectionSortDesc([7, 2, 4, 10, 9, 8]));
// console.log(selectionSortDesc([70, 20, 44, 110, 90, 100]));



// find the kth smallest element using selection sort logic

// function findKthsmallest(arr, k) {
//     for (let i = 0; i < k; i++) {
//         let minIndex = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         if (minIndex !== i) {
//             const temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr[k - 1];
// }

// console.log(findKthsmallest([7, 2, 4, 10, 9, 8], 4));
// console.log(findKthsmallest([70, 20, 44, 110, 90, 100]));




// selection sort but track index of minimum for each pass


function findMinIndex(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

        console.log(`pass ${i + 1} ->  min index = ${minIndex}`);
        
    }
    return arr;
}

console.log(findMinIndex([7, 2, 4, 10, 9, 8]));
