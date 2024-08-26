function togglePassword(inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(iconId);
    const isPasswordVisible = passwordInput.type === "text";

    passwordInput.type = isPasswordVisible ? "password" : "text";
    toggleIcon.classList.toggle("fa-eye-slash", !isPasswordVisible);
    toggleIcon.classList.toggle("fa-eye", isPasswordVisible);
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const termsAccepted = document.getElementById('terms').checked;

    if (!termsAccepted) {
        alert("You must agree to the terms and conditions.");
        return;
    }

    // TODO: Send this data to your back-end API for registration
    console.log({ name, email, password, termsAccepted });
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember').checked;

    // TODO: Send this data to your back-end API for login
    console.log({ email, password, rememberMe });
});

function googleSignIn() {
    // TODO: Implement Google Sign-In functionality
    console.log('Google Sign-In clicked');
}

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Here you can send the token to your backend to verify the user
}

function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('strength-indicator');
    const strengthBar = document.getElementById('strength-bar');
    let strength = "Weak";
    let strengthClass = "weak";

    const passwordLength = password.length;

    if (passwordLength >= 8) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
            strength = "Strong";
            strengthClass = "strong";
        } else if (hasUpperCase || hasLowerCase || hasNumber || hasSpecialChar) {
            strength = "Medium";
            strengthClass = "medium";
        }
    }

    strengthIndicator.textContent = strength;
    strengthIndicator.className = `text-muted ${strengthClass}`;
    strengthBar.className = `strength-bar ${strengthClass}`;
}

// otp--section
function showOtpSection() {
    document.getElementById('register-section').style.display = 'none';
    document.getElementById('otp-section').style.display = 'block';
}

function moveToNext(current, position) {
    if (current.value.length == 1 && position < 6) {
        document.querySelectorAll('.otp-input')[position].focus();
    }
}