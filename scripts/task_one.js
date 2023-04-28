var team_name = localStorage['team-name']
document.getElementById("team-name").innerHTML =
    "<b>Team name:</b><br> " + team_name;

var sec= 300*5,
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
    if(key === "149"){
        document.getElementById("clue-text").innerText =
            "Charles Babbage, an English mechanical engineer and polymath, originated the concept" +
            " of a programmable computer. Considered the \"father of the computer\", he conceptualized" +
            " and invented the first mechanical computer in the early 19th century. After working on his" +
            " revolutionary difference engine, designed to aid in navigational calculations, in 1833 he realized" +
            " that a much more general design, an Analytical Engine, was possible. The input of programs and data" +
            " was to be provided to the machine via punched cards," +
            " a method being used at the time to direct mechanical looms such as the Jacquard loom." +
            " For output, the machine would have a printer, a curve plotter and a bell." +
            " The machine would also be able to punch numbers onto cards to be read in later." +
            " The Engine incorporated an arithmetic logic unit, control flow in the form of conditional branching and loops, " +
            "and integrated memory, making it the first design for a general-purpose computer" +
            " that could be described in modern terms as Turing-complete"
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
        "Syakikg Wawwack, aa Kaciugy eksyaausai kacuakkk aao" +
        " swiieacy, wkucuaacko cyk swasksc wg a skwckaeeawik " +
        "swesyckk. Swaguokkko cyk \"gacykk wg cyk swesyckk\", " +
        "yk swaskscyaiueko aao uaukacko cyk gukgc eksyaausai swesyckk " +
        "ua cyk kakii 19cy skacyki. Agckk qwkmuac wa yug kkuwiycuwaaki ouggkkkask " +
        "kacuak, okgucako cw auo ua aauucacuwaai saisyiacuwag, ua 1833 yk kkaiueko cyac " +
        "a eysy ewkk ckakkai okguca, aa Aaaiicusai Kacuak, qag swgguwik. Cyk uasyc " +
        "wg skwckaeg aao oaca qag cw wk skwuuoko cw cyk easyuak uua syasyko sakog, a" +
        " ekcywo wkuac ygko ac cyk cuek cw oukksc eksyaausai iwweg gysy ag cyk Qasoyako" +
        " iwwe. Gwk wycsyc, cyk easyuak qwyio yauk a skuackk, a sykuk siwcckk aao a wkii." +
        " Cyk easyuak qwyio aigw wk awik cw syasy ayewkkg wacw sakog cw wk kkao ua iackk. " +
        "Cyk Kacuak uaswkswkacko aa akucyekcus iwcus yauc, swackwi giwq ua cyk gwke wg " +
        "swaoucuwaai wkaasyuac aao iwwsg, aao uackckacko ekewki, eamuac uc cyk gukgc okguca " +
        "gwk a ckakkai-sykswgk swesyckk cyac swyio wk okgskuwko ua ewokka ckkeg ag Cykuac-swesikck"
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