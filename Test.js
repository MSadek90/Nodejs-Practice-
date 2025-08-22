
//import * as math from"./Index.js";
//math.findMin([1,2,3,4,5,6,7,8,9,10]);
//finddifference([1,2,3,4,5],[4,5,6,7,8]);

import { findMin,finddifference } from "./Index.js";

let nums=[1,2,3,4,5,6,7,8,9,10];
let min = findMin(nums);
if(min === 1) {
    console.log("Test passed: Minimum value is correct.");
} else {
    console.log("Test failed: Expected 1, but got " + min);
}




let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
//output: [1, 2, 3]
let differnece = finddifference(arr1, arr2);
if(differnece[0] == 1 && differnece[1] == 2 && differnece[2] == 3) {
    console.log("Test passed: Difference between arrays is correct.");
}
else{
    console.log("Test failed:" + differnece);
}


