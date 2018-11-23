var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Preston,us&APPID=0ce07ace7e20b6f20a0fae73da80c241&units=imperial';
var weatherRequest = new XMLHttpRequest();
        
weatherRequest.open('GET', requestURL);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
        var weather = weatherRequest.response; 

        var newUrl = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";        

        document.getElementById("currentconditionsURL").src = newUrl;
        document.getElementById("currentconditionsIconword").innerHTML = weather.weather[0].description;
        document.getElementById("currentSky").innerHTML = "Currently: " + weather.weather[0].description;
        document.getElementById("currentTemp").innerHTML = "Temperature: " + weather.main.temp +"&#8457;";
        document.getElementById("currentHumidity").innerHTML = "Humidity: " + weather.main.humidity +"%";
        document.getElementById("currentPrecipitation").innerHTML = "Precipitation: 0 inches";
        document.getElementById("currentWindspeed").innerHTML = "Wind Speed: " + weather.wind.speed +"mph";

    }