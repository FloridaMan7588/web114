let userName = prompt("Enter your name");

function calcGasAvg() {
	let total = 0;
	let count = 0;
	let weeklyGas = prompt("Enter your weekly gas total. Enter -1 when you are finished");

	while (weeklyGas != -1) {
		total += +weeklyGas;
		count++;
		weeklyGas = prompt("Enter your weekly gas total. Enter -1 when you are finished");
	}
	return total / count;
}

let gasAvg = calcGasAvg();
alert(userName + "'s average weekly gas bill is $" + gasAvg.toFixed(2));