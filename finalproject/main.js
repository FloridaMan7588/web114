let userScore = 0;
let documentClicks = 0;
let cssClicks = 0;
let functionClicks = 0;
let htmlClicks = 0;

function getPoints(questionBox) {
	let score = 0
	if (questionBox.classList.contains("100")) {
		score = 100;
	} else if (questionBox.classList.contains("200")) {
		score = 200
	} else if (questionBox.classList.contains("300")) {
		score = 300
	}
	return score;
}
//Thanks MDN!
function getRandomQuestion(array) {
	let randomIndex = Math.floor(Math.random() * array.length);
	let randomQuestion = array[randomIndex];
	array.splice(randomIndex, 1);
	return randomQuestion;
}

function checkQuestion(questionBox, questionsList) {
	let randomQuestion = getRandomQuestion(questionsList);
	let answer = window.prompt(randomQuestion.question + "\n" + randomQuestion.options.join("\n"));
	if (answer == randomQuestion.answer) {
		userScore += getPoints(questionBox);
		console.log(userScore);
		alert("Correct! Your score is: " + userScore);
		questionBox.classList.remove("bg-white", "text-indigo-500");
		questionBox.classList.add("bg-green-500", "text-white");
	} else {
		alert("Incorrect! The correct answer is: " + randomQuestion.answer);
		questionBox.classList.remove("bg-white", "text-indigo-500");
		questionBox.classList.add("bg-red-500", "text-white");
	}
	questionBox.classList.add("pointer-events-none");
}

window.onload = () => {
	let startButton = document.getElementById("start-button");
	let gameContainer = document.getElementById("game-container");
	let gameHeader = document.getElementById("game-header");
	let questionBoxes = document.getElementsByClassName("question-box");
	let titleBoxes = document.getElementsByClassName("title-box");
	let lastScore = document.getElementById("score");
	for (let i = 0; i < titleBoxes.length; i++) {
		titleBoxes[i].classList.add("bg-indigo-500", "text-white", "rounded-lg", "shadow-md", "p-8", "m-4", "flex", "flex-col", "justify-center", "items-center", "text-lg", "font-bold", "text-center");
	};
	for (let i = 0; i < questionBoxes.length; i++) {
		let questionBox = questionBoxes[i]
		questionBox.classList.add("bg-white", "text-indigo-500", "rounded-lg", "shadow-md", "p-8", "m-4", "flex", "flex-col", "justify-center", "items-center", "text-lg", "font-bold", "cursor-pointer");
		questionBox.addEventListener("click", () => {
			if (questionBox.classList.contains("documentQuestions")) {
				checkQuestion(questionBox, questions.documentQuestions);
				documentClicks++
			} else if (questionBox.classList.contains("cssQuestions")) {
				checkQuestion(questionBox, questions.cssQuestions);
				cssClicks++
			} else if (questionBox.classList.contains("functionQuestions")) {
				checkQuestion(questionBox, questions.functionQuestions);
				functionClicks++
			} else if (questionBox.classList.contains("htmlQuestions")) {
				checkQuestion(questionBox, questions.htmlQuestions);
				htmlClicks++
			}
			if (documentClicks == 3 && cssClicks == 3 && functionClicks == 3 && htmlClicks == 3) {
				alert("Congratulations! You have finished the game! Your final score is: " + userScore);
				gameContainer.classList.add("hidden");
				gameHeader.classList.remove("hidden");
				startButton.classList.remove("hidden");
				documentClicks = 0;
				cssClicks = 0;
				functionClicks = 0;
				htmlClicks = 0;
				lastScore.innerHTML = "Previous Best Score: " + userScore;
				lastScore.classList.remove("hidden");
				userScore = 0;
			}
		}
		);
	}
	startButton.addEventListener("click", () => {
		gameHeader.classList.add("hidden");
		startButton.classList.add("hidden");
		gameContainer.classList.remove("hidden");
	});
};