



let name ="mahmoud sadek sw quality sw engineer";

let name2="sadek"


console.log(name.indexOf('sw',4));//to find the index of 'sw' starting from index 4
console.log(name.indexOf('sw', name.indexOf('sw') + 1)); //to find the index of the second occurrence of 'sw'


console.log(name.charAt(21)); //to get the character at index 21
console.log(name.charCodeAt(21)); //to get the ASCII code of the character at index 21


//console.log(name.subString(3,14)); //to get the substring from index 3 to 14 output: "moud sadek s"

console.log(name.replace("quality","devops")); //to replace "quality" with "devops"
//if the qiality is repeated multiple times, it will only replace the first occurrence
console.log(name.replace(/sw/g,"devopss")); //to replace all occurrences of "sw"





console.log(name.trim()); //to remove whitespace from both (ends) of the string
                          //example: "   mahmoud sadek sw quality sw engineer   
                          //" will become "mahmoud sadek sw quality sw engineer"

let name5 = "mahmoud sadek sw quality sw engineer";
console.log(name5.split(" ")); //to split the string into an array of words
console.log(name5.startsWith("mahmoud")); //to check if the string starts with "mahmoud"
console.log(name5.endsWith("engineer")); //to check if the string ends with "engineer"
console.log(name5.includes("sadek")); //to check if the string includes "sadek
console.log(name5.startsWith("sadek", 8)); //to check if the string starts with 
// "sadek" at index 8



let name6 = "mahmoud sadek sw quality sw engineer";
console.log(name6.split(" ")); //to split the string into an array of words
console.log(name6.split("quality")); //to split the string into an array using "quality" 
// as the delimiter example: ["mahmoud sadek sw ", " sw engineer"]
console.log(name6.split("quality", 3)); //to split the string into an array using "quality"
// as the delimiter and limit the result to 1 element example: ["mahmoud sadek sw "]

console.log(name6.slice(0, 14)); //to extract a section of the string from index 0 to 14
//example: "mahmoud sadek s"
console.log(name6.slice(14)); //to extract a section of the string from index 14 to the end
//example: "w quality sw engineer"
console.log(name6.slice(-14)); //to extract a section of the string from index -14 to the end
//example: "sw quality sw engineer"// -14 means counting from the end of the string
console.log(name6.slice(14, -9)); //to extract a section of the string from index 14 to -9
//example: "w quality sw "






//Templeate literals//
let name7 = "mahmoud sadek";
let age = 30;
let hobby = "coding";

let message = `My name is ${name7}, I am ${age} years old,
and I love ${hobby}.`;
console.log(message); //to create a message using template literals








// Function to convert all occurrences of 'a' in a string to '*'
// Example: "mahmoud sadek sw quality sw engineer" -> "m*hmoud s*dek sw qu*lity sw engineer"
// Steps:
// 1. Use the replace method with a regular expression to find all occurrences of 'a'.
// 2. Replace each occurrence with '*'.
let convert = function(str){
    return str.replace(/[a]/g,"*");
}

console.log(convert("mahmoud sadek sw quality sw engineer")); //output: m*hmoud s*dek sw qu*lity sw engineer


let str = "mahmoud sadek sw quality sw engineer";
//// Convert the string to CamelCase
// Steps:
// 1. Split the string into words using space as a delimiter.
// 2. Capitalize the first letter of each word.
// 3. Join the words back together without spaces.
// 4. Return the resulting CamelCase string.

    let char = str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
    result = char;

console.log(result); //output: MahmoudSadekSwQualitySwEngineer