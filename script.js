//=============CONSTANTS=============//
//CONST TO START GAME
const welcomeScreen = document.getElementById('welcomeScreen');
const questionScreen = document.getElementById('questionScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const highScoresScreen = document.getElementById("highScoresScreen");
//CONST FOR TIMER
const timerEl = document.getElementById('timer');
const secondsLeftEl = document.getElementById('seconds');
var timerInterval;
var timeRemaining = 100;

//CONST FOR BUTTONS
const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
const restartButton = document.getElementById('restartButton');
//CONST FOR RADIO BUTTONS
const radioButtons = document.querySelectorAll('input[type="radio"]')
//CONST FOR SCORE
let currentScore = 0;
const playersInitials = document.getElementById("playersInitials");
const highScoresTable = document.getElementById("highScoresTable");

//CONST FOR QUIZ QUESTIONS
const quizContainer = document.getElementById("quizContainer");
const optionA = document.getElementById("a");
const optionB = document.getElementById("b");
const optionC = document.getElementById("c");
const optionD = document.getElementById("d");

let currentQuestion = 0;

const quizQuestions = [
    {
        question: "Q1: What is the most common disease on a pirate ship?",
        answers: {
            a: "Scurvy",
            b: "Pox",
            c: "Rickets",
            d: "Sepsis"
        },
        correctAnswer: 'a',
    },
    {
        question: "Q2: What is a group of pandas known as?",
        answers: {
            a: "a mischief",
            b: "am embarassment",
            c: "a muster",
            d: "a conventicle"
        },
        correctAnswer: 'b',
    },
    {
        question: "Q3: What is a frog?",
        answers: {
            a: "a reptile",
            b: "an amphibian",
            c: "part of a horse hoof",
            d: "B & C"
        },
        correctAnswer: 'd',
    }
];

//=============FUNCTIONS=============//

function startGame() {
    //change css to visible all else to hidden
    welcomeScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    timerEl.classList.remove('invisible');
    secondsLeftEl.textContent = timeRemaining;
    startTimer();
    populateQuestions();
}

function populateQuestions() {
    radioButtons.forEach((radioButton) => { radioButton.checked = false })
    quizContainer.textContent = quizQuestions[currentQuestion].question;
    //loop for answer options
    optionA.textContent = quizQuestions[currentQuestion].answers.a;
    optionB.textContent = quizQuestions[currentQuestion].answers.b;
    optionC.textContent = quizQuestions[currentQuestion].answers.c;
    optionD.textContent = quizQuestions[currentQuestion].answers.d;
    console.log("am i getting populated?")

}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--
        secondsLeftEl.textContent = timeRemaining;
        if (timeRemaining <= 0) {
            endGame();
        }
    }, 1000);

}

function evaluateAnswer() {
    console.log("Am i getting evaluated?")
    let userChoice;
    questionScreen.querySelectorAll('label').forEach((label) => { if (label.previousElementSibling.checked) { userChoice = label.id } })
    if (quizQuestions[currentQuestion].correctAnswer == userChoice) { currentScore += 10 };
    nextQuestion();
}

function nextQuestion() {
    console.log("where is my next question?")
    currentQuestion++;
    if (currentQuestion >= quizQuestions.length) {
        endGame();
    }
    else populateQuestions();
}

function endGame() {
    questionScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    clearInterval(timerInterval);
    //add time remaining to current score
    currentScore += timeRemaining;
    console.log(currentScore);
}


function saveInitials(event) {
    event.preventDefault();
    let initials = playersInitials.value;
    var highScoreData = [
        {initials: initials, score: currentScore}
    ];
    window.localStorage.setItem('scoreHistory', JSON.stringify(highScoreData));
    displayHighScores();
}

function displayHighScores() {
    var storedHighScores = JSON.parse(localStorage.getItem('scoreHistory'))
    highScoresScreen.classList.remove('hidden')
    gameOverScreen.classList.add('hidden');
    for ( let i = 0; i < storedHighScores.length; i++){
        var row = highScoresTable.insertRow(i);
        var initialsCol = row.insertCell(0);
        var scoreCol = row.insertCell(1);
        initialsCol.innerHTML = storedHighScores[i].initials;
        scoreCol.innerHTML = storedHighScores[i].score;
    }

}

function newGame(event) {
    event.returnValue = true;
    welcomeScreen.classList.remove('hidden');
    highScoresScreen.classList.add('hidden')
    gameOverScreen.classList.add('hidden');
    questionScreen.classList.add('hidden');
    timerEl.classList.add('invisible');
    document.getElementById('playersInitials').value = ''
    currentQuestion = 0;
    currentScore = 0;
    timeRemaining = 100;

}

nextButton.addEventListener('click', evaluateAnswer);
startButton.addEventListener('click', startGame);
submitInitials.addEventListener('submit', saveInitials);
restartButton.addEventListener('click', newGame);

