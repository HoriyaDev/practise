
const inputField = document.getElementById("input");
const checkButton = document.getElementById("checkBtn");
const results = document.getElementById("result");


checkButton.addEventListener("click", function() {
  
    let valueTrim = inputField.value.trim();
    
    let str = valueTrim.toLowerCase();
    
    
 
    let reverseStr = str.split('').reverse().join('');

 
    if (valueTrim === "") {
        alert("Please Enter a String");
    } else if (str === reverseStr) {
    
        results.innerHTML = `<strong>${valueTrim}</strong> is a palindrome!`;
        
    } else {
      
        results.innerHTML = `<strong>${valueTrim}</strong> is not a palindrome.`;
    }
});


 