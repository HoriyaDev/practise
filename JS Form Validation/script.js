document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const circles = document.querySelectorAll('.circle');
    let currentSectionIndex = 0;
    const firstName= document.getElementById("fname")
    const lastName = document.getElementById("lname")

    // Function to show the current section
    const showSection = (index) => {
        sections.forEach((section, i) => {
            section.style.display = i === index ? 'block' : 'none';
        });
        circles.forEach((circle, i) => {
            if (i === index) {
                circle.classList.add('active');
            } else {
                circle.classList.remove('active');
            }
            
                
          
            
        });

        // Change Continue button to Submit button on the last section
        

   

        // Show the submit section if on the last section
        const submitSection = document.querySelector('#submit');
        if (index === sections.length - 1) {
            submitSection.style.display = 'block';
        } else {
            submitSection.style.display = 'none';
        }
    };

    // Initially show the first section and highlight the first circle
    showSection(currentSectionIndex);


   // Function to validate email with regex
   // Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone number validation function
function isValidPhoneNumber(phoneNumber) {
    const phoneRegex =/^\+?\d{10,15}$/;;
    return phoneRegex.test(phoneNumber);
}

// Passport number validation function
function isValidPassportNumber(passportNumber) {
    const passportRegex = /^[A-Z0-9]{6,9}$/i;
    return passportRegex.test(passportNumber);
}

// License number validation function
function isValidLicenseNumber(licenseNumber) {
    const licenseRegex = /^[A-Z0-9]{6,16}$/i;
    return licenseRegex.test(licenseNumber);
}

// Validate the first section of the form
function validateFirstSection() {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const email = document.getElementById('email');
    const DoB = document.getElementById('DOB');
    
    if (firstName.value === "" || lastName.value === "" || DoB.value === "" || email.value==="") {
        alert("Please fill in all required fields in the first section.");
        return false;
    }
    if (!isValidEmail(email.value)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

// Validate the second section of the form
function validateSecondSection() {
    const phoneNumber = document.getElementById('phone');
    const address = document.getElementById('st-address');
    const state =document.getElementById('state')
   
    
    if (address.value === "" ||state.value==="" || phoneNumber.value==="") {
        alert("Please fill in all required fields in the second section.");
        return false;
    }
    if (!isValidPhoneNumber(phoneNumber.value)) {
        alert("Please enter a valid phone number.");
        return false;
    }
    
    return true;
}

// Validate the third section of the form
function validateThirdSection() {
    const sinNumber = document.getElementById('sin-number');
    const passportNo = document.getElementById('passport');
    const licenseNo = document.getElementById('license');
    
    if (sinNumber.value === "" || passportNo.value === "" || licenseNo.value === "") {
        alert("Please fill in all required fields in the third section.");
        return false;
    }
    if (!isValidPassportNumber(passportNo.value)) {
        alert("Please enter a valid  passport Number.");
        return false;
    }
    if (!isValidLicenseNumber(licenseNo.value)) {
        alert("Please enter a valid license number.");
        return false;
    }
    return true;
}

// Event listener for form buttons
document.querySelectorAll('.btn-2').forEach(button => {
    button.addEventListener('click', (event) => {
        let isValid = false;

        // Determine which section is currently being validated
        if (currentSectionIndex === 0) {
            isValid = validateFirstSection();
        } else if (currentSectionIndex === 1) {
            isValid = validateSecondSection();
        } else if (currentSectionIndex === 2) {
            isValid = validateThirdSection();
        }

        if (!isValid) {
            event.preventDefault(); // Prevent moving to the next section if validation fails
            return;
        }

        // Proceed to the next section if validation passes
        if (currentSectionIndex < sections.length - 1) {
            event.preventDefault();
            currentSectionIndex++;
            showSection(currentSectionIndex);
        }

        
    });
});

    
    // Event listeners for the Previous buttons
    document.querySelectorAll('.btn-1').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                showSection(currentSectionIndex);
            }
        });
    });

    
});

