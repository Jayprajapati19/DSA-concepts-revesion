// string quetions


// find if one string is a Substring of another (manual method)

// function isSubstring(str, subStr){
//     return str.includes(subStr)
// }


// function isSubstring(str, subStr) {
//     for (let i = 0; i <= str.length - subStr.length; i++) {
//         let match = true;

//         for (let j = 0; j < subStr.length; j++) {
//             if (str[i + j] !== subStr[j]) {
//                 match = false
//                 break;
//             }
//         }
//         if (match) return true;
//     }
//     return false;
// }

// console.log(isSubstring("abcde", "cde"));



// Manual substring search  without indexof

// function indexOfSubStr(str, subStr) {
//     for (let i = 0; i <= str.length - subStr.length; i++) {
//         let match = true;

//         for (let j = 0; j < subStr.length; j++) {
//             if (str[i + j] !== subStr[j]) {
//                 match = false
//                 break;
//             }
//         }
//         if (match) return i;
//     }
//     return -1;
// }

// console.log(indexOfSubStr("abcde", "cde"));




// check if one string is Rotation of another 

function isRotation(a, b) {
    if(a.length !== b.length) return false

    a = a + a;
    for (let i = 0; i <= a.length - b.length; i++) {
        let match = true;

        for (let j = 0; j < b.length; j++) {
            if (a[i + j] !== b[j]) {
                match = false
                break;
            }
        }
        if (match) return true;
    }
    return false;
}

console.log(isRotation("abcde", "deabc"));
console.log(isRotation("jayjayd", "jaydjay"));



// freq of each word in a sentence
// remove all dup word from a sentance
// longets palindrom










