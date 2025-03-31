let answer = window.prompt("What is the capital of France?");

if (answer.toLocaleLowerCase() === "paris") {
	console.log("Correct!");
} else {
	console.log("Incorrect answer, the capital of France is Paris.");
}