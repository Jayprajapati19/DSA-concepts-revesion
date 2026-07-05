// linear search 


// find an element in an array using linear search

// function linearSearch(arr, el){
//     for(let i = 0; i < arr.length;  i++){
//         if(arr[i] ===el){
//             console.log(`found ${el} at index ${i}`)
//             return
//         }
//     }
//     console.log(`${el} does not exist in the given array`);

// }

// linearSearch([4, 8, 2, 7, 1, 6, 5], 10)
// linearSearch([4, 8, 2, 7, 1, 6, 5], 8)



// find the first occurence of an element

// function linearSearchFirst(arr, el){
//     for(let i = 0; i < arr.length;  i++){
//         if(arr[i] ===el){
//             return i;
//         }
//     }
//     return -1;     
// }

// console.log(linearSearchFirst([4, 8, 2, 7, 1, 6, 5], 10));

// console.log(linearSearchFirst([4, 8, 2, 7, 1, 6, 5], 7));




// find the last occurence of an element


// function linearSearchLast(arr, el) {
//     let lastIndex = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === el) {
//             lastIndex = i;
//         }
//     }
//     return lastIndex;
// }


// console.log(linearSearchLast([4, 8, 3, 7, 1, 3, 5], 3));



// count how many times element appears

function linearSearchCount(arr, el) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === el) {
            count++;
        }
    }
    return { count };
}


console.log(linearSearchCount([3, 8, 3, 7, 1, 3, 5], 3));





