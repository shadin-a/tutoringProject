//CONST TO START GAME
const startButton = document.getElementById('startButton');
const welcomeScreen = document.getElementById('welcomeScreen');
const questionScreen = document.getElementById('questionScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const timerEl = document.getElementById('timer');

//CONST FOR NEXT QUESTIONS
const nextButton = document.getElementById('nextButton');
//CONST FOR QUIZ QUESTIONS
const quizContainer = document.getElementById("quizContainer");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const optionD = document.getElementById("D");

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
function startGame() {
    //change css to visible all else to hidden
    welcomeScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    timerEl.classList.remove('invisible');

    startTimer();
    populateQuestions();
}

function populateQuestions() {

    quizContainer.textContent = quizQuestions[currentQuestion].question;
    optionA.textContent = quizQuestions[currentQuestion].answers.a;
    optionB.textContent = quizQuestions[currentQuestion].answers.b;
    optionC.textContent = quizQuestions[currentQuestion].answers.c;
    optionD.textContent = quizQuestions[currentQuestion].answers.d;
    console.log('questions show up here');

    //loop for answer options
}

function startTimer() {
    //find countdown timer js
    console.log("to-do: start timer")
}

function nextQuestion() {
    console.log("where is my next question?")
    currentQuestion++;
    if (currentQuestion >= quizQuestions.length) {
        endGame();
    }
    else populateQuestions();
}

function endGame(){
    //stop timer
questionScreen.classList.add('hidden');
gameOverScreen.classList.remove('hidden');

}

nextButton.addEventListener('click', nextQuestion);
startButton.addEventListener('click', startGame);

