let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log("Sum:", sum);

// +++++++++++++++++++++++++++++++++++++++++

// let arr = [10, 2, 19, 4, 3, 25, 5];

// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log("Max:", max);

// +++++++++++++++++++++++++++++++++++++++++
// let arr = [10, 20, 30, 40, 50];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log("Min:", min);

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// 2nd max element in an array

// let arr = [10, 20, 30, 40, 50, 68, 99, 48];

// let max = Math.max(arr[0], arr[1]);
// let secondMax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secondMax = max;
//     max = arr[i];
//   } else if (arr[i] > secondMax && arr[i] !== max) {
//     secondMax = arr[i];
//   }
// }

// console.log("2nd Max:", secondMax);

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// 2nd min element in an array

// let arr = [10, 20, 30, 40, 50, 68, 99, 48];

// let min = Math.min(arr[0], arr[1]);
// let secondMin = Math.max(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] < min) {
//     secondMin = min;
//     min = arr[i];
//   } else if (arr[i] < secondMin && arr[i] !== min) {
//     secondMin = arr[i];
//   }
// }

// console.log("2nd Min:", secondMin);

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// revese the array
// let arr = [10, 20, 30, 40, 50];
// let temp = new Array(arr.length);

// let j = 0;

// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;
// }

// console.log("Reversed Array:", temp);

// ++++++++++++++++++++++++++++++
// 2nd approach  without using extra space

// let arr = [10, 20, 30, 40, 50];

// let i = 0;
// let j = arr.length - 1;

// while (i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }

// console.log("Reversed Array:", arr);

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// all 0's to the left and all 1's to the right

// let arr = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0];

// let i = 0;
// let j = 0;

// while (i < arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }

// console.log("Modified Array:", arr);

// ++++++++++++++++++++++++++++++++++++++++++++++++++

// all negative numbers to the left and all positive numbers to the right

// let arr = [-10, 20, -30, 40, -50, 60, -70];

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//   // Agar left negative hai toh theek hai, left++ karo
//   if (arr[left] < 0) {
//     left++;
//   }
//   // Agar right positive hai toh theek hai, right-- karo
//   else if (arr[right] > 0) {
//     right--;
//   }
//   // Agar left positive hai aur right negative hai, swap kar do
//   else {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
// }

// console.log("Rearranged Array:", arr);
