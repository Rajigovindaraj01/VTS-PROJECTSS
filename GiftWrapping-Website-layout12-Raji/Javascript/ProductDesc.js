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


//drop-down-product-selection
document.querySelectorAll(".sec1-col2-4").forEach(section => {
  const head = section.querySelector(".sec1-head");
  const body = section.querySelector(".sec1-body");

  if (head && body) {
    head.addEventListener("click", () => {
      body.style.display = body.style.display === "block" ? "none" : "block";
    });
  }
});


// // Retrieve the product from localStorage
// const product = JSON.parse(localStorage.getItem("giftwrapping-product"));

// if (product) {
//     const productImage = document.querySelector(".sec1-col1-1.imagess");
//     if(productImage) productImage.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

//     const productName = document.querySelector(".sec1-col2-1.product-name");
//     if(productName) productName.textContent = product.name;

//     const productPrice = document.querySelector(".sec1-col2-5-1 strong");
//     if(productPrice) productPrice.textContent = product.price;
// } else {
//     console.log("No product found in localStorage");
// }




// Retrieve + selecct
const product = JSON.parse(localStorage.getItem("giftwrapping-product"));

let pricePerPiece = 18; //
if (product && product.price) {
    const match = product.price.match(/\d+/);
    if (match) pricePerPiece = Number(match[0]);
}

if (product) {
    const productImage = document.querySelector(".sec1-col1-1.imagess");
    if (productImage) productImage.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

    const productName = document.querySelector(".sec1-col2-1.product-name");
    if (productName) productName.textContent = product.name;

    const productPrice = document.querySelector(".sec1-col2-5-1 strong");
    if (productPrice) productPrice.textContent = pricePerPiece;
}

const dropdowns = document.querySelectorAll(".sec1-col2-4");
const priceDiv = document.querySelector(".sec1-col2-5-2");
const skipBtn = document.querySelector(".sec1-col2-skipbutton");

let giftSelection = {
  size: null,
  material: null,
  quantity: null,
  pricePerPiece: pricePerPiece,
  totalAmount: 0
};


function updatePrice() {
  if (giftSelection.quantity) {
    let price = giftSelection.pricePerPiece;

    if (giftSelection.quantity >= 100) price = 18;

    const total = giftSelection.quantity * price;

    giftSelection.totalAmount = total;

    priceDiv.innerHTML = `For ${giftSelection.quantity} Qty <span> (Rs.${price} / Per Piece) = Rs.${total}</span>`;

    localStorage.setItem("giftsheetSelected", JSON.stringify(giftSelection));
  }
}
dropdowns.forEach(drop => {
  const headLabel = drop.querySelector(".sec1-head div:first-child");
  const body = drop.querySelector(".sec1-body");
  if (!body) return;

  headLabel.addEventListener("click", () => {
    body.style.display = body.style.display === "block" ? "none" : "block";
  });

  body.querySelectorAll("div").forEach(item => {
    item.addEventListener("click", () => {
      headLabel.textContent = item.textContent;
      body.style.display = "none";

      const title = drop.querySelector("div:first-child").textContent.trim();
      if (title === "Size") giftSelection.size = item.textContent;
      else if (title === "Material") giftSelection.material = item.textContent;
      else if (title === "Quantity") giftSelection.quantity = Number(item.textContent);

      updatePrice();
    });
  });
});

// Skip & Continue click
skipBtn.addEventListener("click", () => {
  if (!giftSelection.size) giftSelection.size = "-";
  if (!giftSelection.material) giftSelection.material = "-";
  if (!giftSelection.quantity) giftSelection.quantity = 1;
  localStorage.setItem("giftsheetSelected", JSON.stringify(giftSelection));
  alert("Selection saved!");
  window.location.href = "../Html/summary.html"; 
});


//pincode
const pincodeInput = document.getElementById("pincode");
  const deliveryDateDiv = document.getElementById("delivery-date");

  pincodeInput.addEventListener("input", () => {
    const pin = pincodeInput.value;

    if(pin.length === 6){ 
      const today = new Date();
      const randomDays = Math.floor(Math.random() * 7) + 1; 
      const deliveryDate = new Date(today);
      deliveryDate.setDate(today.getDate() + randomDays);
      const formattedDate = deliveryDate.getDate().toString().padStart(2, '0') + '/' +
                            (deliveryDate.getMonth() + 1).toString().padStart(2, '0') + '/' +
                            deliveryDate.getFullYear();

      deliveryDateDiv.textContent = `Estimated Delivery: ${formattedDate}`;
    } else {
      deliveryDateDiv.textContent = ""; 
    }
  });