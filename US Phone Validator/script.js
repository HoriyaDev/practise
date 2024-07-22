const inputField = document.getElementById("inputs");
const checkBtn = document.getElementById("btn-1");
const clearBtn = document.getElementById("btn-2");
const resultContainer = document.getElementById("output");

const validation = () => {
    let regex = /^1?\s?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    const result = document.createElement("p");
    if (inputField.value === "") {
        alert("Please enter a phone number");
    } else if (regex.test(inputField.value)) {
        result.textContent = `Valid US number: ${inputField.value}`;
        result.style.color = "green";
        result.className = "results"
        
    } else {
        result.textContent = `InValid US number: ${inputField.value}`;
        result.style.color = "red"; 
         result.className = "results"
    }

    resultContainer.appendChild(result);
    inputField.value = "";
};

const clearOutput = () => {
    resultContainer.innerHTML = "";
};

clearBtn.addEventListener("click", clearOutput);
checkBtn.addEventListener("click", validation);

