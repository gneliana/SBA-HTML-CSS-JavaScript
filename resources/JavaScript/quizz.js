
function buildQuiz() {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function showResults() {

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen';
        }

        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
        question: "What are the 3 sizes of poodles in the US?",
        answers: {
            a: "Venti, Grande, Tall",
            b: "Royal, Standard, Teacup",
            c: "Standard, Toy, Miniature"
        },
        correctAnswer: "c"
    },
    {
        question: "Which of these was the Standard Poodle originally bred for?",
        answers: {
            a: 'To be a care bear',
            b: 'For Hunting',
            c: 'As a Show Dog'
        },
        correctAnswer: 'b'
    },
    {
        question: "Where did the poodle originate?",
        answers: {
            a: 'England',
            b: 'France',
            c: 'Germany'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the purpose of the Continental Clip?",
        answers: {
            a: 'To make the poodle look elegant',
            b: 'The puffs on the hips, chest, and ankles, were meant to keep the major organs warm in cold water.',
            c: 'To protect their skin from the sun.'
        },
        correctAnswer: 'b'
    },
    {
        question: "What language is the word “Poodle” derived from?",
        answers: {
            a: 'German',
            b: 'French',
            c: 'English'
        },
        correctAnswer: 'a'
    },
];

buildQuiz();

submitButton.addEventListener('click', showResults);
