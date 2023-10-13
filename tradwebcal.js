var year;
var month;
var strmonth;

function setToday() {
    const today = new Date();
    month = today.getMonth() + 1;
    year = today.getFullYear();
    switch (month) {
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
    };

    document.getElementById("btnyear").innerHTML = year;
    document.getElementById("btnmonth").innerHTML = strmonth;
}

function mthsel(m) {
    document.getElementById("btnmonth").innerHTML = m;
    strmonth = m;
    switch (m) {
        case 'January': month = 1;
        case 'February': month = 2;
        case 'March': month = 3;
        case 'April': month = 4;
        case 'May': month = 5;
        case 'June': month = 6;
        case 'July': month = 7;
        case 'August': month = 8; 
        case 'September': month = 9;
        case 'October': month = 10;
        case 'November': month = 11;
        case 'December': month = 12;
    }
}

/*function yrsel(y) {

} */