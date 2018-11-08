

var temp = 76;
var windSpeed = 10;
var windChill= 35.74 + (0.6215*temp) - (35.75*Math.pow(.16,windSpeed)) + .4275*temp*Math.pow(.16,windSpeed);

document.getElementById("windChill").innerHTML = "Wind Chill: " + windChill.toFixed(1)+"&#8457;";

