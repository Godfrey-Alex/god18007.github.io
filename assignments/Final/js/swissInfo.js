var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Bern,ch&APPID=ad69af2b4f916ee4336e2bd53cd5ffa5&units=imperial';
var weatherRequest = new XMLHttpRequest();
        
weatherRequest.open('GET', requestURL);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
        var weather = weatherRequest.response;  

        alert('swiss');

        document.getElementById("swissWeather").innerHTML = "Current Weather: " + weather.weather[0].description; 
        document.getElementById("swissTemp").innerHTML = "Current Temp: " + weather.main.temp +"&#8457;"; 
    }