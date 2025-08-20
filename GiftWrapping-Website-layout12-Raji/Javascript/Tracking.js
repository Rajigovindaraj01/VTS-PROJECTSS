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




//tracking
    function generateRandomAddress() {
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let result = "";
      for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return "Your Booking Address: " + result;
    }

    document.getElementById("bookingAddress").textContent = generateRandomAddress();

    const steps = document.querySelectorAll(".circle");
    function highlightRandomStep() {
      steps.forEach(step => step.classList.remove("blink"));
      let randomIndex = Math.floor(Math.random() * steps.length);
      steps[randomIndex].classList.add("blink");
    }

    highlightRandomStep(); 
    setInterval(highlightRandomStep, 10000);