function validateForm() {
    let contact = document.getElementById('email').value;
    let passcode = document.getElementById('pass').value;
    let isValid = true;

    
   

    // Check if fields are empty
    if (contact === "" || passcode === "") {
        alert("Please fill all the fields");
        isValid = false;
    }

    if (isValid) { // Only proceed if fields are not empty
        if (validateEmail(contact) || validatePhone(contact)) {
            console.log("Email or Phone:", contact);
        
        } else {
            alert("Please enter a valid email or phone number");
            isValid = false;
        }
    }

    if (isValid) { // Only proceed if previous validations are successful
        if (validatePassword(passcode)) {
            console.log("Password:", passcode);
        } else {
            alert("Password must have at least 5  characters including special characters like @, $, !, or #");
            isValid = false;
        }
    }

    if (isValid) { // Only proceed if all validations are successful
        alert("Submitted successfully");
    }
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phone);
}

function validatePassword(password) {
    // Check length
    if (password.length < 5) {
        return false;
    }

    // Check for uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // Check for special character
    if (!/[!@#$%^&*()_+{}:;<>?\\|\-=\.,]/.test(password)) {
        return false;
    }

    return true;
}

