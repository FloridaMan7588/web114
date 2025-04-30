window.onload = () => {
	let userInput = document.getElementById("chatInput");
	let chatBox = document.getElementById("chat");
	let sendButton = document.getElementById("sendChat");
	let clearButton = document.getElementById("clearChat");

	sendButton.addEventListener("click", () => {
		let chatText = userInput?.value
		if (chatText === "" || chatText === null) {
			alert("Please enter a message.");
			return;
		}
		let chatItem = document.createElement("li");
		chatItem.className = "mb-10px flow-root p-2"
		let chatContent = document.createElement("p");
		chatContent.className = "p-2 border-2 border-gray-500 bg-gray-200 rounded-md text-gray-700 float-left";
		let deleteButton = document.createElement("button");
		deleteButton.innerText = "Delete Message";
		deleteButton.className = "p-2 border-2 border-red-500 bg-red-200 rounded-md text-red-500 float-right cursor-pointer";
		deleteButton.addEventListener("click", () => {
			chatBox.removeChild(chatItem);
		});
		chatContent.innerText = chatText;
		chatItem.appendChild(chatContent);
		chatItem.appendChild(deleteButton);
		chatBox.appendChild(chatItem);
		userInput.value = "";
	});
	clearButton.addEventListener("click", () => {
		chatBox.innerHTML = "";
	});
}