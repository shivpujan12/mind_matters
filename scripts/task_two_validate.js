var score = localStorage['score'] || 0;
score = parseInt(score);
console.log(score)
function validate() {
    checkQuestion1();
    checkQuestion2();
    checkQuestion3();
    checkQuestion4();
    checkQuestion5();
    console.log("Your score is: " + score);
    localStorage['score'] = score;
    localStorage['time'] = sec;
    window.location = "../pages/task_three.html";
}


function checkQuestion1() {
    const data = document.querySelector('input[name="option_question_1"]:checked');
    if (data === null) {
        console.log("Not selected any option");
    } else if (data.value === "FORmula TRANslation") {
        console.log("Correct Option");
        score = score + 2;
    } else {
        console.log("Wrong Option");
        score = score - 1;

    }
}

function checkQuestion2() {
    const data = document.querySelector('input[name="option_question_2"]:checked');
    if (data === null) {
        console.log("Not selected any option");
    } else if (data.value === "R") {
        console.log("Correct Option");
        score = score + 2;
    } else {
        console.log("Wrong Option");
        score = score - 1;

    }
}

function checkQuestion3() {
    const data = document.querySelector('input[name="option_question_3"]:checked');
    if (data === null) {
        console.log("Not selected any option");
    } else if (data.value === "Rust") {
        console.log("Correct Option");
        score = score + 2;
    } else {
        console.log("Wrong Option");
        score = score - 1;

    }
}

function checkQuestion4() {
    const data = document.querySelector('input[name="option_question_4"]:checked');
    if (data === null) {
        console.log("Not selected any option");
    } else if (data.value === "a") {
        console.log("Correct Option");
        score = score + 2;
    } else {
        console.log("Wrong Option");
        score = score - 1;
    }
}

function checkQuestion5() {
    const data = document.querySelector('input[name="option_question_5"]:checked');
    if (data === null) {
        console.log("Not selected any option");
    } else if (data.value === "LISP") {
        console.log("Correct Option");
        score = score + 2;
    } else {
        console.log("Wrong Option");
        score = score - 1;
    }
}
