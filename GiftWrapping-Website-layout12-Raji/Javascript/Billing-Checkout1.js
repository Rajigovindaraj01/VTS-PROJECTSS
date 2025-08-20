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



//Retrieve
document.addEventListener("DOMContentLoaded", function () {
    let savedSummary = JSON.parse(localStorage.getItem("gift-summary"));

    if (savedSummary) {

        // Title + Quantity
        document.querySelector(".b13-2").innerHTML = `
            <div>${savedSummary.product.title}</div>
            <div>Qty: ${savedSummary.product.quantity}</div>
        `;

        document.querySelector(".b13-3").textContent = savedSummary.product.price;

        document.querySelector(".b14 div:last-child").textContent = savedSummary.order.tax;
        let allTotals = document.querySelectorAll(".b15 div:last-child");
        allTotals.forEach(el => el.textContent = savedSummary.order.total);
    }
});


// Retrieve from localStorage
const savedProduct = JSON.parse(localStorage.getItem("giftwrapping-product"));

if (savedProduct && savedProduct.image) {
  const imgContainer = document.querySelector(".b13-1");
  const img = document.createElement("img");
  img.src = savedProduct.image;
  img.alt = savedProduct.name;
  imgContainer.appendChild(img);
}



//proceedtopay
document.querySelector(".b21").addEventListener("click", function(){
  document.getElementById("overlay").style.display = "flex";
});

document.getElementById("closeBtn").addEventListener("click", function(){
  document.getElementById("overlay").style.display = "none";
});