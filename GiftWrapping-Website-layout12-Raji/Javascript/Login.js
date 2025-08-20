//cart
let cart = JSON.parse(localStorage.getItem("giftwrapping-cart")) || [];

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}
updateCartCount();
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    let item = this.closest(".sec7-items");

    let product = {
      name: item.querySelector(".sec7-2").innerText,
      price: item.querySelector(".sec7-3").innerText,
      img: item.querySelector("img").src,
    };

    cart.push(product);
    localStorage.setItem("giftwrapping-cart", JSON.stringify(cart));

    alert(product.name + " added to cart!");
    updateCartCount();
  });
});

//search
const searchIcon = document.getElementById("search-icon");
const headLinks = document.getElementById("head-links");
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".sec7-items");

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();

  if (searchBox.style.display === "flex") {
    searchBox.style.display = "none";
    headLinks.style.display = "flex";
  } else {
    searchBox.style.display = "flex";
    headLinks.style.display = "none";
    searchInput.focus();
  }
});
function performSearch(query) {
  query = query.toLowerCase();

  products.forEach((item) => {
    const title = item.querySelector(".sec7-2").textContent.toLowerCase();
    if (title.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
searchBtn.addEventListener("click", () => {
  performSearch(searchInput.value.trim());
});
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    performSearch(searchInput.value.trim());
  }
});



//login
document.querySelector(".loginBtn").addEventListener("click", function () {
    let email = document.querySelector(".loginEmail").value.trim();
    let password = document.querySelector(".loginPassword").value.trim();

    if (!email || !password) {
        alert("Both fields are required!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("giftwrapping-users")) || [];
    let existingUser = users.find(u => u.email === email && u.password === password);

    if (existingUser) {
        alert("Login Successful 🎉 Redirecting to Home Page...");
        window.location.href = "../index.html"; 
    } else {
        alert("User not found or incorrect password. Please Sign-Up first.");
        window.location.href = "../Html/Signup.html"; 
    }
});