document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form values
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;

    let isValid = true;

    // Validate username
    if (username.length < 3) {
        isValid = false;
        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
    }

    // Validate name
    if (name.length < 2) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters long.';
    }

    // Validate password
    if (password.length < 6) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }

    // If all validations pass
    if (isValid) {
        alert('Registration successful!');
        window.location.href = 'login.html';  // Redirect to login page
    }
});

function clearErrors() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('nameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('emailError').textContent = '';
}
