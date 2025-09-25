const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.head3');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuToggle.classList.toggle('toggle');
});






// //cart-display

// function updateCartCount() {
//   let cart = JSON.parse(localStorage.getItem("pet-cart")) || [];
//   document.getElementById("cart-count").innerText = cart.length;
// }
// updateCartCount();



//dropdown
const dog = document.getElementById('dog');
const dog1 = document.getElementById('dog1');

dog.addEventListener('click', function(event) {
  event.stopPropagation(); // prevent immediate close
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







// Retrieve cart
let cart = JSON.parse(localStorage.getItem("pet-cart")) || [];

const cartContainer = document.querySelector(".cart-container .col1");
const cartCountEl = document.getElementById("cart-count");

// Elements for totals
const subtotalEl = document.querySelector(".c8 div:last-child");
const totalEl = document.querySelector(".c9 div:last-child");
const discountEl = document.createElement("div"); // to show discount
discountEl.className = "discount-msg";
document.querySelector(".c9").appendChild(discountEl);

// Payment method selection
const paymentImgs = document.querySelectorAll(".c12 img");
let selectedPayment = null;
paymentImgs.forEach(img => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    paymentImgs.forEach(i => i.style.border = "none");
    img.style.border = "2px solid green";
    selectedPayment = img.getAttribute("src");
  });
});

// Coupon
const couponBtn = document.querySelector(".c5-2");
const couponInput = document.querySelector(".c5-1 input");
let discount = 0;

couponBtn.addEventListener("click", () => {
  if (couponInput.value.trim().toUpperCase() === "NEW50") {
    discount = 50;
    discountEl.innerText = `Discount Applied: -₹${discount}`;
  } else {
    discount = 0;
    discountEl.innerText = `Invalid Coupon`;
  }
  updateTotals();
});

// Update header cart count
function updateCartCount() {
  cartCountEl.innerText = cart.length;
}

// Render cart items
function renderCart() {
  // Remove old items first
  cartContainer.querySelectorAll(".c4").forEach(el => el.remove());

  cart.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "c4";
    div.innerHTML = `
      <div class="remove-item"><i class="fa-solid fa-trash-can"></i></div>
      <div class="c4-2">
        <div class="product-image"><img src="${product.mainImage}" alt=""></div>
        <div class="product-title">${product.title}</div>
      </div>
      <div class="price">${product.price}</div>
      <div class="quantity">
        <div class="minus">-</div>
        <div class="qty">${product.qty}</div>
        <div class="plus">+</div>
      </div>
      <div class="Subtotal">₹${(parseFloat(product.price.replace('₹',''))*product.qty).toFixed(2)}</div>
    `;

    const couponSection = cartContainer.querySelector(".c5");
    cartContainer.insertBefore(div, couponSection);

    // Event listeners
    div.querySelector(".remove-item").addEventListener("click", () => {
      cart.splice(index,1);
      localStorage.setItem("pet-cart", JSON.stringify(cart));
      updateCartCount();
      renderCart();
    });

    div.querySelector(".plus").addEventListener("click", () => {
      cart[index].qty += 1;
      localStorage.setItem("pet-cart", JSON.stringify(cart));
      renderCart();
    });

    div.querySelector(".minus").addEventListener("click", () => {
      if(cart[index].qty > 1){
        cart[index].qty -= 1;
        localStorage.setItem("pet-cart", JSON.stringify(cart));
        renderCart();
      }
    });
  });

  updateTotals();
}

// Update subtotal and total
function updateTotals() {
  let subtotal = cart.reduce((acc, p) => acc + parseFloat(p.price.replace('₹','')) * p.qty, 0);
  subtotalEl.innerText = `₹${subtotal.toFixed(2)}`;

  const SHIPPING = 99;
  let total = subtotal + SHIPPING - discount;
  if (total < 0) total = 0;

  totalEl.innerHTML = `₹${total.toFixed(2)}`;
}
document.querySelector(".c10").addEventListener("click", () => {
  let subtotal = parseFloat(subtotalEl.innerText.replace("₹", ""));
  const SHIPPING = 99;
  let total = subtotal + SHIPPING - discount;

  const checkoutData = {
    products: cart.map(p => ({
      image: p.mainImage,
      name: p.title,
      quantity: p.qty,
      price: p.price,
      subtotal: (parseFloat(p.price.replace('₹','')) * p.qty).toFixed(2)
    })),
    subtotal: subtotal,
    shipping: SHIPPING,
    discount: discount,
    total: total.toFixed(2),
    paymentMethod: selectedPayment
  };

  localStorage.setItem("cart-checkout", JSON.stringify(checkoutData));
  window.location.href = "../Html/CartCheckout.html";
});

updateCartCount();
renderCart();
