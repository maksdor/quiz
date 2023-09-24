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
        answers: [4,8,12],
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
    main.innerHTML = `<h1 class = "question">${question}</h1>`

    let answers = allQuestions[currentQuestion].answers
    let btn_block = ' '
    for (let i of answers) {
        btn_block += `<button class = "btn" onclick="checkQuestion(${i})">${i}</button>`
    }

    main.innerHTML += `<nav class = "btn_block">${btn_block}</nav>`
}
