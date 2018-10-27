var d = new Date();
var day = d.getDay();
var numDay = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
"November", "December"];

var fullDay = weekday[day] +", " + numDay + " " + monthname[month] + " " + year; 

var fullFooter = "&#9400; 2020 The Nerdy Weather site |Attribution | Alex F. Godfrey | " + fullDay;

document.getElementById("dateFooter").innerHTML = fullFooter;

function toggleHam() {    
    document.getElementById("mobilenav").classList.toggle("hide");    
}
