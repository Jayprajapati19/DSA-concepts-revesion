// Insertion sort


// sort arr using insertion short ascending order

// function insertionSort(arr){
//     for (let i = 1; i<arr.length; i++){
//         let curr = arr[i];
//         let j = i - 1;

//         while(j >= 0 && arr[j] > curr){
//             arr[j + 1 ] =  arr[j]
//             j--;
//         }
//         arr[j + 1] = curr;
//     }
//     return arr;
// }

// console.log(insertionSort([4, 3, 2, 1, 9, 5]));



// descending order

function insertionSortDesc(arr){
    for (let i = 1; i<arr.length; i++){
        let curr = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > curr){
            arr[j + 1 ] =  arr[j]
            j--;
        }
        arr[j + 1] = curr;
    }
    return arr;
}

console.log(insertionSortDesc([4, 3, 2, 1, 9, 5]));
