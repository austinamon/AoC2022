// import fs
import * as fs from 'fs';

export const x = "";

// read in day1input.txt using readFileSync
const input = fs.readFileSync("day6input.txt", "utf8");

let count = 0;

// loop through input 1 character at a time, and increment count
for (let i = 0; i < input.length; i++) {
    count++;
    if (count >= 14) {
        // determine if the last 14 characters are unique
        const last4 = input.substring(i - 13, i + 1);
        // create a map of the last 14 characters
        const map = new Map();
        for (let j = 0; j < last4.length; j++) {
            map.set(last4[j], 1);
        }
        // part 2
        // if the map has 14 unique characters, we have found the answer
        if (map.size === 14) {
            console.log("found a unique 14");
            console.log(last4);
            break;
        }
        // console.log(last4);
        // part 1
        // if (last4[0] !== last4[1] && last4[0] !== last4[2] && last4[0] !== last4[3] && last4[1] !== last4[2] && last4[1] !== last4[3] && last4[2] !== last4[3]) {
        //     console.log("found a unique 4");
        //     console.log(last4);
        //     break;
        // }
    }
}
console.log(count);


