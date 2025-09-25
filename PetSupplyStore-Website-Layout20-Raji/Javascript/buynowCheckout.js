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
















//retrieve
 const buyNowData = JSON.parse(localStorage.getItem("pet-buynow"));
  let discount = 0;
  const shippingCharge = 99;

  // Elements
  const subtotalEl = document.querySelectorAll(".c8 div:nth-child(2)")[0];
  const shippingEl = document.querySelectorAll(".c8 div:nth-child(2)")[1];
  const totalEl = document.querySelectorAll(".c8 div:nth-child(2)")[2];

  function updateSummary() {
    if (!buyNowData) return;

    const subtotal = buyNowData.totalPrice;
    const address = document.querySelector("input[placeholder='Address']").value || "Enter Address Above";

    // total after discount
    const total = subtotal + shippingCharge - discount;

    subtotalEl.innerText = "₹" + subtotal;
    shippingEl.innerText = address;
    totalEl.innerText = "₹" + total;
  }

  if (buyNowData) {
    // fill product details
    document.querySelector(".sec1-col2 .main-image img").src = buyNowData.mainImage;
    document.querySelector(".sec1-col2 .product-name").innerText = buyNowData.title;
    document.querySelector(".sec1-col2 .product-price").innerText = "MRP : ₹" + buyNowData.price;
    document.querySelector(".sec1-col2 .quantity").innerText = "Quantity: " + buyNowData.quantity;
    document.querySelector(".sec1-col2 .size").innerText = "Size: " + buyNowData.size;

    updateSummary();
  }

  // Discount Apply
  document.querySelector(".apply").addEventListener("click", () => {
    const code = document.querySelector(".c7 input").value.trim();
    if (code === "NEW50") {
      discount = 50;
      alert("Discount applied: ₹50 OFF!");
    } else {
      discount = 0;
      alert("Invalid discount code!");
    }
    updateSummary();
  });

  // Update shipping text when address changes
  document.querySelector("input[placeholder='Address']").addEventListener("input", updateSummary);

  // Order Now click
  document.querySelector(".order-now").addEventListener("click", () => {
    const userData = {
      email: document.querySelector(".c1").value,
      phone: document.querySelector("input[type='phone']").value,
      firstName: document.querySelector(".c4 div:nth-child(1) input").value,
      lastName: document.querySelector(".c4 div:nth-child(2) input").value,
      address: document.querySelector("input[placeholder='Address']").value,
      apartment: document.querySelector("input[placeholder='Apartment, suite(optional)']").value,
      city: document.querySelector(".c5 div:nth-child(1) input").value,
      state: document.querySelector(".c5 div:nth-child(2) input").value,
      pincode: document.querySelector(".c5 div:nth-child(3) input").value,
      paymentMethod: document.querySelector("input[type='radio']:checked")
        ? document.querySelector("input[type='radio']:checked").nextSibling.textContent.trim()
        : "Not Selected"
    };

    localStorage.setItem("pet-user-buynow", JSON.stringify(userData));
    alert("Order placed successfully!");
    window.location.href = "../Html/buynow-thankyou.html";
  });