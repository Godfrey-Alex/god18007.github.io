var parisRequestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=0ce07ace7e20b6f20a0fae73da80c241&units=imperial';
var parisRequest = new XMLHttpRequest();        
parisRequest.open('GET', parisRequestURL);
parisRequest.responseType = 'json';
parisRequest.send();
parisRequest.onload = function () {
        var weather = parisRequest.response; 
        document.getElementById("parisWeather").innerHTML = "Current Weather: " + weather.weather[0].description; 
        document.getElementById("parisTemp").innerHTML = "Current Temp: " + weather.main.temp +"&#8457;"; 
    }

var swissRequestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Zurich,ch&APPID=ad69af2b4f916ee4336e2bd53cd5ffa5&units=imperial';
var swissRequest = new XMLHttpRequest();            
swissRequest.open('GET', swissRequestURL);
swissRequest.responseType = 'json';
swissRequest.send();    
swissRequest.onload = function () {
            var weather = swissRequest.response; 
            document.getElementById("swissWeather").innerHTML = "Current Weather: " + weather.weather[0].description; 
            document.getElementById("swissTemp").innerHTML = "Current Temp: " + weather.main.temp +"&#8457;"; 
        }         

var nethRequestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl&APPID=eab640531f70eb2a6688f8905600fef4&units=imperial';
var nethRequest = new XMLHttpRequest();                    
nethRequest.open('GET', nethRequestURL);
nethRequest.responseType = 'json';
nethRequest.send();            
nethRequest.onload = function () {
        var weather = nethRequest.response;     
        document.getElementById("nethWeather").innerHTML = "Current Weather: " + weather.weather[0].description; 
        document.getElementById("nethTemp").innerHTML = "Current Temp: " + weather.main.temp +"&#8457;"; 
    }

var GermanyRequestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Frankfurt,de&APPID=494159b2950d172bd71043e4dab7679c&units=imperial';
var GermanyRequest = new XMLHttpRequest();                    
GermanyRequest.open('GET', GermanyRequestURL);
GermanyRequest.responseType = 'json';
GermanyRequest.send();            
GermanyRequest.onload = function () {
        var weather = GermanyRequest.response;     
        document.getElementById("germanyWeather").innerHTML = "Current Weather: " + weather.weather[0].description; 
        document.getElementById("germanyTemp").innerHTML = "Current Temp: " + weather.main.temp +"&#8457;"; 
    }
