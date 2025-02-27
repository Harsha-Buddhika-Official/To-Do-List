// Function to load tasks from local storage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let list = document.getElementById("list");

    tasks.forEach(task => {
        let newItem = document.createElement("li");
        newItem.textContent = task.text;
        if (task.completed) newItem.classList.add("checked");

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // 'X' delete button
        span.classList.add("delete-btn");
        newItem.appendChild(span);

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        newItem.appendChild(editBtn);

        list.appendChild(newItem);

        // Add event listeners
        newItem.onclick = function () {
            newItem.classList.toggle("checked");
            saveTasks();
        };

        span.onclick = function () {
            newItem.remove();
            saveTasks();
        };

        editBtn.onclick = function (event) {
            event.stopPropagation();
            let updatedText = prompt("Edit your task:", newItem.firstChild.nodeValue.trim());
            if (updatedText !== null && updatedText.trim() !== "") {
                newItem.firstChild.nodeValue = updatedText;
                saveTasks();
            }
        };
    });
}

// Function to save tasks to local storage
function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#list li").forEach(item => {
        tasks.push({ text: item.firstChild.nodeValue.trim(), completed: item.classList.contains("checked") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to add new task
function addTask() {
    let text = document.getElementById("text");
    if (text.value === '') {
        alert("You entered nothing, enter something.");
    } else {
        let list = document.getElementById("list");
        let newItem = document.createElement("li");
        newItem.textContent = text.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // 'X' delete button
        span.classList.add("delete-btn");
        newItem.appendChild(span);

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        newItem.appendChild(editBtn);

        list.appendChild(newItem);

        // Add event listeners
        newItem.onclick = function () {
            newItem.classList.toggle("checked");
            saveTasks();
        };

        span.onclick = function () {
            newItem.remove();
            saveTasks();
        };

        editBtn.onclick = function (event) {
            event.stopPropagation();
            let updatedText = prompt("Edit your task:", newItem.firstChild.nodeValue.trim());
            if (updatedText !== null && updatedText.trim() !== "") {
                newItem.firstChild.nodeValue = updatedText;
                saveTasks();
            }
        };

        saveTasks();
    }
    text.value = ''; // Clear input field
}

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);

// Add task when pressing Enter
window.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("btn").click();
    }
});
