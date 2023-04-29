var team_name = localStorage['team-name']
document.getElementById("team-name").innerHTML =
    "<b>Team name:</b><br> " + team_name;

var sec= 600*3,
countDiv= document.getElementById("timer"),
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
// Get the modal
var machine1_dialog = document.getElementById("machine1_dialog");
var machine2_dialog = document.getElementById("machine2_dialog");
var machine3_dialog = document.getElementById("machine3_dialog");
var instruction_dialog = document.getElementById("instruction_dialog");
// Get the button that opens the modal
var machine1_btn = document.getElementById("machine1");
var machine2_btn = document.getElementById("machine2");
var machine3_btn = document.getElementById("machine3");
var instruction_btn = document.getElementById("instruction");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal
machine1_btn.onclick = function() {
    machine1_dialog.style.display = "block";
}
machine2_btn.onclick = function() {
    machine2_dialog.style.display = "block";
}
machine3_btn.onclick = function() {
    machine3_dialog.style.display = "block";
}
instruction_btn.onclick = function() {
    instruction_dialog.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    machine1_dialog.style.display = "none";
    machine2_dialog.style.display = "none";
    machine3_dialog.style.display = "none";
}
span2.onclick = function() {
    machine1_dialog.style.display = "none";
    machine2_dialog.style.display = "none";
    machine3_dialog.style.display = "none";
}
span3.onclick = function() {
    machine1_dialog.style.display = "none";
    machine2_dialog.style.display = "none";
    machine3_dialog.style.display = "none";
}
span4.onclick = function() {
    instruction_dialog.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target === machine1_dialog) {
        machine1_dialog.style.display = "none";
    }else  if (event.target === machine2_dialog) {
        machine2_dialog.style.display = "none";
    }else if (event.target === machine3_dialog) {
        machine3_dialog.style.display = "none";
    } else if(event.target === instruction_dialog){
        instruction_dialog.style.display = "none";
    }
}

document.getElementById("submit_key_machine1").onclick = ()=> {
    var text = document.getElementById("clue-text").innerText;
    var key = document.getElementById("key_hint_machine1").value;
    if(key === "17"){
        document.getElementById("clue-text").innerText =
            "Ray Tomlinson developed Email in the 20th century, when year (YY) is added to its next consecutive prime number, it becomes square of 12. Folder can’t be made with a name whose volume is one-third of the volume of a cylinder. The Indian, who  won the highest award, born in Andhra Pradesh, his name reflects as he is an aristocrat but he belongs to a farmer family. I am a fruit, rooted from the garage and now I am a big tech giant. It is twice  the worst torture inflicted by Indian police."
    } else {
        decryptMachine1();
    }
    machine1_dialog.style.display = "none";
}
document.getElementById("submit_key_machine2").onclick = ()=> {
    decryptMachine2();
    machine2_dialog.style.display = "none";
}
document.getElementById("submit_key_machine3").onclick = ()=> {
    decryptMachine3();
    machine3_dialog.style.display = "none";
}

document.getElementById("restore").onclick =()=> {
    document.getElementById("clue-text").innerText =
        "Vec Xsqpmrwsr hizipstih Iqemp mr xli 20xl girxyvc, alir ciev (CC) mw ehhih xs mxw ribx gsrwigyxmzi tvmqi ryqfiv, mx figsqiw wuyevi vssx sj 12. Jsphiv ger’x fi qehi amxl e reqi alswi zspyqi mw sri-xlmvh sj xli zspyqi sj e gcpmrhiv. Xli Mrhmer, als  asr xli lmkliwx eaevh, fsvr mr Erhlve Tvehiwl, lmw reqi vijpigxw ew li mw er evmwxsgvex fyx li fipsrkw xs e jevqiv jeqmpc. M eq e jvymx, vssxih jvsq xli keveki erh rsa M eq e fmk xigl kmerx. Mx mw xamgi  xli asvwx xsvxyvi mrjpmgxih fc Mrhmer tspmgi."
}

//decrypt additive cipher
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

//decrypt multiplicative cipher
function decryptMachine2() {
    var text = document.getElementById("clue-text").innerText;
    var key = document.getElementById("key_hint_machine2").value;
    console.log("decrypt multiplicative cipher",text,key);
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            result += String.fromCharCode((c - 65) * parseInt(key) % 26 + 65);
        }else if (c >= 97 && c <= 122) {
            result += String.fromCharCode((c - 97) * parseInt(key) % 26 + 97);
        }else {
            result += text.charAt(i);
        }
    }
    console.log(result);
    document.getElementById("clue-text").innerText = result;
}

//decrypt rail fence cipher
function decryptMachine3() {
    var text = document.getElementById("clue-text").innerText;
    var key = document.getElementById("key_hint_machine3").value;
    console.log("decrypt rail fence cipher",text,key);
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            result += String.fromCharCode((c - 65 + parseInt(key)) % 26 + 65);
        }else if (c >= 97 && c <= 122) {
            result += String.fromCharCode((c - 97 + parseInt(key)) % 26 + 97);
        }else {
            result += text.charAt(i);
        }
    }
    console.log(result);
    document.getElementById("clue-text").innerText = result;
}