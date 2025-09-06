const signupForm = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const captcha = document.getElementById("captcha");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    let isValid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!email) {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (!captcha.checked) {
        alert("Please verify you are not a robot.");
        isValid = false;
    }

    if (!isValid) return;

    let users = JSON.parse(localStorage.getItem("cake-user")) || [];

    let existingUser = users.find(u => u.email === email);
    if (existingUser) {
        alert("User already exists. Please log in.");
        window.location.href = "../Html/Login.html";
        return;
    }

    users.push({ email, password });
    localStorage.setItem("cake-user", JSON.stringify(users));

    alert("Sign Up Successful 🎉");
    window.location.href = "../index.html"; 
});


function updateCartCount() {
    let storedCartieees = JSON.parse(localStorage.getItem("selectedCart")) || [];
    document.getElementById("cart-count").textContent = storedCartieees.length;
}
updateCartCount();