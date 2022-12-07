// import fs
import * as fs from 'fs';

export const x = "";

// read in day1input.txt using readFileSync
const results = fs.readFileSync("day4input.txt", "utf8").replace(/\r\n/g, " ").trim().split(" ");

let total = 0;
// loop through results
for (let i = 0; i < results.length; i++) {
    const pairs = results[i].split(",");
    const nums1 = pairs[0].split("-");
    const nums2 = pairs[1].split("-");
    const x1 = parseInt(nums1[0]);
    const y1 = parseInt(nums1[1]);
    const x2 = parseInt(nums2[0]);
    const y2 = parseInt(nums2[1]);
    if (x2 > y1 || x1 > y2) {
        console.log(results[i]);
    } else {
        total++;
    }
}
console.log(total);


