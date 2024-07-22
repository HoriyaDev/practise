const inputField = document.getElementById("input");
const button = document.getElementById("btn");
const todoTask = document.getElementById("todo-task");

button.addEventListener("click", add);

function add() {
    if (inputField.value === "") {
        alert("Please Enter Task");
    } else {
        const inputValue = inputField.value.trim();
        const listItem = document.createElement("li");

        // Create a span to hold the text content
        const textSpan = document.createElement("span");
        textSpan.textContent = inputValue;
        listItem.appendChild(textSpan);

        // Create edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit");
        editButton.addEventListener("click", function() {
            editTask(textSpan, editButton);
        });

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function() {
            deleteItems(listItem);
        });

        // Append buttons to list item
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        // Append list item to todo list
        todoTask.appendChild(listItem);

        // Clear input field
        inputField.value = "";
    }
}

function deleteItems(item) {
    if (confirm("Are you sure you want to delete this task?")) {
        item.remove();
    }
}

function editTask(textSpan, editButton) {
    // Check if the task is currently being edited
    if (editButton.textContent === "Save") {
        // Save the edited task
        const input = textSpan.querySelector("input");
        if (input.value.trim() !== "") {
            textSpan.textContent = input.value.trim();
            editButton.textContent = "Edit";
        }
    } else {
        // Convert the text span to an input field for editing
        const input = document.createElement("input");
        input.type = "text";
        input.value = textSpan.textContent;
        input.classList.add("save")
        textSpan.textContent = "";
        textSpan.appendChild(input);
        
        editButton.textContent = "Save";
    }
}

