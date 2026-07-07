// recursion on array and string

// print all element of an array using recursion


// function printAllelement(arr, index = 0){
//      if(index === arr.length) return;
//      console.log(arr[index])
//      printAllelement(arr, index + 1)
// }

// printAllelement([1,2, 3, 4, 5]);


// sum of all elements in array using recursion

// function sumOfElement(arr, index = 0) {
//     if (index === arr.length) return 0;
//     return arr[index] + sumOfElement(arr, index + 1)
// }

// console.log(sumOfElement([1, 2, 3, 4, 5]));



// sorted or not using recursion

// function isSorted(arr, index = 0) {
// if (index === arr.length - 1) return true;
// if (arr[index] > arr[index + 1]) return false;
// return isSorted(arr, index + 1);

// }

// console.log(isSorted([1, 2, 3, 4, 7]))




// reverse a string using recursion

// function reverseString(str, index = str.length - 1) {
// if (index < 0) return "";
// return str[index] + reverseString(str, index - 1);
// }

// console.log(reverseString("jayd"));


// 