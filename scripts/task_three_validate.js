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
    window.location = "../pages/final_page.html"
}


function checkQuestion1() {
    const data = document.querySelector('input[name="option_question_1"]:checked');
    if (data === null) {
        console.log("Not selected any option");
    } else if (data.value === "Xerox") {
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
    } else if (data.value === "Third generation") {
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
    } else if (data.value === "Turing award") {
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
    } else if (data.value === "Microsoft") {
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
    } else if (data.value === "Germany") {
        console.log("Correct Option");
        score = score + 2;
    } else {
        console.log("Wrong Option");
        score = score - 1;
    }
}
