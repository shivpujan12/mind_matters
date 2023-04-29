var team_name = localStorage['team-name']
var contact = localStorage['contact']


document.getElementById('data').innerHTML =
    "<b>Team name:  " + team_name + "<br>" +
    "<b>Contact: " + contact;

var machine3_dialog = document.getElementById("machine3_dialog");
var machine3_btn = document.getElementById("get_score");
var span = document.getElementsByClassName("close")[0];
machine3_btn.onclick = function () {
    machine3_dialog.style.display = "block";
}

span.onclick = function () {
    machine3_dialog.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === machine3_dialog) {
        machine3_dialog.style.display = "none";
    }
}

document.getElementById("submit_key_machine3").onclick = () => {
    var key = document.getElementById("key_hint_machine2").value;
    if (key === "2023") {
        var score = localStorage['score'] || 0;
        score = parseInt(score);
        console.log(score)
        document.getElementById('final-score').innerText = score;
    }
    machine3_dialog.style.display = "none";
}