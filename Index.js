/*
Path: Index.js
Function: findMin
Description: This function finds the minimum value in a list of numbers.
Algorithm:
1. Initialize min to the first element of nums.
2. Loop through each number in nums:
   a. If the current number is less than min, update min to this number.
3. Return min.
Pseudocode:
function findMin(nums)
    if nums is empty then
        return null
    end if
    set min to nums[0]
    for each num in nums do
        if num < min then
            set min to num
        end if
    end for
    return min  
*/

export function findMin (nums) {
    if (nums.length === 0) {
        return null;
    }
    let min = nums[0];
    for (let num of nums) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}


/*
find set difference between two arrays
Description: This function finds the difference between two arrays, returning elements that are in the first array
but not in the second.
Algorithm:
1. Initialize an empty array for the result.
2. Loop through each element in the first array:
    a. If the element is not found in the second array, add it to the result.
3. Return the result array.
Pseudocode:
function findDifference(arr1, arr2)
    set result to an empty array
    for each element in arr1 do
        if element is not in arr2 then
            add element to result
        end if
    end for
    return result
*/
export function finddifference (arr1,arr2){
    let result=[];
    for(let element =0; element<arr1.length; element++){
        if(!arr2.includes(arr1[element])){
            result.push(arr1[element]);
        }
    }
    return result;
}

