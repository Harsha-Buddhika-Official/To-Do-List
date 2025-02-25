function addTask() {
    let text = document.getElementById("text");
    if (text.value === '') {
        alert("you Enter nothing, Enter something");
    }

    else {
        let list = document.getElementById("list");

        let newItem = document.createElement("li");
        newItem.textContent = text.value;
        
        list.appendChild(newItem);

        //creating delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // symbol 'X'
        span.classList.add("delete-btn"); //add class for style
        newItem.appendChild(span);

        // Create Edit button
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        newItem.appendChild(editBtn);

        editBtn.onclick = function (event) {
            event.stopPropagation();
            let updatedText = prompt("Edit your task:", newItem.textContent.replace("Edit", "").trim());
            if (updatedText !== null && updatedText.trim() !== "") {
                newItem.firstChild.nodeValue = updatedText; // Update text content
            }
        };

        //remove item using delete button
        span.onclick = function () {
            event.stopPropagation();
            newItem.remove();
        };

        newItem.onclick = function () {
            newItem.classList.toggle("checked");
        }
    }
    text.value = ''; //text box clear
}

//enter button for add text
window.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.getElementById("btn").click();
    }
})




