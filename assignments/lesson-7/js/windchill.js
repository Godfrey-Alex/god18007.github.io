//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16  
/*
 <p>
                Currently: Cloudy</br>
                Temperature: 76 F</br>
                Humidity: 70%</br>
                Precipitation: 5 inches</br>
                Wind Speed: 10 mph
                Wind Chill: 
            </p>
*/

var temp = 76;
var windSpeed = 10;
var windChill= (35.74) + (0.6215*temp) - (35.75*(Math.pow(windSpeed, .16))) + .4275*temp*(Math.pow(windSpeed, .16));


document.getElementById("windChill").innerHTML = "Wind Chill: " + windChill.toFixed(1)+"&#8457;";


//windchill