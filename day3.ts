// import fs
import * as fs from 'fs';

export const x = "";

// read in day1input.txt using readFileSync
const results = fs.readFileSync("day3input.txt", "utf8").replace(/\r\n/g, " ").trim().split(" ");

// part 2 
var total = 0;
// loop through the results
for (var i = 0; i < results.length; i+=3) {
    let elf1 = results[i];
    let elf2 = results[i+1];
    let elf3 = results[i+2];

    // find the char that appears in all 3 strings
    for (var j = 0; j < elf1.length; j++) {
        let char = elf1[j];
        if (elf2.includes(char) && elf3.includes(char)) {
            let ascii = 0;
            // check if char is uppercase
            if (char === char.toUpperCase()) {
                ascii = char.charCodeAt(0) - 64 + 26;
            } else {
                ascii = char.charCodeAt(0) - 96;
            }
            total += ascii;
            break;
        }
    }


    // var char = results[i].charAt(0);
    // var char2 = results[i + 1].charAt(0);
    // var char3 = results[i + 2].charAt(0);
    // if (char === char2 && char2 === char3) {
    //     let ascii = 0;
    //     // check if char is uppercase
    //     if (char === char.toUpperCase()) {
    //         ascii = char.charCodeAt(0) - 64 + 26;
    //     } else {
    //         ascii = char.charCodeAt(0) - 96;
    //     }
    //     total += ascii;
    // }
}
console.log(total);


// part 1
// var total = 0;
// // loop through results
// for (let i = 0; i < results.length; i++) {
//     // split each result in half
//     const firstHalf = results[i].slice(0, results[i].length/2);
//     const secondHalf = results[i].slice(results[i].length/2, results[i].length);

//     // find the character that appears in both halves
//     let char = "";
//     for (let j = 0; j < firstHalf.length; j++) {
//         if (secondHalf.includes(firstHalf[j])) {
//             char = firstHalf[j];
//             break;
//         }
//     }

//     let ascii = 0;
//     // check if char is uppercase
//     if (char === char.toUpperCase()) {
//         ascii = char.charCodeAt(0) - 64 + 26;
//     } else {
//         ascii = char.charCodeAt(0) - 96;
//     }

//     console.log(char + "=" + ascii);
//     // add ascii value to total
//     total += ascii;
// }

// console.log(total);

