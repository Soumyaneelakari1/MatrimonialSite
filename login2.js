// Redirect to Register Page
document.getElementById("registerBtn").addEventListener("click", function() {
    window.location.href = "register.html";
});

// Toggle Password Visibility
document.getElementById("togglePassword").addEventListener("click", function() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    if (phone && password) {
        alert("Login successful for " + phone);
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Please enter both phone number and password.");
    }
});
