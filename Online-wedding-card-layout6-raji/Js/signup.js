//for drop-downs

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



//for signup

document.getElementById('login-tab').addEventListener('click',function(){
    window.location.href="../Pages/login.html";
})

document.getElementById('signup-tab').addEventListener('click',function(){
    alert("You are already on the signup page")
})

document.getElementById('login-btn').addEventListener('click',function(){
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const rePassword = document.getElementById('re-password').value.trim();


    if(!email || !password || !rePassword){
    alert("please fill in all fields.");
    return;
}

if(!email.includes('@')|| !email.includes('.')){
    alert('please enter a valid email')
}

if(password.length<6){
    alert("Password must be atlease 6 characters.");
    return;
}

if(password !== rePassword){
    alert("passwords do not match.")
}

localStorage.setItem('email',email);
localStorage.setItem('password',password);

alert("Signup successful! Your details have been stored.hereafter you can login only.")
window.location.href ="../index.html";

})
