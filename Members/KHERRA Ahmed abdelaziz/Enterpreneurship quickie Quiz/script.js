// Data for the quiz
const questions = [
    {
        question: "What is a primary source of funding for startups?",
        answers: ["Venture Capital", "Bank Savings", "Personal Loans", "Lottery"],
        correctAnswer: "Venture Capital"
    },
    {
        question: "Which of these is the most common business structure for startups?",
        answers: ["LLC", "Corporation", "Sole Proprietorship", "Partnership"],
        correctAnswer: "LLC"
    },
    {
        question: "What is a pitch deck?",
        answers: ["Business Plan", "Marketing Strategy", "Investor Presentation", "Company Website"],
        correctAnswer: "Investor Presentation"
    },
    {
        question: "Which metric is used to measure customer acquisition cost?",
        answers: ["Revenue", "Growth", "Churn Rate", "CAC (Customer Acquisition Cost)"],
        correctAnswer: "CAC (Customer Acquisition Cost)"
    },
    {
        question: "What is a bootstrap business model?",
        answers: ["Self-funded", "Venture Capital funded", "Government funded", "Bank loan funded"],
        correctAnswer: "Self-funded"
    }
];

// Initialize game variables
let currentQuestionIndex = 0;
let score = 0;
let gameMode = null;
let timer = null;
let timeLeft = 19; // Time limit per question in Time Attack mode
let totalTime = 19; // Set total time limit for each question
let correctAnswers = 0; // Track correct answers
let circleRadius = 70; // Circle radius for the visual timer

const startBtn = document.getElementById('start-btn');
const normalModeBtn = document.getElementById('normal-mode');
const timeAttackModeBtn = document.getElementById('time-attack-mode');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('time-left');
const timerCircle = document.getElementById('timer-circle');
const restartBtn = document.getElementById('restart-btn');
const startupScreen = document.getElementById('startup-screen');
const gameScreen = document.getElementById('game-screen');
const modeSelection = document.getElementById('mode-selection');
const finalVerdict = document.getElementById('final-verdict');
const welcomeMessage = document.getElementById('welcome-message');

// Start the game (show mode selection)
startBtn.addEventListener('click', () => {
    welcomeMessage.classList.add('fade-in'); // Add animation
    setTimeout(() => {
        startupScreen.style.display = 'none';
        modeSelection.style.display = 'block';
    }, 1500); // Delay to show animation before mode selection
});

// Select Normal Mode
normalModeBtn.addEventListener('click', () => {
    gameMode = 'normal';
    modeSelection.style.display = 'none';
    gameScreen.style.display = 'block';
    showNextQuestion();
});

// Select Time Attack Mode
timeAttackModeBtn.addEventListener('click', () => {
    gameMode = 'time-attack';
    modeSelection.style.display = 'none';
    gameScreen.style.display = 'block';
    startTimer();
    showNextQuestion();
});

// Show next question
function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answersElement.innerHTML = '';
        
        currentQuestion.answers.forEach(answer => {
            const btn = document.createElement('button');
            btn.textContent = answer;
            btn.onclick = () => checkAnswer(answer, btn);
            answersElement.appendChild(btn);
        });
        
        // Reset the timer for each new question
        if (gameMode === 'time-attack') {
            resetTimer();
            startTimer();
        }
    } else {
        endGame();
    }
}

// Check if answer is correct
function checkAnswer(answer, button) {
    const currentQuestion = questions[currentQuestionIndex];
    let correct = answer === currentQuestion.correctAnswer;

    if (correct) {
        score++;
        correctAnswers++; // Track correct answers
        button.classList.add('correct-answer');
    } else {
        score = Math.max(score, 0); // Ensure score doesn't go below 0
        button.classList.add('incorrect-answer');
    }

    // Disable buttons after answering
    const buttons = answersElement.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);

    scoreElement.textContent = score;
    currentQuestionIndex++;

    setTimeout(showNextQuestion, 1000); // Move to next question after 1 second
}

// Reset Timer for each new question
function resetTimer() {
    clearInterval(timer); // Clear previous timer
    timeLeft = totalTime; // Reset the time to 19 seconds
    timerElement.textContent = `Time Left: ${timeLeft} seconds`;
    updateTimerCircle(); // Update the timer circle
}

// Start the timer for Time Attack Mode
function startTimer() {
    timerElement.style.display = 'block';
    timerCircle.style.display = 'block';
    createTimerCircle(); // Create visual circle for the timer
    
    // Update the timer and countdown every second
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerElement.textContent = `Time Left: ${timeLeft} seconds`; // Update the timer text
            updateTimerCircle(); // Update the visual circle
        } else {
            clearInterval(timer);
            currentQuestionIndex++; // Go to next question when time runs out
            showNextQuestion();
        }
    }, 1000);
}

// Create the visual timer circle
function createTimerCircle() {
    const circumference = 2 * Math.PI * circleRadius;
    timerCircle.style.strokeDasharray = circumference;
    timerCircle.style.strokeDashoffset = circumference;
}

// Update the timer circle with countdown (make it like an analog clock)
function updateTimerCircle() {
    const circumference = 2 * Math.PI * circleRadius;
    const offset = circumference - (timeLeft / totalTime) * circumference;
    timerCircle.style.strokeDashoffset = offset;

    // Display the countdown in the center of the circle
    const centerText = document.createElement('div');
    centerText.textContent = `${timeLeft}`;
    centerText.style.position = 'absolute';
    centerText.style.top = '50%';
    centerText.style.left = '50%';
    centerText.style.transform = 'translate(-50%, -50%)';
    centerText.style.color = 'white';
    centerText.style.fontSize = '1.5rem';
    timerCircle.innerHTML = ''; // Clear previous content
    timerCircle.appendChild(centerText); // Add countdown in the circle
}

// End the game
function endGame() {
    clearInterval(timer);
    gameScreen.style.display = 'none';
    finalVerdict.style.display = 'block';
    
    // Show the final score before verdict
    finalVerdict.innerHTML = `<p>Your Final Score: ${score}</p>`;

    // Show winning or losing message based on performance
    if (score === questions.length) {
        finalVerdict.innerHTML += `<p>Congratulations! You've got all answers right!</p>
        <p><a href="your_treat_link_here">Click here to claim your treat!</a></p>`;
    } else {
        finalVerdict.innerHTML += `<p>Try again! You didn't get all the answers right.</p>`;
    }

    // Show restart button
    restartBtn.style.display = 'block';
    restartBtn.addEventListener('click', () => {
        score = 0;
        correctAnswers = 0;
        scoreElement.textContent = score;
        currentQuestionIndex = 0;
        finalVerdict.style.display = 'none';
        restartBtn.style.display = 'none';
        startupScreen.style.display = 'block';
    });
}
