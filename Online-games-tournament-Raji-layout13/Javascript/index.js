const sections = document.querySelectorAll(".section1-container > div");

sections.forEach((sec, index) => {
    if(index === 0){
        sec.style.display = "block";
    } else {
        sec.style.display = "none";
    }
});

let current = 0;

function showNextSection() {
    sections[current].style.display = "none";       
    current = (current + 1) % sections.length;      
    sections[current].style.display = "block";      
}
setInterval(showNextSection, 2000);











//rewards change
const sections1 = document.querySelectorAll(".sec3-part1-col2 > div");
sections1.forEach((sec, index) => {
    sec.style.display = index === 0 ? "block" : "none";
});

let current1 = 0;

function showNextSection1() {
    sections1[current1].style.display = "none";

    current1 = (current1 + 1) % sections1.length;

    sections1[current1].style.display = "block";
}
setInterval(showNextSection1, 2000);


//feature tournaments
const sections2 = document.querySelectorAll(".sec5-part1");
let current2 = 0;
sections2[current2].classList.add("active");

function showNextSection2() {
    sections2[current2].classList.remove("active");  
    current2 = (current2 + 1) % sections2.length;    
    sections2[current2].classList.add("active");     
}

setInterval(showNextSection2, 3000);


//pricing
const pricingBtns = document.querySelectorAll(".pricing");
const pricingContainer = document.getElementById("pricingContainer");

pricingBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    pricingContainer.style.display =
      pricingContainer.style.display === "block" ? "none" : "block";
  });
});



//login-display-block
const loginsignupContainer = document.getElementById('login-signup-containers')
const logins = document.getElementById('logins')

logins.addEventListener('click',function(){
    if(loginsignupContainer.style.display==="none"|| loginsignupContainer.style.display === ''){
        loginsignupContainer.style.display = "block";
    }else{
        loginsignupContainer.style.display="none";
    }
})

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
