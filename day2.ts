// import fs
import * as fs from 'fs';

export const x = "";

// read in day1input.txt using readFileSync
const results = fs.readFileSync("day2input.txt", "utf8").replace(/\r\n/g, " ").trim().split(" ");

// part 1
// let total = 0;
// for (let i = 0; i < results.length; i+=2) {
//     if (results[i] === "A") {
//         if (results[i+1] === 'Y') {
//             total+=8;
//         } else if (results[i+1] === 'X') {
//             total+=4;
//         } else {
//             total+=3;
//         }
//     } else if (results[i] === "B") {
//         if (results[i+1] === 'Y') {
//             total+=5;
//         } else if (results[i+1] === 'X') {
//             total+=1;
//         } else {
//             total+=9;
//         }
//     } else if (results[i] === "C") {
//         if (results[i+1] === 'Y') {
//             total+=2;
//         } else if (results[i+1] === 'X') {
//             total+=7;
//         } else {
//             total+=6;
//         }
//     }
// }

// part 2
let total = 0;
for (let i = 0; i < results.length; i+=2) {
    if (results[i] === "A") { // rock
        if (results[i+1] === 'Y') {  // draw
            // 1 + 3
            total+=4;
        } else if (results[i+1] === 'X') { // lose
            // 3 + 0
            total+=3;
        } else {  // win 
            // 2 + 6
            total+=8;
        }
    } else if (results[i] === "B") { // paper
        if (results[i+1] === 'Y') { // draw
            // 2 + 3
            total+=5;
        } else if (results[i+1] === 'X') { // lose
            // 1 + 0
            total+=1;
        } else { // win
            // 3 + 6
            total+=9;
        }
    } else if (results[i] === "C") { // scissors
        if (results[i+1] === 'Y') {     // draw
            // 3 + 3
            total+=6;
        } else if (results[i+1] === 'X') {  // lose
            // 2 + 0
            total+=2;
        } else {    // win
            // 1 + 6
            total+=7;
        }
    }
}

console.log(total);