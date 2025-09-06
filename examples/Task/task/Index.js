    // Index.js
    // Description: Read users from a CSV, parse birth date/time in each user's timezone, print ISO DOB and age.
    // Import DateTime from luxon for parsing and date arithmetic.
    import { DateTime } from 'luxon';
    // Import Node's fs module to read files from disk.
    import * as fs from 'fs';

    // Multi-line description of the task handled by this script.
    /*
     Task: Read a CSV file with user data including date of birth, time of birth, country, language, and timezone.
     For each user, parse the date and time of birth in their local timezone, convert it to ISO 8601 format,
     and calculate their current age in years based on the current date in their timezone.
     Print the ISO 8601 formatted date of birth and the calculated age for each user.
    */

    // Example CSV row for reference (fields separated by commas):
    // 1,male,Tawnya Grimwood,tgrimwood0@123-reg.co.uk,01/24/1981,04:15,AM,UZ,Uzbekistan,uz,UTC+5

    // Read the CSV file synchronously as UTF-8 text.
    let raw = fs.readFileSync('./file.csv', 'utf-8');
    // Split the file into lines on newline characters.
    let lines = raw.split('\n');
    // Trim whitespace from each line and filter out any empty lines.
    let data = lines.map(line => line.trim()).filter(line => line.length > 0);

    // Iterate over each CSV line (each representing one user).
    data.forEach((line => {
        // Split the CSV fields by comma and trim whitespace from each field.
        let parts = line.split(',').map(part => part.trim());

        // Field index notes (adjust if your CSV layout differs):
        // parts[0] => id
        // parts[1] => gender
        // parts[2] => full name
        // parts[3] => email
        // parts[4] => date of birth (MM/DD/YYYY)
        // parts[5] => time of birth (hh:mm)
        // parts[6] => AM/PM indicator (if present)
        // parts[7] => country code
        // parts[8] => country name
        // parts[9] => language code
        // parts[10] => timezone string like 'UTC+5'

        // Parse the combined date and time string using luxon and the timezone from the CSV.
        let f = DateTime.fromFormat(`${parts[4]} ${parts[5]}`, 'MM/dd/yyyy hh:mm a', { zone: parts[9] });

        // Print the parsed DateTime in ISO 8601 format for clarity.
        console.log(f.toISO());

        // Get the current moment in the same timezone as the user.
        let now = DateTime.now().setZone(parts[9]);

        // Calculate the difference from birth to now in years (fractional years included).
        let diff = now.diff(f, 'years');

        // Print the user's name and their age in years (as a floating-point number).
        console.log(`Age of ${parts[2]} is ${diff.years} years`);
    }));


