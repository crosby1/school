/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 11
   Review Assignment

   Author: Jason Graham
   Date:   9-30-16

Function List:
showDateTime(time)
Returns the date in a text string formatted as:
mm/dd/yyyy at hh:mm:ss am

changeYear(today, holiday)
Changes the year value of the holiday object to point to the
next year if it has already occurred in the present year

countdown(stop, start)
Displays the time between the stop and start date objects in the
text format:
dd days, hh hrs, mm mins, ss secs
*/

function showDateTime(time) {
    date = time.getDate();
    month = time.getMonth() + 1;
    year = time.getFullYear();

    second = time.getSeconds();
    minute = time.getMinutes();
    hour = time.getHours();

    ampm = (hour < 12) ? " a.m." : " p.m.";
    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour == 0) ? 12 : hour;

    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    return month + "/" + date + "/" + year + " at " + hour + ":" + minute + ":" + second + ampm;
}

function changeYear(today, holiday) {
    var year = today.getFullYear();
    holiday.setFullYear(year);
    year = (today > holiday) ? year + 1 : year;
    year = holiday.setFullYear(year);
}

function countdown(start, stop) {
    time = stop - start;
    var rawdays = ((time) / (1000 * 60 * 60 * 24));
    days = Math.floor(rawdays); 
    var rawhours = ((rawdays - days) * 24) - 1;
    hours = Math.floor(rawhours);
    var rawminutes = (rawhours - hours) * 60;
    minutes = Math.floor(rawminutes);
    var rawseconds = ((rawminutes - minutes) * 60) + 1;
    seconds = Math.floor(rawseconds);

    return days + " days, " + hours + " hours, " + minutes + " mins, " + seconds + " secs";
}
