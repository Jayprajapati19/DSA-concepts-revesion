// left rotation by 1

// let arr = [1, 2, 3, 4, 5];

// let copy = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;
// console.log(arr);

// op->[ 2, 3, 4, 5, 1 ]


// +++++++++++++++++++++++++++++++++++++

// Right rotation by 1

// let arr = [1, 2, 3, 4, 5];

// let copy = arr[arr.length - 1];

// // store last element
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
//   // shift elements to the right
// }
// arr[0] = copy;
// // place last element at the start
// console.log(arr);

// Output: [5, 1, 2, 3, 4]

// ++++++++++++++++++++++++++++++++++++++++++++++++
// left rotation by k element

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter k value: "));

// k = k % arr.length; // to handle cases where k is greater than array length
// e.g., if k = 7 and arr.length = 5, we only need to rotate 2 times

// let count = 0;

// for (let j = 0; j < k; j++) {
//   let copy = arr[0];
//     count++;
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }

//   arr[arr.length - 1] = copy;
// }

// console.log(arr);
// console.log(`Array rotated ${count} times to the left by ${k} elements.`);

// optimised approach
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);

// // // enter the value of k
// let k = Number(prompt("Enter k value : "));
// k = k % arr.length; // to handle cases where k is greater than array length

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }

// console.log(temp);

// ++++++++++++++++++++++
// right rotation by k element
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);

// let k = Number(prompt("Enter k value : "));
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   temp[(i + k) % arr.length] = arr[i];
// }

// console.log(temp);

// +++++++++++++++++++++++++

// most optimised approach  left rotation

// 47 min

let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter k value : "));

k = k % arr.length;

reverse(0, k - 1)
reverse(k, arr.length - 1)
reverse(0, arr.length - 1)
console.log(arr);

function reverse(i,j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

