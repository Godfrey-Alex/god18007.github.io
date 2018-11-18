var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Preston,us&APPID=ad69af2b4f916ee4336e2bd53cd5ffa5&units=imperial';
var weatherRequest = new XMLHttpRequest();
        
weatherRequest.open('GET', requestURL);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {    
        var weather = weatherRequest.response;
        var temperature = weather.main.temp;               
        var windSpeed = weather.wind.speed;        
        var windChill= (35.74) + (0.6215*weather.main.temp) - (35.75*(Math.pow(weather.wind.speed, .16))) + .4275*weather.main.temp*(Math.pow(weather.wind.speed, .16));

    document.getElementById("windChill").innerHTML = "Wind Chill: " + windChill.toFixed(1)+"&#8457;";     

}


