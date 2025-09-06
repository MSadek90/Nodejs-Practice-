import {DateTime} from "luxon";


let d = DateTime.now().setLocale('en');


//IsoString
console.log(d.toISO()); //2024-06-20T14:28:32.123+00:00

//Year
console.log(d.year);

//Month
console.log(d.month); //6

//Day
console.log(d.day); //20

//ISODate
console.log(d.toISODate()); //2024-06-20




//for more formats see https://moment.github.io/luxon/#/formatting
//Full date
console.log(d.toLocaleString(DateTime.DATE_FULL)); //Thursday, June 20, 2024

//Full date with weekday
console.log(d.toLocaleString(DateTime.DATE_HUGE)); //Thursday, June 20, 2024



/************************/
//Custom format
/************************/
//https://moment.github.io/luxon/#/formatting?id=table-of-tokens
console.log(DateTime.fromISO('2014-08-06T13:07:04.054').toFormat('yyyy LLL dd')); //=> '2014 Aug 06'

//Custom format with weekday
console.log(DateTime.fromISO('2014-08-06T13:07:04.054').toFormat('cccc, dd LLL yyyy')); //=> 'Wednesday, 06 Aug 2014'

//Custom format with weekday short
console.log(DateTime.fromISO('2014-08-06T13:07:04.054').toFormat('dd')); //=> '06'

//Custom format with weekday short
console.log(DateTime.fromISO('2014-08-06T13:07:04.054').toFormat('cccc'));//=> 'Wednesday'
