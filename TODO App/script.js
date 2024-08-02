const inputField = document.getElementById("input");
const button = document.getElementById("btn");
const textArea = document.getElementById("text-area");
const ascBtn = document.getElementById("ascending");
const decsBtn = document.getElementById("descending");
const shiftBtn = document.getElementById("shift");
const unshiftBtn = document.getElementById("unshift");
const includeBtn = document.getElementById("include");
const indexBtn = document.getElementById("index");
const filterBtn = document.getElementById("filter");
const showBtn = document.getElementById("show-all");
const searchBar = document.getElementById("search");

let textArray = [];
let editIndex = null;
const d = new Date();

const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', ];

function add() {
    const inputValue = inputField.value.trim();

    if (inputValue === "") {
        alert("Please fill this");
        return false;
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
}

function display(filteredItems = textArray) {
    textArea.innerHTML = ""; // Clear the current content
    
    filteredItems.forEach((task, index) => {
        const div = document.createElement('div');
        div.classList.add("text-area");

        const textSpan = document.createElement('span');
        textSpan.classList.add("text");
        textSpan.textContent = task;

        const time = document.createElement('p');
        let date = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let hours = d.getHours();
        let min = d.getMinutes();

        if (date < 10) {
            date = '0' + date;
        }
        if (month < 10) {
            month = '0' + month;
        }

        const dateFormat = `${date}-${month}-${year} ${hours}:${min}`;
        time.textContent = dateFormat;

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit";
        editBtn.classList.add("editBtn");
        editBtn.addEventListener("click", () => {
            inputField.value = task;
            editIndex = index;
        });
        const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        editBtn.style.borderColor = randomColor;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener("click", () => {
            textArray.splice(index, 1);
            display(); // Re-display with updated textArray
        });
        const random = colorArray[Math.floor(Math.random() * colorArray.length)];
        deleteBtn.style.background = random;

        div.appendChild(textSpan);
        div.appendChild(editBtn);
        div.appendChild(deleteBtn);
        div.appendChild(time);
        textArea.appendChild(div);
    });
}

button.addEventListener("click", add);

ascBtn.addEventListener("click", () => {
    textArray.sort();
    display();
    console.log(textArray);
});

decsBtn.addEventListener("click", () => {
    textArray.reverse();
    display();
    console.log(textArray);
});

shiftBtn.addEventListener("click", () => {
    textArray.shift();
    display();
    console.log(textArray);
});

unshiftBtn.addEventListener("click", () => {
    const inputValue = inputField.value.trim();
    if (inputValue !== "") {
        textArray.unshift(inputValue);
        display();
        console.log(textArray);
    } else {
        alert("Please fill this");
    }
});

includeBtn.addEventListener("click", () => {
    const inputValue = inputField.value.trim();
    const result = textArray.includes(inputValue);
    alert(result ? "Task is included in the list" : "Task is not in the list");
    console.log(result);
});

indexBtn.addEventListener("click", () => {
    const inputValue = inputField.value.trim();
    const index = textArray.indexOf(inputValue);
    alert(index !== -1 ? `Index of task: ${index}` : "Task is not in the list");
    console.log(index);
});

filterBtn.addEventListener("click", () => {
    const query = inputField.value.trim().toLowerCase();
    
    const filteredItems = textArray.filter(item => item.toLowerCase().includes(query));
    
    if (filteredItems.length > 0) {
        display(filteredItems); 
        query.innerHTML=""

    } else {
        textArea.innerHTML = "<p>No tasks found.</p>"; 
    }
    
});
showBtn.addEventListener("click", () => {
    display()
});
searchBar.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    const foundItems = searchItems(query);
    display(foundItems);
});

function searchItems(query) {
    const results = [];
    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i].toLowerCase().includes(query)) {
            results.push(textArray[i]);
        }
    }
    return results;
}