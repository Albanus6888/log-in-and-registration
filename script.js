const toggleForm = document.getElementById('toggle-form');
const formTitle = document.getElementById('form-title');
const loginFields = document.getElementById('login-fields');
const registerFields = document.getElementById('register-fields');
const formButton = document.getElementById('form-button');

toggleForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (loginFields.style.display === "none") {
        loginFields.style.display = "block";
        registerFields.style.display = "none";
        formTitle.textContent = "Login";
        formButton.textContent = "Login";
        toggleForm.textContent = "Don't have an account? Register here";
    } else {
        loginFields.style.display = "none";
        registerFields.style.display = "block";
        formTitle.textContent = "Register";
        formButton.textContent = "Register";
        toggleForm.textContent = "Already have an account? Login here";
    }
});
// JavaScript for password toggle
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        this.textContent = "🙈"; // Change icon
    } else {
        passwordField.type = "password";
        this.textContent = "👁️";
    }
});
document.getElementById("email").addEventListener("input", function () {
    const feedback = document.getElementById("emailFeedback");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.value)) {
        feedback.style.display = "block";
    } else {
        feedback.style.display = "none";
    }
});
