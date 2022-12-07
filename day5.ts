// import fs
import * as fs from 'fs';

export const x = "";

// read in day1input.txt using readFileSync
const input = fs.readFileSync("day5input.txt", "utf8").split("\r\n");


// initalize a list of lists of strings or undefined
let results: (string | undefined)[][] = [];
// const results = Array<Array<string>>();

// push S, T, H, F, W, R onto arr
let arr = ["S", "T", "H", "F", "W", "R"];
results.push(arr);

// push S, G, D, Q, W onto arr
arr = ["S", "G", "D", "Q", "W"];
results.push(arr);

// push B, T, W onto arr
arr = ["B", "T", "W"];
results.push(arr);

// push D, R, W, T, N, Q, Z, J onto arr
arr = ["D", "R", "W", "T", "N", "Q", "Z", "J"];
results.push(arr);

// push F, B, H, G, L, V, T, Z onto arr
arr = ["F", "B", "H", "G", "L", "V", "T", "Z"];
results.push(arr);

// push L, P, T, C, V, B, S, G onto arr
arr = ["L", "P", "T", "C", "V", "B", "S", "G"];
results.push(arr);

// push Z, B, R, T, W, G, P onto arr
arr = ["Z", "B", "R", "T", "W", "G", "P"];
results.push(arr);

// push N, G, M, T, C, J, R onto arr
arr = ["N", "G", "M", "T", "C", "J", "R"];
results.push(arr);

// push L, G, B, W onto arr
arr = ["L", "G", "B", "W"];
results.push(arr);

// console.log(input);

// part 1
// loop through input
// for (let i = 0; i < input.length; i++) {
//     // split input[i] by spaces
//     const tokens = input[i].split(" ");
//     // console.log(tokens[0]);
//     const numBoxes = parseInt(tokens[1]);
//     const from = parseInt(tokens[3]);
//     const to = parseInt(tokens[5]);
    
//     for (let j = 0; j < numBoxes; j++) {
//         if (results[from - 1].length > 0) {
//             results[to - 1].push(results[from - 1].pop());
//         }
//     }

//     console.log("moved " + numBoxes + " boxes from " + from + " to " + to);
// }
// console.log(results);

// part 2
for (let i = 0; i < input.length; i++) {
    // split input[i] by spaces
    const tokens = input[i].split(" ");
    // console.log(tokens[0]);
    const numBoxes = parseInt(tokens[1]);
    const from = parseInt(tokens[3]);
    const to = parseInt(tokens[5]);
    
    let reversed: (string | undefined)[] = [];

    for (let j = 0; j < numBoxes; j++) {
        if (results[from - 1].length > 0) {
            reversed.push(results[from - 1].pop());
            // results[to - 1].push(results[from - 1].pop());
        }
    }

    results[to - 1] = results[to - 1].concat(reversed.reverse());

    // console.log("moved " + numBoxes + " boxes from " + from + " to " + to);
}
// console.log(results);

results.forEach((list) => {
    console.log(list.pop());
});