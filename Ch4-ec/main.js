//Prompt user for favorite day
let password = window.prompt("Please enter a password");

if (password.length >= 8 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/\d/)) {
	window.alert("pssst. This is a secret message for making a good password");
} else {
	window.alert("Try again :(")
}