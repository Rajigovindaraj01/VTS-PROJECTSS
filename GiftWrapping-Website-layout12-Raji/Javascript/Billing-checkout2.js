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
function clearCart() {
    localStorage.removeItem("giftwrapping-cart");
    cart = [];
    renderCart();
    updateCartCount();
}

document.querySelector(".b21").addEventListener("click", function() {
    alert("Payment successful! Thank you for your order.");
    clearCart();
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




//proceedtopay
document.querySelector(".b21").addEventListener("click", function(){
  document.getElementById("overlay").style.display = "flex";
});

document.getElementById("closeBtn").addEventListener("click", function(){
  document.getElementById("overlay").style.display = "none";
});



//retreive
// Retrieve cart from localStorage
let carts = JSON.parse(localStorage.getItem("giftwrapping-cart")) || [];

function renderCart() {
    let cartContainer = document.querySelector(".b13");
    cartContainer.innerHTML = "";

    let total = 0;

    carts.forEach((item, index) => {
        let row = document.createElement("div");
        row.classList.add("cart-row");
        row.style.display = "grid";
        row.style.gridTemplateColumns = "1fr 2fr 1fr";
        row.style.alignItems = "center";
        row.style.marginBottom = "10px";

        let imgDiv = document.createElement("div");
        imgDiv.classList.add("b13-1");
        let img = document.createElement("img");
        img.src = item.img;
        img.style.width = "60px";
        img.style.height = "60px";
        imgDiv.appendChild(img);

      
        let titleDiv = document.createElement("div");
        titleDiv.classList.add("b13-2");
        titleDiv.innerHTML = `
            <div>${item.name}</div>
            <div>Qty: 1</div>
        `;

      
        let priceDiv = document.createElement("div");
        priceDiv.classList.add("b13-3");
        priceDiv.textContent = (typeof item.price === "number") ? 
            "Rs." + item.price : item.price;

        
        row.appendChild(imgDiv);
        row.appendChild(titleDiv);
        row.appendChild(priceDiv);
        cartContainer.appendChild(row);

        
        let num = parseInt(item.price.toString().replace(/[^0-9]/g, ""));
        total += isNaN(num) ? 0 : num;
    });

    
    let tax = 150;
    let grandTotal = total + tax;

   
    let totalDivs = document.querySelectorAll(".b15 div:last-child");
    if (totalDivs[0]) totalDivs[0].textContent = "Rs." + total;
    if (totalDivs[1]) totalDivs[1].textContent = "Rs." + grandTotal;
}

// Run when page loads
renderCart();

