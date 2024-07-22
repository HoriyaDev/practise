const inputField = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const results = document.getElementById("output");





const converter = () => {
    
    const num = parseInt(inputField.value); 
    if (isNaN(num) || num <= 0) {
        results.textContent = "Please enter a valid positive number";
        results.classList.remove("valid");
        results.classList.add("invalid");
      
        return;
    }
    if (num > 3999) {
        results.textContent = "Please enter a number less than or equal to 3999";
        results.classList.remove("valid");
        results.classList.add("invalid");
        results.style.display = 'block'; 
        results.style.height = '15vh'
        results.style.height = 'auto'
        return;
    }
    
    const mapping = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = ""; 
    let remainingNum = num; 

    for (const { value, numeral } of mapping) {
        while (remainingNum >= value) {
            result += numeral; // Append the numeral to the result string
            remainingNum -= value; // Subtract the value from the remaining number
        }
    }
    
    
    
    

    results.textContent = result;
    results.classList.remove("invalid");
    results.classList.add("valid");
    

    
};

convertBtn.addEventListener("click", converter);



