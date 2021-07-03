const quizData = [{
    question: 'How are you?',
    a: '1',
    b: '1',
    c: '5',
    d: '1',
    correct: 'c',
},
{
    question: 'what is the most poppular language?',
    a: 'java',
    b: 'python',
    c: '5',
    d: '1',
    correct: 'b',
},
{
    question: 'What is your pet name?',
    a: 'sa',
    b: 'afdaff',
    c: 'jkha',
    d: 'buzoo',
    correct: 'd',
},
{
    question: 'what is html stand for?',
    a: 'hyper text markup language',
    b: '1',
    c: '5',
    d: '1',
    correct: 'a',
}
];
const answers = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const quiz1 = document.getElementById('quiz');
const a1 = document.getElementById('a1');
const b1 = document.getElementById('b1');
const c1 = document.getElementById('c1');
const d1 = document.getElementById('d1');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselected();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a1.innerText = currentQuizData.a;
    b1.innerText = currentQuizData.b;
    c1.innerText = currentQuizData.c;
    d1.innerText = currentQuizData.d;
}

function deselected() {
    answers.forEach((answers) => {
        answers.checked = false;
    });
}

function getSelected() {
    answers.forEach((answers) => {
        if (answers.checked) {
            answer1 = answers.id;
        }
    });
    return answer1;
}


submit.addEventListener('click', () => {

    const selected = getSelected();
    if (selected) {
        if (selected === quizData[currentQuiz].correct) {
            score++;

        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }else {
            quiz1.innerHTML = `<h2>your score will be ${currentScore}/${quizData.length}</h2><button class= "btn" onClick="location.reload()">Reload</button>`
        }
    }

});



































