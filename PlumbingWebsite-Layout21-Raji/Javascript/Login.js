const plum = document.getElementById('plumbing');
const plumOver = document.getElementById('plum-over');

plum.addEventListener('click',function(){
    plumOver.style.display='block';
})
document.addEventListener('keypress',function(){
    plumOver.style.display='none';
})



const drains = document.getElementById('drains');
const drainsOver = document.getElementById('drains-over');

drains.addEventListener('click',function(){
    drainsOver.style.display='block';
})
document.addEventListener('keypress',function(){
    drainsOver.style.display='none';
})


const commercial = document.getElementById('commercial');
const commercialOver = document.getElementById('commercial-over');

commercial.addEventListener('click',function(){
    commercialOver.style.display='block';
})
document.addEventListener('keypress',function(){
    commercialOver.style.display='none';
})





// Tab switching
const signupTab = document.getElementById("signup-tab");
const loginTab = document.getElementById("login-tab");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

signupTab.addEventListener("click", () => {
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
});

loginTab.addEventListener("click", () => {
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
});

// Link switching
document.getElementById("go-login").onclick = () => loginTab.click();
document.getElementById("go-signup").onclick = () => signupTab.click();

// Signup
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (!name || !email || !password) {
    alert("All fields are required!");
    return;
  }

  let user = { name, email, password };
  localStorage.setItem("plumbing-userdetail", JSON.stringify(user));

  alert("Signup successful! Please login.");
  loginTab.click();
});

// Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  let storedUser = JSON.parse(localStorage.getItem("plumbing-userdetail"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("Login successful!");
    window.location.href = "../index.html";
  } else {
    alert("Invalid email or password!");
  }
});




const login = document.getElementById('login');
login.addEventListener('click',function(){
    window.location.href='../Html/Login.html'
})


const home = document.getElementById('home');
home.addEventListener('click',function(){
    window.location.href='../index.html'
})