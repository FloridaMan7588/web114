window.onload = () => {
	let userInput = document.getElementById("taskInput");
	let addButton = document.getElementById("addTaskBtn");
	let taskList = document.getElementById("taskList");

	addButton.addEventListener("click", () => {
		let text = userInput?.value;
		if (text === "" || text === null) {
			alert("Please enter a task.");
			return;
		}
		let taskItem = document.createElement("li");
		//Tailwind!! I loooove tailwind
		taskItem.className = "p-2 border-2 border-gray-500 bg-gray-200 rounded-md text-gray-700 flow-root";

		let deleteButton = document.createElement("button");
		deleteButton.innerText = "Delete Item";
		deleteButton.className = "p-2 border-2 border-red-500 bg-red-200 rounded-md text-red-500 float-right";
		deleteButton.addEventListener("click", () => {
			taskList.removeChild(taskItem);
		});

		let taskName = document.createElement("p");
		taskName.className = "p-2 float-left";	
		taskName.innerText = text;

		taskItem.appendChild(taskName);
		taskItem.appendChild(deleteButton);
		taskList.appendChild(taskItem);
		userInput.value = "";
	});
}