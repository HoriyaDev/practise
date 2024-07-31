const inputField = document.getElementById("input");
const button = document.getElementById("btn");

let textArray = [];
let editIndex = null; 
const d = new Date()
const add = () => {
    const inputValue = inputField.value.trim();

    if (inputValue === "") {
        alert("Please fill this");
    } else {
        if (editIndex === null) {
           
            textArray.push(inputValue);
        } else {
          
            textArray[editIndex] = inputValue;
            editIndex = null; 
        }
        display();
        inputField.value = "";
    }
};

function display() {
    const textArea = document.getElementById("text-area");
    textArea.innerHTML = "";
    textArray.forEach((task, index) => {
        const div = document.createElement('div');
        div.classList.add("text-area")

        const listItem = document.createElement('li')
        
        const textSpan = document.createElement('span');
        textSpan.classList.add("text")
        textSpan.innerHTML = task;
         

        const time = document.createElement('p')
        const setTime = d.toLocaleString();
        time.innerHTML= setTime
        time.classList.add("time")


        const editBtn = document.createElement('button');
        editBtn.innerHTML = "Edit";
        editBtn.classList.add("editBtn")
        editBtn.addEventListener("click", () => {
            inputField.value = task;
            editIndex = index; 
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = "Delete";
        deleteBtn.classList.add("deleteBtn")
        deleteBtn.addEventListener("click", () => {
            textArray.splice(index, 1);
            display();
        });

        



        div.appendChild(textSpan);
        div.appendChild(editBtn);
        div.appendChild(deleteBtn);
        div.appendChild(time)
        textArea.appendChild(div);
    });
}

button.addEventListener("click", add);

