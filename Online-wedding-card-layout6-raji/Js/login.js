const dropdownTitle=document.getElementById("dropdownTitle");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownTitle.addEventListener("click",()=>{
    dropdownMenu.classList.toggle("active");
})

const dropdownTitle2=document.getElementById("dropdownTitle2");
const dropdownMenu2 = document.getElementById("dropdownMenu2");

dropdownTitle2.addEventListener("click",()=>{
    dropdownMenu2.classList.toggle("active");
})

const dropdownTitle3=document.getElementById("dropdownTitle3");
const dropdownMenu3 = document.getElementById("dropdownMenu3");

dropdownTitle3.addEventListener("click",()=>{
    dropdownMenu3.classList.toggle("active");
})
const dropdownTitle4=document.getElementById("dropdownTitle4");
const dropdownMenu4 = document.getElementById("dropdownMenu4");

dropdownTitle4.addEventListener("click",()=>{
    dropdownMenu4.classList.toggle("active");
})




//for login

document.getElementById('signup-tab').addEventListener('click', function () {
    window.location.href = "../Pages/signup.html";
});

document.getElementById('login-btn').addEventListener('click', function () {
    const enteredEmail = document.getElementById('email').value.trim();
    const enteredPassword = document.getElementById('password').value.trim();

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (enteredEmail === "" || enteredPassword === "") {
        alert("Please fill in both email and password.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(enteredEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (enteredPassword.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        alert("Login Successful!");
        window.location.href = "../index.html";
    } else {
        alert("Email or password does not match. Please Sign Up first.");
    }
});
