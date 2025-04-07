//Prompt user for favorite day
let favDay = window.prompt("What is your favorite day of the week? (e.g., Monday, Tuesday)");

switch (favDay.toLowerCase()) {
	case "monday":
		console.log("Monday is the start of the week!");
		break;
	case "tuesday":
		console.log("Tuesday is the second day of the week!");
		break;
	case "wednesday":
		console.log("Wednesday is the middle of the week!");
		break;
	case "thursday":
		console.log("Thursday is the fourth day of the week!");
		break;
	case "friday":
		console.log("Friday is the end of the work week!");
		break;
	case "saturday":
		console.log("Saturday is the weekend!");
		break;
	case "sunday":
		console.log("Sunday is a day of rest!");
		break;
	default:	
		console.log("That's not a valid day of the week!");
		break;
}