//prompt for name and confirm
let username = window.prompt("Please enter your name");
let proceed = window.confirm("You grant permission to use " + username + " on this page?");

if (proceed) {
	console.log("Yes, I can use your name on this page");
	//get age if name perm is granted
	let age = window.prompt("Please enter your age");
	window.alert("Hi " + username + "! You are " + age + " years old.");
} else {
	console.log("No, you can not use my name on this web page. Privacy Please.");
}