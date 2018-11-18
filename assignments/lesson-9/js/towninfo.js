var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var townRequest = new XMLHttpRequest();
        
townRequest.open('GET', requestURL);
townRequest.responseType = 'json';
townRequest.send();



townRequest.onload = function () {
        var town = townRequest.response;        

        document.getElementById("sfmotto").innerHTML = town.towns[6].motto;
        document.getElementById("sffounded").innerHTML = "Year Founded: " +town.towns[6].yearFounded;
        document.getElementById("sfpopulation").innerHTML = "Population: " + town.towns[6].currentPopulation;
        document.getElementById("sfrf").innerHTML = "Annual Rain: " +  town.towns[6].averageRainfall +"\"";
        document.getElementById("pmotto").innerHTML = town.towns[3].motto;
        document.getElementById("pfounded").innerHTML =  "Year Founded: " + town.towns[3].yearFounded;
        document.getElementById("ppopulation").innerHTML =  "Population: " +  town.towns[3].currentPopulation;
        document.getElementById("parf").innerHTML = "Annual Rain: " +  town.towns[3].averageRainfall +"\"";
        document.getElementById("gmotto").innerHTML = town.towns[2].motto;
        document.getElementById("gfounded").innerHTML =  "Year Founded: " + town.towns[2].yearFounded;
        document.getElementById("gpopulation").innerHTML =  "Population: " +  town.towns[2].currentPopulation;
        document.getElementById("garf").innerHTML = "Annual Rain: " +  town.towns[2].averageRainfall +"\"";
    }