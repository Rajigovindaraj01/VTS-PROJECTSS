document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector(".c3");

    submitBtn.addEventListener("click", () => {
        const emailInput = document.getElementById("email").value.trim();
        const passwordInput = document.getElementById("password").value.trim();

        const storedUser = JSON.parse(localStorage.getItem("signupData"));

        if (!storedUser) {
            alert("New user. Please sign up.");
            window.location.href = "../Pages/Signup.html";
            return;
        }

        if (
            storedUser.email === emailInput &&
            storedUser.password === passwordInput
        ) {
            alert("Login successful!");
            localStorage.setItem("loggedInUser", storedUser.name);
            window.location.href = "../index.html";
        } else {
            alert("Invalid credentials. Please try again.or New User please signup");
        }
    });
});
