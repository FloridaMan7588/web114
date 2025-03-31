let hourlyWage = window.prompt("Enter your hourly wage:");
if (!window.confirm("Your hourly wage is " + hourlyWage + "?")) {
	hourlyWage = window.prompt("Enter your hourly wage:");
}
let hoursWorked = window.prompt("Enter the number of hours you worked this week:");
if (!window.confirm("You worked " + hoursWorked + " hours this week?")) {
	hoursWorked = window.prompt("Enter the number of hours you worked this week:");
}

hourlyWage = Number(hourlyWage);
hoursWorked = Number(hoursWorked);
let weeklyEarnings = hourlyWage * hoursWorked;
let taxAmount = weeklyEarnings * 0.2;
weeklyEarnings = weeklyEarnings - taxAmount;

console.log("Your weekly earnings are: $" + weeklyEarnings.toFixed(2));