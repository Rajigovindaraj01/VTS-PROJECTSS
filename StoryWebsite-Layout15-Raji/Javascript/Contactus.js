const send = document.getElementById('sendnow');
send.addEventListener('click',()=>{
    alert("Message sent ! We will get back to you soon")
})


const popup = document.getElementById("popup");
const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const signInTab = document.getElementById("signInTab");
const loginTab = document.getElementById("loginTab");
const signInForm = document.getElementById("signInForm");
const loginForm = document.getElementById("loginForm");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");

// Open Popup
openPopupBtn.addEventListener("click", () => {
    popup.style.display = "block";
    showTab("sign-in");
});

// Close Popup
closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Switch Tabs
signInTab.addEventListener("click", () => showTab("sign-in"));
loginTab.addEventListener("click", () => showTab("log-in"));

function showTab(tab) {
    signInForm.style.display = "none";
    loginForm.style.display = "none";
    signInTab.classList.remove("active-tab");
    loginTab.classList.remove("active-tab");

    if (tab === "sign-in") {
        signInForm.style.display = "flex";
        signInTab.classList.add("active-tab");
    } else {
        loginForm.style.display = "flex";
        loginTab.classList.add("active-tab");
    }
}

// Register
registerBtn.addEventListener("click", () => {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!name || !email || !phone || !password) {
        alert("All fields are required!");
        return;
    }

    let user = { name, email, phone, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration Successful! You can login now.");
    showTab("log-in");
});

// Login
loginBtn.addEventListener("click", () => {
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();

    let userData = localStorage.getItem(email);
    if (!userData) {
        alert("No account found! Please register first.");
        return;
    }

    let user = JSON.parse(userData);
    if (user.password === password) {
        alert("Login Successful! Welcome " + user.name);
        popup.style.display = "none";
    } else {
        alert("Incorrect Password!");
    }
});