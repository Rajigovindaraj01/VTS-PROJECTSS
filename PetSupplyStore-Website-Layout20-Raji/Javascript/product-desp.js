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





//cart
// cart count display update
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("pet-cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

// run on page load
updateCartCount();

// Add to Cart button
const addBtn = document.querySelector(".Addtocart");
if (addBtn) {
  addBtn.addEventListener("click", () => {
    // product details from localStorage (already selected product)
    const selectedProduct = JSON.parse(localStorage.getItem("pet-product-selected"));
    if (!selectedProduct) return alert("No product selected!");

    // add qty
    selectedProduct.qty = 1;

    // get cart
    let cart = JSON.parse(localStorage.getItem("pet-cart")) || [];

    // check if already in cart
    const existingIndex = cart.findIndex(p => p.title === selectedProduct.title);
    if (existingIndex > -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push(selectedProduct);
    }

    // save to localStorage
    localStorage.setItem("pet-cart", JSON.stringify(cart));

    // update cart count
    updateCartCount();

    alert(`${selectedProduct.title} added to cart`);
    window.location.href = "cart.html";
  });
}









// get product from localStorage
// Get product from localStorage
const selectedProduct = JSON.parse(localStorage.getItem("pet-product-selected"));

if (selectedProduct) {
  const mainImg = document.querySelector(".main-image img");
  mainImg.src = selectedProduct.mainImage;

  // title, description, price
  document.querySelectorAll(".Product-title").forEach(el => el.innerText = selectedProduct.title);
  document.querySelector(".product-description").innerText = selectedProduct.description;

  const priceEl = document.querySelector(".price");
  priceEl.innerText = selectedProduct.price;

  // extra images & dots
  const extraImgs = document.querySelectorAll(".extra-images .xtra");
  const dots = document.querySelectorAll(".dots div i");

  selectedProduct.extraImages.forEach((imgSrc, index) => {
    if (extraImgs[index]) {
      extraImgs[index].style.backgroundImage = `url('${imgSrc}')`;
      extraImgs[index].style.backgroundSize = "cover";
      extraImgs[index].style.backgroundPosition = "center";
      extraImgs[index].style.cursor = "pointer";

      extraImgs[index].addEventListener("click", () => {
        mainImg.src = imgSrc;
        // update dots
        dots.forEach(dot => dot.style.color = "black");
        if (dots[index]) dots[index].style.color = "blue";
      });
    }
  });

  // initial dot highlight
  if (dots[0]) dots[0].style.color = "blue";
}

// QUANTITY SELECTION
let quantity = 1;
const quantityBtns = document.querySelectorAll(".quantity .quan");
const quantityNumberEl = document.querySelector(".quantity-number"); // middle div
const priceNumber = parseFloat(selectedProduct.price.replace(/[^0-9.-]+/g,"")); // convert ₹ string to number

// create total price element
const totalEl = document.createElement("div");
totalEl.classList.add("total-price");
totalEl.style.marginTop = "10px";
totalEl.innerText = `Total: ₹ ${priceNumber * quantity}`;
document.querySelector(".quantity").appendChild(totalEl);

// quantity buttons click
quantityBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "-") {
      if (quantity > 1) quantity--;
    } else if (btn.innerText === "+") {
      quantity++;
    }
    quantityNumberEl.innerText = quantity; // update display
    totalEl.innerText = `Total: ₹ ${priceNumber * quantity}`; // update total
  });
});

// SIZE SELECTION
let selectedSize = "1kg"; // default
const sizeEls = document.querySelectorAll(".Available-size div");
sizeEls.forEach(sizeDiv => {
  sizeDiv.addEventListener("click", () => {
    sizeEls.forEach(s => s.style.border = ""); // reset border
    sizeDiv.style.border = "2px solid blue"; // highlight selected
    selectedSize = sizeDiv.innerText;
  });
});

// BUY NOW
document.querySelector(".buynow").addEventListener("click", () => {
  const buyNowData = {
    title: selectedProduct.title,
    mainImage: document.querySelector(".main-image img").src,
    price: priceNumber,
    quantity,
    size: selectedSize,
    totalPrice: priceNumber * quantity
  };

  localStorage.setItem("pet-buynow", JSON.stringify(buyNowData));
  alert("Product saved for Buy Now!");
  window.location.href = "../Html/buynow-Checkout.html";
});

















//customer-review
// User rating stars hover and select
  const userStars = document.querySelectorAll('#userStars span');
  let selectedRating = 0;

  userStars.forEach(star => {
    star.addEventListener('mouseover', () => {
      const val = star.getAttribute('data-value');
      highlightStars(val);
    });

    star.addEventListener('mouseout', () => {
      highlightStars(selectedRating);
    });

    star.addEventListener('click', () => {
      selectedRating = star.getAttribute('data-value');
      highlightStars(selectedRating);
    });
  });

  function highlightStars(rating) {
    userStars.forEach(star => {
      if (star.getAttribute('data-value') <= rating) {
        star.classList.add('filled');
      } else {
        star.classList.remove('filled');
      }
    });
  }
// Get product from localStorage
const selectedProducts = JSON.parse(localStorage.getItem("pet-product-selected"));

// Set product title in h2
if (selectedProduct) {
  const quoteEl = document.querySelector(".product-quote");
  quoteEl.innerText = `"${selectedProducts.title}"`;
}















//second-scroll
const container1 = document.querySelector('.sec3-cont-col2');
const rightArrow1 = document.querySelector('.angle-right-icon1');
const leftArrow1 = document.querySelector('.angle-left-icon1');

const scrollAmount = 300;

// Right arrow click
rightArrow1.addEventListener('click', () => {
  container1.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  setTimeout(toggleArrows1, 300); 
});

// Left arrow click
leftArrow1.addEventListener('click', () => {
  container1.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  setTimeout(toggleArrows1, 300);
});

// Toggle arrow visibility
function toggleArrows1() {
  leftArrow1.style.display = container1.scrollLeft > 0 ? 'block' : 'none';
  rightArrow1.style.display = (container1.scrollLeft + container1.clientWidth >= container1.scrollWidth) ? 'none' : 'block';
}

container1.addEventListener('scroll', toggleArrows1);
toggleArrows1();

