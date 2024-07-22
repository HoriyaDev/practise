const button = document.getElementById("btn")
const display = document.getElementById("display")

const equal = ()=>{
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
    
}

function validateInput() {
    display.value = display.value.replace(/[^0-9+\-*/.]/g, '');
}

button.addEventListener("click" , equal)