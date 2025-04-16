let keepAdding = true;
let itemName;
let itemPrice;
let total = 0;
let discount;


while(keepAdding) {
	itemName = prompt("Enter the item name (or 'done' to finish'):");
	if (itemName.toLowerCase() == "done") {
		keepAdding = false;
	} else {
		itemPrice = prompt("Enter the item price:");
		total += +itemPrice;
	}
}

if (total >= 100) {
	discount = total * .2
	console.log(`You get a discount of $${discount.toFixed(2)}`);
	total -= discount;
}
console.log(`Your total is $${total.toFixed(2)}`);

