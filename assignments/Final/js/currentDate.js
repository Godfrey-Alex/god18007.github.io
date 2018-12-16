var d = new Date();
var day = d.getDay();
var numDay = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var abvweekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
"November", "December"];

var fullDay = weekday[day] +", " + numDay + " " + monthname[month] + " " + year; 

var fullFooter = "&copy; 2020 The Temple & Suites Inn | Alex F. Godfrey | " + fullDay;

document.getElementById("footerInfo").innerHTML = fullFooter;

function toggleHam() {    
    document.getElementById("mobilenav").classList.toggle("hide");    
}

var today = day;
var day1;
var day2;
var day3;
var day4;

if(day +1 >= 7){
    day1 = day + 1 - 7;   
}else{
    day1 = day +1;
}

if(day1 +1 >= 7){
    day2 = day1 + 1 - 7;   
}else{
    day2 = day1 +1;
}

if(day2 +1 >= 7){
    day3 = day2 + 1 - 7;   
}else{
    day3 = day2 +1;
}

if(day3 +1 >= 7){
    day4 = day3 + 1 - 7;   
}else{
    day4 = day3 +1;
}

//document.getElementById("today").innerHTML = abvweekday[day];
//document.getElementById("todayplus1").innerHTML = abvweekday[day1];
//document.getElementById("todayplus2").innerHTML = abvweekday[day2];
//document.getElementById("todayplus3").innerHTML = abvweekday[day3];
//document.getElementById("todayplus4").innerHTML = abvweekday[day4];