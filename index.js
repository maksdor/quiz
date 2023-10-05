let start = document.getElementById("start")
let main = document.getElementById("main")
let result = document.getElementById("result")

start.addEventListener("click", startProgramm)

let currentQuestion = 0
let countSuccess = 0
let allQuestions = [
    {
        question: "4+4=?",
        correct: 8,
        answers: [4,8,12,44, 22],
    },
    {
        question: "13+3=?",

        correct: 16,
        answers: [16,133,10],
    },
]

function startProgramm() {
    start.classList.add('none');
    main.classList.remove('none');
    result.classList.add('none')
    generateQuestion()
}

function generateQuestion() {
    let question = allQuestions[currentQuestion].question
    main.innerHTML = `<h1 class = "my-5" style="font-size:100px !important">${question}</h1>`

    let answers = allQuestions[currentQuestion].answers
    let btn_block = ' '
    for (let i of answers) {
        btn_block += `<button class = "btn btn-outline-primary fs-2" onclick="checkQuestion(${i})">${i}</button>`
    }

    main.innerHTML += `<nav class = "d-flex justify-content-between" style ="width: 50vw !important">${btn_block}</nav>`
}

function checkQuestion(num) {
    correct = allQuestions[currentQuestion].correct;
    if (num == correct) {
        countSuccess +=1;
    }
    currentQuestion +=1;
    if (allQuestions.length > currentQuestion) {
        generateQuestion();
    } else {
        stopQuiz();
    }
}

function stopQuiz() {
    start.classList.remove('none');
    main.classList.add('none');
    result.classList.remove('none');
    result.innerText = `Решено ${countSuccess} из ${allQuestions.length}`;
    currentQuestion = 0;
    countSuccess = 0;
}