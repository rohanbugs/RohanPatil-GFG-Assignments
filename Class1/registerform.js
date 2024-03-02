function validateForm() {
    // Reset error messages
    resetErrors();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;

    // Validate name
    if (name === '') {
        displayError('nameError', 'Please enter your name.');
    }

    // Validate email
    if (!isValidEmail(email)) {
        displayError('emailError', 'Please enter a valid email address.');
    }

    // Validate password
    if (password === '') {
        displayError('passwordError', 'Please create a password.');
    }

    // Validate confirm password
    if (confirmPassword !== password) {
        displayError('confirmPasswordError', 'Passwords do not match.');
    }

    // Validate terms acceptance
    if (!acceptTerms) {
        displayError('termsError', 'Please accept the terms & conditions.');
    }

    // If no errors, show success message
    if (name && isValidEmail(email) && password && confirmPassword === password && acceptTerms) {
        showSuccessMessage();
    }
}

function isValidEmail(email) {
    // Basic email validation, you may want to use a more robust solution
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayError(elementId, errorMessage) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = errorMessage;
}

function resetErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => element.innerText = '');
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
}