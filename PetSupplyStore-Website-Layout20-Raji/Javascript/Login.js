const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.head3');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuToggle.classList.toggle('toggle');
});






//cart-display

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("pet-cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}
updateCartCount();



//dropdown
const dog = document.getElementById('dog');
const dog1 = document.getElementById('dog1');

dog.addEventListener('click', function(event) {
  event.stopPropagation(); 
  dog1.style.display = dog1.style.display === 'grid' ? 'none' : 'grid';
});

// close dropdown when clicking outside
document.addEventListener('click', function() {
  dog1.style.display = 'none';
});




const cat = document.getElementById('cat');
const cat1 = document.getElementById('cat1');

// Toggle dropdown visibility
cat.addEventListener('click', function(event) {
  event.stopPropagation();
  cat1.style.display = cat1.style.display === 'grid' ? 'none' : 'grid';
});
document.addEventListener('click', function() {
  cat1.style.display = 'none';
});



const smallpets = document.getElementById('small-pets');
const smallpets1 = document.getElementById('small-pets1');
smallpets.addEventListener('click', function(event) {
  event.stopPropagation();
  smallpets1.style.display = smallpets1.style.display === 'grid' ? 'none' : 'grid';
});
document.addEventListener('click', function() {
  smallpets1.style.display = 'none';
});


const petservice = document.getElementById('petservice');
const petservice1 = document.getElementById('petservice-1');
petservice.addEventListener('click', function(event) {
  event.stopPropagation();
  petservice1.style.display = petservice1.style.display === 'grid' ? 'none' : 'grid';
});
document.addEventListener('click', function() {
  petservice1.style.display = 'none';
});



const brand = document.getElementById('brand');
const brand1 = document.getElementById('brand1');
brand.addEventListener('click', function(event) {
  event.stopPropagation();
  brand1.style.display = brand1.style.display === 'grid' ? 'none' : 'grid';
});
document.addEventListener('click', function() {
  brand1.style.display = 'none';
});




const breed = document.getElementById('breed');
const breed1 = document.getElementById('breed1');
breed.addEventListener('click', function(event) {
  event.stopPropagation();
  breed1.style.display = breed1.style.display === 'grid' ? 'none' : 'grid';
});
document.addEventListener('click', function() {
  breed1.style.display = 'none';
});









const loginBtn = document.getElementById("login-btn");
    const loginEmail = document.getElementById("login-email");
    const loginPassword = document.getElementById("login-password");
    const loginError = document.getElementById("login-error");

    const popup = document.getElementById("popup");
    const openPopup = document.getElementById("open-popup");
    const closePopup = document.getElementById("close-popup");

    const signupBtn = document.getElementById("signup-btn");
    const signupEmail = document.getElementById("signup-email");
    const signupPassword = document.getElementById("signup-password");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const signupError = document.getElementById("signup-error");

    // Open popup
    openPopup.addEventListener("click", () => {
      popup.style.display = "flex";
    });

    // Close popup
    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });

    // Signup
    signupBtn.addEventListener("click", () => {
      signupError.innerText = "";
      if (!firstName.value || !lastName.value || !signupEmail.value || !signupPassword.value) {
        signupError.innerText = "All fields are required.";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupEmail.value)) {
        signupError.innerText = "Enter a valid email.";
        return;
      }
      if (signupPassword.value.length < 6) {
        signupError.innerText = "Password must be at least 6 characters.";
        return;
      }

      // Save to localStorage
      const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: signupEmail.value,
        password: signupPassword.value
      };
      localStorage.setItem("PetUserLoginDetail", JSON.stringify(user));

      alert("Account created successfully!");
      window.location.href = "../index.html"; 
    });

    // Login
    loginBtn.addEventListener("click", () => {
      loginError.innerText = "";
      const storedUser = JSON.parse(localStorage.getItem("PetUserLoginDetail"));
      if (!storedUser) {
        loginError.innerText = "No account found. Please create one.";
        return;
      }
      if (loginEmail.value === storedUser.email && loginPassword.value === storedUser.password) {
        alert("Login successful!");
        window.location.href = "../index.html";
      } else {
        loginError.innerText = "Invalid email or password.";
      }
    });