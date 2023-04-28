console.log("Hello world!");
var score = localStorage['score'] || 0;
score = parseInt(score);
console.log(score)
document.getElementById('final-score').innerText = score;