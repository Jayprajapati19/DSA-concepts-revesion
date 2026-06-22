// video 3

// right angle star triangle

// const row = 10

// for (let i = 1; i <=row; i++){
//     let str =  ''
//     for(let j = 1; j<=i; j++){
//         str = str + '*'
//     }
//     console.log(str)
// }



// inverted triangle

// const row = 5 

// for (let i = row; i >=1; i--){
//     let str =  ''
//     for(let j = i; j>=1; j--){
//         str = str + '*'
//     }
//     console.log(str)
// }




// print pyaramid pattern 

// const row = 5

// for (let i = 1; i <=2 * row-  1; i += 2){
//     let str =  ''

//     const currentROW = (i + 1)  / 2; 

//     for(let j = 1; j <= row +currentROW -1 ; j++){
//         if (j <= row - currentROW){
//             str += ' '
//         }else{
//             str  += '*'
//         }
//     }

//     console.log(str)
// }




// inverted pyramid

// const row = 8

// for (let i = 2 * row -  1; i >= 1; i -= 2){
//     let str =  ''
//     const currentROW = (i + 1)  / 2; 

//     for(let j = 1; j <= row +currentROW - 1; j++){
//         if (j <= row - currentROW){
//             str += ' '
//         }else{
//             str  += '*'
//         }
//     }

//     console.log(str)
// }




// print square pattern

// const row = 8

// for (let i = 1; i <=row; i++){
//     let str =  ''

//     for(let j = 1; j <= row; j++){
//          if  (i === 1 || i === row || j === 1 || j === row ){
//              str = str + '*'
//          } else{ 
//             str = str + ' '
//          }
//     }
    
//     console.log(str)
// }



// hellow pyramind 

// const row = 5

// for (let i = 1; i <=2 * row -  1; i += 2){
//     let str =  ''

//     const currentROW = (i + 1)  / 2; 

//     for(let j = 1; j <= row +currentROW - 1 ; j++){
//         if (j <= row - currentROW || j > row - currentROW + 1 && j < row + currentROW - 1 && i !== 2*row-1  ){
//             str += ' '
//         }else{
//             str  += '*'
//         }
//     }

//     console.log(str)
// }



// Print alternating binary triangle 


const row = 5

for (let i = 1; i <=row; i++){
    let str =  ''
    for(let j = 1; j<=i; j++){
        str = str +  (i % 2 === 1 ? j % 2 : (j+1) % 2) 
    }
    console.log(str)
}

// tc of all O(n)2