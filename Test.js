
//import * as math from"./Index.js";
//math.findMin([1,2,3,4,5,6,7,8,9,10]);
//finddifference([1,2,3,4,5],[4,5,6,7,8]);

import { findMin, finddifference } from "./Index.js";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const min = findMin(nums);
console.log("Minimum value is:", min);
if (min === 1) {
    console.log("Test passed: Minimum value is correct.");
} else {
    console.log(`Test failed: Expected 1, but got ${min}`);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6, 7, 8];
// Expected output: [1, 2, 3]
const difference = finddifference(arr1, arr2);

if (
    Array.isArray(difference) &&
    difference.length === 3 &&
    difference[0] === 1 &&
    difference[1] === 2 &&
    difference[2] === 3
) {
    console.log("Test passed: Difference between arrays is correct.");
} else {
    console.log("Test failed: Difference output is", difference);
}



