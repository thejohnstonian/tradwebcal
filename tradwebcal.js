//imports
var csv = require('jquery-csv');
const fs = require('fs');

// Set Date Variables
var year;
var month;
var monthName;

/* for line in ps.csv:
    easter.append(new Date(line[0], line[1], line[2]);


var easter;
fs.readFile(ps.csv, 'utf-8', (err, data) => {
    if (err) throw err;
    const rl = readline.createInterface({
        input: fs.createReadStream(ps.csv)
    });

    rl.on('line', (line) => {
    easter.push(new Date())
}*/

// Called on page load and when "today" button is clicked
function setToday() {
    const today = new Date();
    month = today.getMonth() + 1;
    year = today.getFullYear();
    monthName = numToMonth(month);

    document.getElementById("btnyear").innerHTML = year;
    document.getElementById("btnmonth").innerHTML = monthName;
}

// Sets `month` to manually selected month
function mthsel(m) {
    document.getElementById("btnmonth").innerHTML = m;
    monthName = m;
    month = monthToNum(monthName);
    populate(year, month);
}

// Sets `year` to manually selected year
/*function yrsel(y) {
    populate(year, month);
} */

//Returns English month name from 
function numToMonth (m) {
    let strmonth;
    switch (m) {
        case 1: strmonth = "January"; break;
        case 2: strmonth = "February"; break;
        case 3: strmonth = "March"; break;
        case 4: strmonth = "April"; break;
        case 5: strmonth = "May"; break;
        case 6: strmonth = "June"; break;
        case 7: strmonth = "July"; break;
        case 8: strmonth = "August"; break;
        case 9: strmonth = "September"; break;
        case 10: strmonth = "October"; break;
        case 11: strmonth = "November"; break;
        case 12: strmonth = "December"; break;
        default: strmonth = "undefined";
    }

    return strmonth;
}

// Returns month number from English month name input
function monthToNum (m) {
    let intmonth;
     switch (m) {
        case 'January': intmonth = 1; break;
        case 'February': intmonth = 2; break;
        case 'March': intmonth = 3; break;
        case 'April': intmonth = 4; break;
        case 'May': intmonth = 5; break;
        case 'June': intmonth = 6; break;
        case 'July': intmonth = 7; break;
        case 'August': intmonth = 8; break;
        case 'September': intmonth = 9; break;
        case 'October': intmonth = 10; break;
        case 'November': intmonth = 11; break;
        case 'December': intmonth = 12; break;
        default: intmonth = null;
    };
    
    return intmonth;
}


//
function populate(y, m) {
    /*
    // TODO as in `setCalendar` (might be easiest to populate feasts for all days)
    // TODO call `setCalendar` as part of function call
    // TODO call `feastsByDay` iteratively through calendar
    */
}

// Called by `populate` to set calendar numbers (i.e. the inset that says which day of the month it is); separated for readability
function setCalendar() {
    let dayOne = new Date(month+" 1, "+year+" 00:00:00");
    let dayRel = dayOne.getDay();

    /* TODO use https://stackoverflow.com/questions/3065342/how-do-i-iterate-through-table-rows-and-cells-in-javascript to iterate through calendar table (may need to create elements for cell numbers) (might be easiest to populate numbers for all days, but would have to make numbers of selected month darker than others for emphasis) */
    // TODO figure out how to make inset do 23/30, 24/30, and 24/31

    // TODO add "data-date" attribute to each day of calendar (js Date object) to be used by `feastsByDay`

}

function feastsByDay(d) {
    // `d` is a Date object
    // Convert `d` into moveable feast format to search CSV
    let relweeks;
    let reldays = d.getDay();

    // Determine if date falls before or after the First Sunday of Advent of the previous year (if date is between January 1st and November 26th, or of the current year if date is between November 27th and December 31st)
    // This will determine which liturgical year the date falls in, and therefore whether `relweeks` is positive or negative (negative if after First Sunday of Advent, positive if before)

    var dy = d.getDate();
    var mo = d.getMonth() + 1;
    var yr = d.getFullYear();
    var relDays = d.getDate();
    var chr; // Christmas
    var advI; // First Sunday of Advent
    var pasc; // Easter

    if (mo < 11 && dy < 27) {
        var psm = easter.find(easter.year == yr).month; // Month of Easter
        var psd = easter.find(easter.year == yr).day; // Day of Easter
        var psno = psd * (psm + 1); // Day of Easter in year
        var numDay = dy * mo;

        if  (numDay < psno) {
            var relWeeks = Math.floor((psno - numDay) / 7);

        }

        /*
        XXX FIXME TODO XXX
        I have a lot of ideas about potential ways to get what is needed. Basically `populate` will pass each visible day to `feastsByDay`, using the special attribute "data-date" which will be assigned by `setCalendar`. `populate` will pass the Date object iteratively to `feastsByDay` as a Date object `d` (see above). `feastsByDay` must convert `d` into two searchable formats. For moveable feasts, `d` should be converted to an array of [relWeeks, relDays] and then probably use jQuery's grep in the CSV to return the feasts which fall on that day.

        For fixed feasts, I will need `d` to be converted to a string containing the month in hex (1 for January, C for December) and the day in decimal. Then grep fx.csv for that string in the ID column .

        For now, both should just return the entire line for ease of use, and have it injected as plaintext into the table. Will need to set up another function to parse the CSV data into human-readable format (see below).
        */
    }
    if (mo == 11 && dy > 3) {
      
    }
    else {

    }

   

    
    // TODO search fx and mv CSVs for all relevant feasts
    // TODO prioritize all feasts (no more than 6 on any day, I determined)
    // TODO return all feasts that should be and only those feasts
    // TODO return abstinence flag along with feasts when appropriate
}

/* XXX OTHER ITEMS STILL MISSING XXX
    TODO Need to figure out how to handle Ember Days
    TODO Convert CSV data into human-readable format within calendar table
    TODO For now, every Friday will have the abstinence flag. Need to figure out how to handle non-Fridays which require abstinence, and Fridays that do not require abstinence.
*/