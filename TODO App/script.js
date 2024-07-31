const inputField = document.getElementById("input");
        const button = document.getElementById("btn");
        const textArea = document.getElementById("text-area");
        button.disabled = true;

        let textArray = [];
        let editIndex = null;
        const d = new Date();

        const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', ]
        

        function validateEmail(email) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        }

        inputField.addEventListener("input", () => {
            const inputValue = inputField.value.trim();
            if (validateEmail(inputValue)) {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        });

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
                button.disabled = true; // Disable the button after adding
            }
        }

        function display() {
            textArea.innerHTML = "";
            textArray.forEach((task, index) => {
                const div = document.createElement('div');
                div.classList.add("text-area");

                

                const textSpan = document.createElement('span');
                textSpan.classList.add("text");
                textSpan.innerHTML = task;

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
                time.innerHTML = dateFormat;

                const editBtn = document.createElement('button');
                editBtn.innerHTML = "Edit";
                editBtn.classList.add("editBtn");
                editBtn.addEventListener("click", () => {
                    inputField.value = task;
                    editIndex = index;
                    button.disabled = false; // Enable the button for editing
                });
                const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
                editBtn.style.borderColor =randomColor

                const deleteBtn = document.createElement('button');
                deleteBtn.innerHTML = "Delete";
                deleteBtn.classList.add("deleteBtn");
                deleteBtn.addEventListener("click", () => {
                    textArray.splice(index, 1);
                    
                    
                    display();
                });
                const random = colorArray[Math.floor(Math.random() * colorArray.length)];
                deleteBtn.style.background=random;

                div.appendChild(textSpan);
                div.appendChild(editBtn);
                div.appendChild(deleteBtn);
                div.appendChild(time);
                textArea.appendChild(div);
            });
        }

        button.addEventListener("click", add);