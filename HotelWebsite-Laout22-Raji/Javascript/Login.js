// Tabs
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginTab.addEventListener('click', ()=>{
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

signupTab.addEventListener('click', ()=>{
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

const STORAGE_KEY = 'hotel-users-details';

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    if(!name || !email || !password || !confirm) { alert('All fields are required'); return; }
    if(password.length < 6) { alert('Password must be at least 6 characters'); return; }
    if(password !== confirm) { alert('Passwords do not match'); return; }
    if(!/^\S+@\S+\.\S+$/.test(email)) { alert('Enter a valid email'); return; }

    let users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const exist = users.find(u => u.email === email);
    if(exist){ alert('User already exists'); return; }

    users.push({ name, email, password });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    alert('Signup successful! You can login now.');
    signupForm.reset();
    loginTab.click();
});


loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if(!email || !password){ alert('All fields are required'); return; }

    let users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if(user){
        alert(`Welcome ${user.name}! Login successful.`);
        localStorage.setItem('hotel-logged-in', JSON.stringify(user));
        window.location.href = "../index.html";
    } else {
        alert('Invalid email or password');
    }
});
