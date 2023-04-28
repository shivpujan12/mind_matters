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