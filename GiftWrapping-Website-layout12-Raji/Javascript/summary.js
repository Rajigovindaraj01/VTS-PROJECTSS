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



// Buy Now button click and proceed to pay
document.querySelector(".sec1-col3 div:first-child").addEventListener("click", saveAndGoSummary);
document.querySelector(".s11").addEventListener("click", saveAndGoSummary);

function saveAndGoSummary() {
    let productImg = document.querySelector(".sec1-col1").textContent.trim(); 
    let productTitle = document.querySelector(".product-name").textContent.trim();
    let productPrice = document.querySelector(".product-Perprice").textContent.trim();
    let productRating = document.querySelector(".product-rating").innerHTML.trim();
    let productQuantity = document.querySelector(".quantity-selectedPrice").textContent.trim();

    let subtotal = document.querySelector(".s2 div:last-child").textContent.trim();
    let discount = document.querySelector(".s3 div:last-child").textContent.trim();
    let tax = document.querySelector(".s4 div:last-child").textContent.trim();
    let total = document.querySelector(".s10 div:last-child").textContent.trim();

    let country = document.querySelector(".s6 input").value.trim();
    let state = document.querySelector(".s7 input").value.trim();
    let city = document.querySelector(".s8 input").value.trim();
    let pincode = document.querySelector(".s9 input").value.trim();

    let giftSummary = {
        product: {
            image: productImg,
            title: productTitle,
            price: productPrice,
            rating: productRating,
            quantity: productQuantity
        },
        order: {
            subtotal: subtotal,
            discount: discount,
            tax: tax,
            total: total
        },
        address: {
            country: country,
            state: state,
            city: city,
            pincode: pincode
        }
    };

    localStorage.setItem("gift-summary", JSON.stringify(giftSummary));
    window.location.href = "../Html/Billing-checkout1.html";
}

// Remove button
document.querySelector(".sec1-col3 div:nth-child(2)").addEventListener("click", function () {
    localStorage.removeItem("giftwrap-summary");
    alert("Product removed...you are redirect to Product-Page")
    window.location.href = "../Html/giftWrappers.html";
});


//Retrieve from localStorage
const savedGift = JSON.parse(localStorage.getItem("giftsheetSelected"));
const savedProduct = JSON.parse(localStorage.getItem("giftwrapping-product"));

const productImage = document.querySelector(".sec1-col1");
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-Perprice");
const productQty = document.querySelector(".quantity-selectedPrice");
const subtotalDiv = document.querySelector(".s2 div:last-child");
const discountDiv = document.querySelector(".s3 div:last-child");
const taxDiv = document.querySelector(".s4 div:last-child");
const totalDiv = document.querySelector(".s10 div:last-child");
const couponCodeDiv = document.querySelector(".coupon-code");
const applyCouponDiv = document.querySelector(".Apply-coupon");

let tax = 150;
let subtotal = 0;
let discount = 0;

if (savedGift && savedProduct) {
  if (productImage) {
    productImage.innerHTML = `<img src="${savedProduct.image}" alt="${savedProduct.name}" width="100">`;
  }

  if (productName) productName.textContent = savedProduct.name;

  if (productPrice) productPrice.textContent = `Rs.${savedGift.pricePerPiece} / Per Piece`;

  if (productQty) productQty.textContent = `Quantity: ${savedGift.quantity}`;

  if (subtotalDiv) {
    subtotalDiv.textContent = `Rs.${savedGift.totalAmount}`;
  }

  if (discountDiv) discountDiv.textContent = `- Rs.0`;

  if (taxDiv) taxDiv.textContent = `Rs.${tax}`;

  if (totalDiv) {
    totalDiv.textContent = `Rs.${savedGift.totalAmount + tax}`;
  }

  subtotal = savedGift.totalAmount;
}

//coupon
function generateCoupon() {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let coupon = "";
  for (let i = 0; i < 3; i++) {
    coupon += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (let i = 0; i < 3; i++) {
    coupon += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return coupon;
}


couponCodeDiv.addEventListener("click", function () {
  let code = generateCoupon();
  couponCodeDiv.textContent = code;
});

applyCouponDiv.addEventListener("click", function () {
  let code = couponCodeDiv.textContent;

  if (code !== "Coupon Code") {
    discount = Math.floor(subtotal * 0.2);
    discountDiv.textContent = `- Rs.${discount}`;

    let total = subtotal - discount + tax;
    totalDiv.textContent = `Rs.${total}`;
  } else {
    alert("Please generate a coupon code first!");
  }
});





















