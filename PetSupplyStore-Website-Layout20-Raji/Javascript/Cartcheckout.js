const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.head3');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuToggle.classList.toggle('toggle');
});







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













// // // Retrieve cart
let cart = JSON.parse(localStorage.getItem("pet-cart")) || [];

// Cart count
const cartCountEl = document.getElementById("cart-count");

// Order summary container
const orderSummary = document.querySelector(".sec1-col2");

// =================== Totals Elements ===================
const subtotalEl = document.getElementById("subtotal");
const shippingEl = document.getElementById("shipping");
const totalEl = document.getElementById("total");

// Discount element
const discountEl = document.createElement("div");
discountEl.style.color = "green";
discountEl.style.fontWeight = "bold";
document.querySelector(".c9").appendChild(discountEl);

// =================== Payment Selection ===================
let selectedPayment = null;
document.querySelectorAll('input[name="payment"]').forEach(radio => {
  radio.addEventListener("change", () => selectedPayment = radio.value);
});

// =================== Coupon Code ===================
let discount = 0;
const couponInput = document.querySelector(".c7 input");
const couponBtn = document.querySelector(".c7 .apply");

couponBtn.addEventListener("click", () => {
  if (couponInput.value.trim().toUpperCase() === "NEW50") {
    discount = 50;
    discountEl.innerText = `Discount Applied: -₹${discount}`;
  } else {
    discount = 0;
    discountEl.innerText = "Invalid Coupon";
  }
  updateTotals();
});

// =================== Address Inputs ===================
const addressInputs = {
  email: document.querySelector('input[type="email"]'),
  country: document.querySelector('input[placeholder="Country/Region"]'),
  firstName: document.querySelector('input[placeholder="First name"]'),
  lastName: document.querySelector('input[placeholder="Last name"]'),
  address: document.querySelector('input[placeholder="Address"]'),
  apartment: document.querySelector('input[placeholder="Apartment, suite(optional)"]'),
  city: document.querySelector('input[placeholder="City"]'),
  state: document.querySelector('input[placeholder="State"]'),
  pincode: document.querySelector('input[placeholder="Pincode"]'),
  phone: document.querySelector('input[placeholder="Phone"]')
};

// Delivery address summary
const addressSummaryEl = document.createElement("div");
addressSummaryEl.style.borderTop = "1px solid #ccc";
addressSummaryEl.style.marginTop = "10px";
addressSummaryEl.style.paddingTop = "10px";
orderSummary.appendChild(addressSummaryEl);

// =================== Update Address Summary Live ===================
function updateAddressSummary() {
  addressSummaryEl.innerHTML = `
    <h3>Delivery Address</h3>
    <p>${addressInputs.firstName.value} ${addressInputs.lastName.value}</p>
    <p>${addressInputs.address.value} ${addressInputs.apartment.value}</p>
    <p>${addressInputs.city.value}, ${addressInputs.state.value} - ${addressInputs.pincode.value}</p>
    <p>${addressInputs.country.value}</p>
    <p>Email: ${addressInputs.email.value}</p>
    <p>Phone: ${addressInputs.phone.value}</p>
  `;
}

// Update totals when any address field changes
Object.values(addressInputs).forEach(input => {
  input.addEventListener("input", () => {
    updateAddressSummary();
    updateTotals();
  });
});

// =================== Update Cart Count ===================
function updateCartCount() {
  cartCountEl.innerText = cart.length;
}

// =================== Render Cart Items ===================
function renderCart() {
  orderSummary.querySelectorAll(".c6").forEach(el => el.remove());

  cart.forEach(product => {
    const div = document.createElement("div");
    div.className = "c6";
    div.innerHTML = `
      <div class="main-image">
        <img src="${product.mainImage}" alt="">
      </div>
      <div class="details">
        <div class="product-name">${product.title}</div>
        <div class="product-price">MRP : ₹${product.price.replace('₹','')}</div>
        <div class="quantity">Quantity: ${product.qty}</div>
      </div>
    `;
    const couponSection = document.querySelector(".c7");
    orderSummary.insertBefore(div, couponSection);
  });

  updateTotals();
}

// =================== Update Totals ===================
function updateTotals() {
  const SHIPPING = 99;
  let subtotal = cart.reduce((acc, p) => acc + parseFloat(p.price.replace('₹','')) * p.qty, 0);
  subtotalEl.innerText = `₹${subtotal.toFixed(2)}`;

  // Show shipping with address
  const shippingAddress = addressInputs.address.value || "Enter Address Above";
  shippingEl.innerText = `${shippingAddress} (+₹${SHIPPING})`;

  let total = subtotal + SHIPPING - discount;
  if (total < 0) total = 0;
  totalEl.innerText = `₹${total.toFixed(2)}`;
}

// =================== Order Now Button ===================
document.querySelector(".order-now").addEventListener("click", () => {
  if (!selectedPayment) {
    alert("Please select a payment method!");
    return;
  }

  updateAddressSummary();
  updateTotals();

  const checkoutData = {
    products: cart.map(p => ({
      image: p.mainImage,
      name: p.title,
      quantity: p.qty,
      price: p.price,
      subtotal: (parseFloat(p.price.replace('₹','')) * p.qty).toFixed(2)
    })),
    subtotal: parseFloat(subtotalEl.innerText.replace("₹", "")),
    shipping: 99,
    discount: discount,
    total: parseFloat(totalEl.innerText.replace("₹","")),
    paymentMethod: selectedPayment,
    deliveryAddress: Object.fromEntries(
      Object.entries(addressInputs).map(([k, el]) => [k, el.value])
    )
  };

  localStorage.setItem("cart-checkout", JSON.stringify(checkoutData));
  window.location.href = "../Html/Cart-thank.html";
});

// =================== Initial Render ===================
updateCartCount();
renderCart();
updateAddressSummary();
updateTotals();
