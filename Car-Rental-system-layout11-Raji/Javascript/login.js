const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Switch tabs
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
});

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.style.display = 'flex';
    loginForm.style.display = 'none';
});
const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    window.location.href = '../index.html';
});

// Signup functionality
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;

    let users = JSON.parse(localStorage.getItem('car-users')) || [];
    if (users.some(user => user.email === email)) {
        signupForm.querySelector('.message').textContent = "Email already registered!";
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('car-users', JSON.stringify(users));
    signupForm.querySelector('.message').style.color = '#00ff00';
    signupForm.querySelector('.message').textContent = "Signup successful! You can login now.";
    signupForm.reset();
});
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('car-users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        loginForm.querySelector('.message').style.color = '#00ff00';
        loginForm.querySelector('.message').textContent = "Login successful! Redirecting...";
        setTimeout(() => {
            localStorage.setItem('current-user', JSON.stringify(user));
            window.location.href = '../index.html';
        }, 1000);
    } else {
        loginForm.querySelector('.message').style.color = '#ffcccc';
        loginForm.querySelector('.message').textContent = "Invalid email or password!";
    }
});
