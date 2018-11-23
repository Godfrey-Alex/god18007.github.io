var requestURL = 'http://api.openweathermap.org/data/2.5/forecast?q=Preston,us&APPID=eab640531f70eb2a6688f8905600fef4&units=imperial';
var weatherRequest = new XMLHttpRequest();
        
weatherRequest.open('GET', requestURL);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
        var weather = weatherRequest.response;  
        
        //alert("temp test");       

        

    }