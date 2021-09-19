plus = document.querySelector(".plus");

var courselist = document.querySelector(".course-list");
plus.addEventListener("click", addcourse);

courselist.addEventListener("click", removecourse);
var todoListItem = document.querySelector("span");
function addcourse(e) {
	e.preventDefault();

	// grabbing the span tag
	var span = document.querySelector("span");

	// obtaining the vale if input
	var coursename = document.querySelector(".coursename").value;
	// console.log(coursename);

	// creating new tags
	var li = document.createElement("li");
	var trash = document.createElement("i");
	var check = document.createElement("i");
	var todoContainer = document.createElement("div");
	var trashContainer = document.createElement("div");
	const todoItem = document.createElement("span");
	const edit = document.createElement("i");
	const space = "  ";
	// adding classname to the newly created tags
	li.classList = "list-of-courses";
	trash.classList = "fas fa-trash-alt awesome";
	check.classList = "fas fa-check-circle";
	todoContainer.classList = "todocontainer";
	edit.classList = "fas fa-edit";
	todoItem.textContent = `${"  "} ${coursename}`;
	todoContainer.appendChild(todoItem);
	todoContainer.appendChild(check);

	todoContainer.insertBefore(check, todoItem);

	// appending new tags to li tag
	li.appendChild(todoContainer);
	trashContainer.appendChild(edit);
	li.appendChild(trashContainer);

	trashContainer.appendChild(trash);

	// appending the newly created li as a child element to parentElement ul
	courselist.appendChild(li);
	check.addEventListener("click", markComplete);
	console.log(coursename);

	function markComplete(e) {
		if (e.target.classList.contains("fa-check-circle")) {
			// console.log("checkeed");
			check.style.color = "green";

			// console.log(todoItem);
			todoItem.classList.add("line-through");
		}
	}
	edit.addEventListener("click", edittodo);

	// Edit Todo
	function edittodo(e) {
		if (e.target.classList.contains("fa-edit")) {
			const updateValue = prompt();
			todoItem.textContent = `${"  "} ${updateValue}`;
		}
	}
}

function removecourse(e) {
	if (e.target.classList.contains("awesome")) {
		if (confirm("please comfirm the course before deleting")) {
			var parentelement = e.target.parentElement.parentElement;
			courselist.removeChild(parentelement);
		}
	}
}
