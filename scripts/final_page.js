var team_name = localStorage['team-name']
var contact = localStorage['contact']

var score = localStorage['score'] || 0;
score = parseInt(score);
console.log(score)
document.getElementById('final-score').innerText = score;