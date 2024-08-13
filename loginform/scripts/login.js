document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    clearLoginErrors();

    // Get form values
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    let isValid = true;

    // Validate username
    if (username.length < 3) {
        isValid = false;
        document.getElementById('loginUsernameError').textContent = 'Username must be at least 3 characters long.';
    }

    // Validate password
    if (password.length < 6) {
        isValid = false;
        document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters long.';
    }

    // If all validations pass
    if (isValid) {
        alert('Login successful!');
        // Perform the login action (e.g., redirect to a dashboard page)
        window.location.href = 'dashboard.html';  // Redirect to a dashboard or home page
    }
});

function clearLoginErrors() {
    document.getElementById('loginUsernameError').textContent = '';
    document.getElementById('loginPasswordError').textContent = '';
}
