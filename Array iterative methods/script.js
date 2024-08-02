const numberField = document.getElementById("number");
const show = document.getElementById("show");
const add = document.getElementById("add");
const map = document.getElementById("map");
const reduceBtn = document.getElementById("reduce");
const spreadBtn = document.getElementById("spread");
const array = [];

add.addEventListener("click", () => {
    const number = numberField.value.trim();

    if (number !== "" && !isNaN(number)) {
        array.push(Number(number)); 

        show.innerHTML = ''; 
        array.forEach((value, index) => {
            console.log(`Index ${index}: ${value}`);
        });

        display(array);

        numberField.value = "";
    } else {
        alert("Please enter a valid number");
    }
});

spreadBtn.addEventListener("click", () => {
    const copy = [...array, Number(numberField.value)];
    console.log(copy);

    show.innerHTML = ''; 
    display(copy);
});

map.addEventListener("click", () => {
    const result = array.map(value => value * 0.1 + value);

    show.innerHTML = ''; 
    display(result);
});

reduceBtn.addEventListener("click", () => {
    if (array.length > 0) {
        
        const sum = array.reduce((pre, next) => pre + next, 0);

        
        const avg = sum / array.length;

        
        show.textContent = `Average is ${avg}`;
        
        show.style.background = 'red';
        show.style.color = 'white';
        show.style.width = '100px';
        show.style.height = '30px';
        show.style.margin = '5px';
        show.style.padding = '5px';
    } else {
        alert("Array is empty. Please add some numbers.");
    }
});

function display(arr) {
    arr.forEach((element) => {
        const div = document.createElement('div');
        div.textContent = element;
        div.style.background = 'red';
        div.style.color = 'white';
        div.style.width = '100px';
        div.style.height = '30px';
        div.style.margin = '5px';
        div.style.padding = '5px';
        
        show.appendChild(div);
    });
}
