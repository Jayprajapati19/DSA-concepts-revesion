//  string 

// reverse a string using manaual method

// reverse -> .split().reverse().join('')

// function reverseString(str){
//     let reverseString = ''

//     for(let i = str.length - 1; i >= 0; i-- ){
//         reverseString += str[i]
//     }
//     return reverseString

// }

// console.log(reverseString("jayd"))




// check is string a palidrom 

// function palidrom(str){
//     let reverseString = ''

//     for(let i = str.length - 1; i >= 0; i-- ){
//         reverseString += str[i]
//     }
//     return reverseString === str 

// }

// console.log(palidrom("ababa"))


// optimised solution
// function isPalidrom(str){
//     let leftIndex = 0;
//     let rightIndex = str.length -1 ;     

//     while(leftIndex < rightIndex){
//         if(str[leftIndex] !== str[rightIndex]) return false;
//         leftIndex++;
//         rightIndex--;
//     }
//     return true;

// }

// console.log(isPalidrom("racecar"))




// count frequency of each character 

// function countFrequency(str){
//     const frequency = {};

//     for(let i = 0; i<str.length; i++){
//         frequency[str[i]] = (frequency[str[i]] ||  0) + 1
//     }
//     return frequency
// }

// console.log(countFrequency("banana"));



// find the most frequent character in a string 

// function MaxFrequencyChar(str){
//     const frequency = {};
//     let maxChar = '';
//     let maxCharCount = 0;

//     for(let i = 0; i<str.length; i++){
//         const char = str[i]
//         frequency[char] = (frequency[char] ||  0) + 1;

//         if(maxCharCount < frequency[char]){
//             maxChar = char
//             maxCharCount = frequency[char]
//         }
//     }
//     return maxChar
// }

// console.log(MaxFrequencyChar("banana"));




// check if two string are anagram withot sorting

// function areAnagrams(str1, str2){
//     if(str1.length !== str2.length) return false;
//     const frequency = {};

//     for(let i = 0; i<str1.length; i++){
//         frequency[str1[i]] = (frequency[str1[i]] ||  0) + 1
//     }
    

//     for(let i = 0; i<str1.length; i++){
//         const char = str2[i];
//         if(!frequency[char]) return false;
//         frequency[char]--;
//     }
    
//     return true;
// }

// console.log(areAnagrams("slient", "listen"));



// find the first non-repeating character

function FindFirstNonreapetingChar(str){
    const frequency = {};

    for(let i = 0; i<str.length; i++){
        frequency[str[i]] = (frequency[str[i]] ||  0) + 1
    }

    for(let i = 0; i<str.length; i++){
        if(frequency[str[i]] === 1) return str[i]
    }
     
    return null
}

console.log(FindFirstNonreapetingChar("bajnainajjba"));
