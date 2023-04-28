var team_name = localStorage['team-name']
document.getElementById("team-name").innerHTML =
    "<b>Team name:</b><br> " + team_name;

var time = localStorage['time'];
time = parseInt(time);
console.log(time)
var h3 = document.getElementsByTagName("h3");
var sec         = time,
    countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';
        
        secpass();
    }, 1000);

function secpass() {
    'use strict';
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    if (min < 10) {
        
        min = '0' + min;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
    
    if (sec > 0) {
        
        sec = sec - 1;
        
    } else {
        clearInterval(countDown);
        countDiv.innerHTML = 'countdown done';
        window.location = "../pages/task_three.html"
    }
}
var machine1_dialog = document.getElementById("machine1_dialog");
var instruction_dialog = document.getElementById("instruction_dialog");

var machine1_btn = document.getElementById("machine1");
var instruction_btn = document.getElementById("instruction");

var span = document.getElementsByClassName("close")[0];

var span1 = document.getElementsByClassName("close")[1];

machine1_btn.onclick = function() {
    machine1_dialog.style.display = "block";
}

instruction_btn.onclick = function() {
    instruction_dialog.style.display = "block";
}

span.onclick = function() {
    machine1_dialog.style.display = "none";
}

span1.onclick = function() {
    instruction_dialog.style.display = "none";
}

window.onclick = function(event) {
     if (event.target === instruction_dialog) {
        instruction_dialog.style.display = "none";
    } else if (event.target === machine1_dialog) {
        machine1_dialog.style.display = "none";
    }
}