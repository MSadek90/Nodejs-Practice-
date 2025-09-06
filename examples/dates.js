// Example for dates.js
let date = new Date();
// Display the current date and time
//console.log("current date and time: " + date.toString());


//
let d = new Date("2011-2-5");
// Display the specific date
console.log("Specific date: " + d.toString());



//static method now()
let d2 = new Date("15 november 2000 15:23:10");

// Display the year of the specific date
console.log(d2.getFullYear());

// Display the month of the specific date (0-11)
console.log(d2.getMonth());

// Display the day of the month of the specific date (1-31)
console.log(d2.getDate());

// Display the day of the week of the specific date (0-6)
console.log(d2.getDay());

// Display the hours of the specific date (0-23)
console.log(d2.getHours());

// Display the minutes of the specific date (0-59)
console.log(d2.getMinutes());

// Display the seconds of the specific date (0-59)
console.log(d2.getSeconds());

// Display the milliseconds of the specific date (0-999)
console.log(d2.getMilliseconds());



// Using setter methods to modify the date

d2.setDate(10);// Setting day of the month to 10
d2.setMonth(5); // Month is 0-indexed, so 10 represents November
d2.setFullYear(2023);// Setting year to 2023
d2.setHours(10);// Setting hours to 10
d2.setMinutes(30);// Setting minutes to 30
d2.setSeconds(45);// Setting seconds to 45


console.log(d2);



// Parsing a date string 
// The string can be in various formats
// Here are some examples:
let dateString1 = "2023-12-25T10:30:00Z"; // ISO 8601 format
let parsedDate1 = Date.parse(dateString1);
console.log(parsedDate1); // Outputs the timestamp in milliseconds example: 1703461800000


let dateString2 = "March 15, 2024 12:00:00"; // Another common format
let parsedDate2 = Date.parse(dateString2);
console.log(parsedDate2); // Outputs the timestamp in milliseconds example: 1710398400000
console.log(dateString1.toString());// Outputs the string representation of the date example: 2023-12-25T10:30:00.000Z



// A more complex string
let time = new Date(" mahmoud has joined to neop on 15 may 2025 14:30:00 UT");
console.log(time);