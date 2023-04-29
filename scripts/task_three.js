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
        validate();
        window.location = "../pages/final_page.html"
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

document.getElementById("submit_key_machine1").onclick = ()=> {
    var text = document.getElementById("clue-text").innerText;
    var key = document.getElementById("key_hint_machine1").value;
    if(key === "32"){
        document.getElementById("clue-text").innerText =
            "He is known as the father of modern computer  and in his name the highest prize of computer science is given. “Dynabook”, the first GUI  invented by an American company in the early 1970s. IC and high level language were introduced in this generation. It is a European country and Leopard 2 tank belong to it. GitHub and LinkedIn are both owned by the same company."
    } else {
        decryptMachine1();
    }
    machine1_dialog.style.display = "none";
}

document.getElementById("restore").onclick =()=> {
    document.getElementById("clue-text").innerText =
        "Nk oy qtuct gy znk lgznkx ul sujkxt iusvazkx  gtj ot noy tgsk znk nomnkyz vxofk ul iusvazkx yioktik oy mobkt. “Jetghuuq”, znk loxyz MAO  otbktzkj he gt Gskxoigt iusvgte ot znk kgxre 1970y. OI gtj nomn rkbkr rgtmagmk ckxk otzxujaikj ot znoy mktkxgzout. Oz oy g Kaxuvkgt iuatzxe gtj Rkuvgxj 2 zgtq hkrutm zu oz. MozNah gtj RotqkjOt gxk huzn uctkj he znk ygsk iusvgte."
}

function decryptMachine1() {
    var text = document.getElementById("clue-text").innerText;
    var key = document.getElementById("key_hint_machine1").value;
    console.log("decrypt additive cipher",text,key);
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            result += String.fromCharCode((c - 65 - parseInt(key)) % 26 + 65);
        }else if (c >= 97 && c <= 122) {
            result += String.fromCharCode((c - 97 - parseInt(key)) % 26 + 97);
        }else {
            result += text.charAt(i);
        }
    }
    console.log(result);
    document.getElementById("clue-text").innerText = result;
}