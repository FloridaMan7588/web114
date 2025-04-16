
for (i=0; i<6; i++){
	if (i==0) {
		continue;
	} else if (i==3) {
		console.log("Loading slot", i, "Dispenses Cola");
	} else if (i==4) {
		console.log("Loading slot", i, "Dispenses Super Drink!");
	} else if (i==5) {
		console.log("Loading slot", i, "Dispenses Orange Juice");
	} else {
		console.log("Loading slot", i, "Dispenses Water");
	}
}