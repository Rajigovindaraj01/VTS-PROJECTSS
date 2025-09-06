const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    let isValid = true;

    // Validation
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

    if (!isValid) return;

    let users = JSON.parse(localStorage.getItem("cake-user")) || [];
    let foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
        alert("Login Successful 🎉");
        window.location.href = "../Html/SpecialCakes.html";
    } else {
        alert("User not found. Please Sign Up first.");
        window.location.href = "../Html/Signup.html";
    }
});

function updateCartCount() {
    let storedCartieees = JSON.parse(localStorage.getItem("selectedCart")) || [];
    document.getElementById("cart-count").textContent = storedCartieees.length;
}
updateCartCount();
