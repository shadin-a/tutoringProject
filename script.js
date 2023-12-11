const quizContainer = document.getElementById("quizContainer");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const optionD = document.getElementById("D");
const nextButton = document.getElementById("nextButton")
var quizQuestions = [
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
    }
];

function nextQuestion() {
for (let i = 0; i < quizQuestions.length; i++){
quizContainer.innerHTML = question[i],
quizContainer.innerHTML = question[i].answers.a,
quizContainer.innerHTML = question[i].answers.b,
quizContainer.innerHTML = question[i].answers.c,
quizContainer.innerHTML = question[i].answers.d;
}
}
nextButton.addEventListener('click', nextQuestion())