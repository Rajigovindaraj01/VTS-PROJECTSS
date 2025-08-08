

// Show containersssssssss
  const userIcon = document.getElementById("loginsign");
  const loginSignupBox = document.getElementById("loginSignupBox");

  userIcon.addEventListener("click", () => {
    loginSignupBox.style.display = "block";
  });


  // Toggle login/signup
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const loginContainer = document.getElementById("loginContainer");
  const signupContainer = document.getElementById("signupContainer");

  loginTab.addEventListener("click", () => {
    loginContainer.style.display = "block";
    signupContainer.style.display = "none";
    loginTab.style.borderBottom = "3px solid salmon";
    signupTab.style.borderBottom = "none";
    signupTab.style.cursor="pointer";
    loginTab.style.cursor="pointer";
  });

  signupTab.addEventListener("click", () => {
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
    signupTab.style.borderBottom = "3px solid salmon";
    loginTab.style.borderBottom = "none";
  });

  //SignUp
  const signupBtn = document.querySelector(".s8");
  signupBtn.addEventListener("click", () => {
    const username = document.querySelector(".s3 input").value.trim();
    const lastname = document.querySelector(".s4 input").value.trim();
    const email = document.querySelector(".s5 input").value.trim();
    const password = document.querySelector(".s6 input").value.trim();
    const confirmPassword = document.querySelector(".s7 input").value.trim();

    if (!username || !lastname || !email || !password || !confirmPassword) {
      alert("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const userData = { username, lastname, email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Signup Successful!");
    loginTab.click();
  });

//login 
  const loginBtn = document.querySelector(".l6");
  loginBtn.addEventListener("click", () => {
    const username = document.querySelector(".l3 input").value.trim();
    const password = document.querySelector(".l4 input").value.trim();

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const storedData = JSON.parse(localStorage.getItem("user"));

    if (!storedData) {
      alert("No user found. Please sign up.");
      return;
    }

    if (username === storedData.username && password === storedData.password) {
      alert("Login Successful!");
      window.location.href = "../index.html"; 
    } else {
      alert("Invalid username or password.");
    }
  });
  window.addEventListener("load", () => {
    loginContainer.style.display = "block";
    signupContainer.style.display = "none";
  });


document.getElementById("closeBtn").addEventListener("click", () => {
  loginSignupBox.style.display = "none";
});




//pasword-icon
const toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const input = toggle.parentElement.querySelector(".password-input");

    if (input.type === "password") {
      input.type = "text";
      toggle.classList.remove("fa-eye");
      toggle.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      toggle.classList.remove("fa-eye-slash");
      toggle.classList.add("fa-eye");
    }
  });
});
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
//filtering
 const filterItems = document.querySelectorAll(".section3-items");
    const courses = document.querySelectorAll(".course-details-container .c1");

    filterItems.forEach(item => {
        item.addEventListener("click", () => {
            const selectedCategory = item.getAttribute("data-category");

            filterItems.forEach(el => {
                el.style.cursor="pointer";
                el.style.backgroundColor = "";
                el.style.color = "";
            });

            item.style.backgroundColor = "gray";
            item.style.color = "white";

            courses.forEach(course => {
                const courseCategories = course.getAttribute("data-category").split(" ");
                if (selectedCategory === "all" || courseCategories.includes(selectedCategory)) {
                    course.style.display = "block";
                } else {
                    course.style.display = "none";
                }
            });
        });
    });

// ----------------------display no of items in cart----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getCart() {
      const cart = localStorage.getItem("learning-website-cart");
      return cart ? JSON.parse(cart) : [];
    }

    function updateCartCount() {
      const cart = getCart();
      document.getElementById("cartCount").innerText = cart.length;
    }

    function showCartPopup() {
      const cart = getCart();
      if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
      }

      const course = cart[cart.length - 1];

      document.getElementById("courseTitle").innerText = course.title;
      document.getElementById("courseDesc").innerText = course.description;
      document.getElementById("courseRating").innerText = `Rating: ${course.rating}`;
      document.getElementById("courseExercises").innerText = `${course.exercises} Exercises • ${course.contentHours} hrs`;
      document.getElementById("originalPrice").innerText = `Rs. ${course.originalPrice}`;
      document.getElementById("discountAmount").innerText = `-Rs. ${course.originalPrice - course.price}`;
      document.getElementById("finalPrice").innerText = `Rs. ${course.price}`;

      document.getElementById("cartPopup").style.display = "block";
    }
    document.getElementById("checkoutBtn").addEventListener("click", function () {
      window.location.href = "../Html/billing.html";
    });
    document.getElementById("cartIcon").addEventListener("click", showCartPopup);
    updateCartCount();
// -----------------------------------------------------------------------------------------------------------------------------------------------
 document.getElementById("searchIcon").addEventListener("click", function () {
    window.location.href = "./Html/searching.html";
  });