// Binary search


// find an element in a sorted array using binary search

// function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         const mid = Math.floor((start + end) / 2);

//         if(arr[mid] === target) {
//             return mid;
//         }

//         if(arr[mid] < target) {
//             start = mid + 1;
//         }else{
//             end = mid - 1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5));



// find the first occurence of a repeated element in a sorted array using binary search


function binarySearchFirstOccurence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            ans = mid;
            end = mid - 1;
        }

        if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return ans;
}

console.log(binarySearchFirstOccurence([2, 4, 4, 4, 9, 11], 4));

