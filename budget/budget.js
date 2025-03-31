let income = 3872;
let rent = 1500;
let groceries = 300;
let utilities = 200;

let totalExpenses = rent + groceries + utilities;
let remainingMoney = income - totalExpenses;

let spendingOnRent = (rent / income) * 100
let spendingOnGroceries = (groceries / income) * 100

console.log("The total income was: " +   income.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log("The rent amount was: " +   rent.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log("The grocery total was: " +  groceries.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log("The percent spent on rent was: " + spendingOnRent.toFixed(2) + "%");
console.log("The percent spent on groceries was: " + spendingOnGroceries.toFixed(2) + "%");