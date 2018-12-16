var closureRequestURL = 'https://god18007.github.io/assignments/Final/json/templeclosure.json';
var closureRequest = new XMLHttpRequest();        
closureRequest.open('GET', closureRequestURL);
closureRequest.responseType = 'json';
closureRequest.send();
closureRequest.onload = function () {
        var closure = closureRequest.response;         

        var parisClosures = closure[0].closures;
        var swissClosures = closure[1].closures;
        var netherlandsClosures = closure[2].closures;
        var frankfurtClosures = closure[3].closures;

        var paris = "<b>Closure Schedule:</b><br>";
        var swiss = "<b>Closure Schedule:</b><br>";
        var netherlands = "<b>Closure Schedule:</b><br>";
        var frankfurt = "<b>Closure Schedule:</b><br>";



        for (var i = 0 ; i<parisClosures.length; i++){
            paris += parisClosures[i] + "<br>";
        }
        document.getElementById("parisClosures").innerHTML = paris; 



        for (var i = 0 ; i<swissClosures.length; i++){
            swiss += swissClosures[i] + "<br>";
        }
        document.getElementById("swissClosures").innerHTML = swiss; 



        for (var i = 0 ; i<netherlandsClosures.length; i++){
            netherlands += netherlandsClosures[i] + "<br>";
        }
        document.getElementById("netherlandsClosures").innerHTML = netherlands; 



        for (var i = 0 ; i<frankfurtClosures.length; i++){
            frankfurt += frankfurtClosures[i] + "<br>";
        }
        document.getElementById("frankfurtClosures").innerHTML = frankfurt;          
    }