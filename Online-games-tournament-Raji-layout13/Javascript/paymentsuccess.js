//random-regid
function generateRegId() {
    const prefix = "CHESS"; 
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return prefix + randomNum;
  }
  document.getElementById("regId").innerText = generateRegId();


//pricing
const pricingBtns = document.querySelectorAll(".pricing");
const pricingContainer = document.getElementById("pricingContainer");

pricingBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    pricingContainer.style.display =
      pricingContainer.style.display === "block" ? "none" : "block";
  });
});





// login-display-block
const loginsignupContainer = document.querySelector('.login-signup-container');
const logins = document.getElementById('logins'); 

logins.addEventListener('click', function () {
  if (
    loginsignupContainer.style.display === 'none' ||
    loginsignupContainer.style.display === ''
  ) {
    loginsignupContainer.style.display = 'block';
  } else {
    loginsignupContainer.style.display = 'none';
  }
});


//login-signup
// Elements
const loginTabs = document.querySelectorAll(".login-tab");
const signupTabs = document.querySelectorAll(".signup-tab");

const loginContainer = document.querySelector(".login-container");
const signupContainer = document.querySelector(".signup-container");

const loginBtn = loginContainer.querySelector(".login-button");
const signupBtn = signupContainer.querySelector(".login-button");

const loginUsername = loginContainer.querySelector(".username-input input");
const loginPassword = loginContainer.querySelector(".password-input input");

const signupInputs = signupContainer.querySelectorAll(".username-input input, .password-input input");

const needAccLinks = document.querySelectorAll(".needacc span");


function showLogin() {
  loginContainer.style.display = "grid";
  signupContainer.style.display = "none";

  loginTabs.forEach(t => {
    t.style.color = "red";
    t.style.textDecoration = "underline";
  });
  signupTabs.forEach(t => {
    t.style.color = "black";
    t.style.textDecoration = "none";
  });
}

function showSignup() {
  signupContainer.style.display = "grid";
  loginContainer.style.display = "none";

  signupTabs.forEach(t => {
    t.style.color = "red";
    t.style.textDecoration = "underline";
  });
  loginTabs.forEach(t => {
    t.style.color = "black";
    t.style.textDecoration = "none";
  });
}


loginTabs.forEach(tab => tab.addEventListener("click", showLogin));
signupTabs.forEach(tab => tab.addEventListener("click", showSignup));

needAccLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (link.textContent.trim().toLowerCase() === "signup") {
      showSignup();
    } else {
      showLogin();
    }
  });
});

function getUsers() {
  return JSON.parse(localStorage.getItem("tournament-users")) || [];
}

function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("tournament-users", JSON.stringify(users));
}

signupBtn.addEventListener("click", () => {
  const [username, phone, email, password] = Array.from(signupInputs).map(i => i.value.trim());

  if (!username || !phone || !email || !password) {
    alert("⚠️ All fields are required!");
    return;
  }

  const users = getUsers();
  if (users.some(u => u.email === email)) {
    alert("❌ Email already exists. Please login.");
    showLogin();
    return;
  }

  saveUser({ username, phone, email, password });
  alert("✅ Signup successful! Please login now.");
  showLogin();
});

loginBtn.addEventListener("click", () => {
  const usernameOrEmail = loginUsername.value.trim();
  const password = loginPassword.value.trim();

  if (!usernameOrEmail || !password) {
    alert("⚠️ Please enter username/email and password.");
    return;
  }

  const users = getUsers();
  const found = users.find(
    u =>
      (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
      u.password === password
  );

  if (found) {
    alert(`🎉 Welcome back, ${found.username}!`);
  } else {
    alert("❌ Invalid credentials. Please signup.");
    showSignup();
  }
});

showLogin();



//navigation
const navi = document.querySelectorAll('.backtohome');

navi.forEach(navigation=>{
    navigation.addEventListener("click",function(){
        window.location.href='../index.html';
    })
})