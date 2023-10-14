var year;
var month;
var monthName;

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

// Called by `populate` to set calendar numbers; separated for readability
function setCalendar {
    let dayOne = new Date(month+" 1, "+year+" 00:00:00");
    let weekdayOne.getDay();

    // TODO use https://stackoverflow.com/questions/3065342/how-do-i-iterate-through-table-rows-and-cells-in-javascript to iterate through calendar table (may need to create elements for cell numbers) (might be easiest to populate numbers for all days, but would have to make numbers of selected month darker than others for emphasis)

}

function feastsByDay (d) {
    // TODO convert `d` into a format which can search CSV files more easily
    // TODO search fx and mv CSVs for all relevant feasts
    // TODO prioritize all feasts (no more than 6 on any day, I determined)
    // TODO return all feasts that should be and only those feasts
    // TODO return abstinence flag along with feasts when appropriate
}