const locationText = document.getElementById("location-text");
    const overlay = document.getElementById("overlay");
    const mapContainer = document.getElementById("map-container");
    const closeBtn = document.getElementById("close-map");
    const mapDiv = document.getElementById("map");

    let map, marker, mapInitialized = false;

    locationText.addEventListener("click", () => {
      overlay.style.display = "block";
      mapContainer.style.display = "block";

      if (!mapInitialized) {
        map = L.map("map").setView([20.5937, 78.9629], 5);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap" }).addTo(map);
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const lat = pos.coords.latitude;
              const lng = pos.coords.longitude;
              map.setView([lat, lng], 15);

              if (marker) marker.remove();
              marker = L.marker([lat, lng]).addTo(map);

              fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
                .then(r => r.json())
                .then(data => {
                  const address = data.display_name || `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;
                  marker.bindPopup("📍 " + address).openPopup();
                  locationText.textContent = address;
                })
                .catch(() => {
                  locationText.textContent = `Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}`;
                });
            },
            (err) => {
              console.warn("Geolocation error:", err);
            },
            { timeout: 10000 }
          );
        }

        map.on("click", (e) => {
          if (marker) marker.remove();
          marker = L.marker(e.latlng).addTo(map);

          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${e.latlng.lat}&lon=${e.latlng.lng}&format=json`)
            .then(r => r.json())
            .then(data => {
          
              const addr = data.display_name || (`Lat: ${e.latlng.lat.toFixed(5)}, Lng: ${e.latlng.lng.toFixed(5)}`);
              locationText.textContent = addr;
              marker.bindPopup("📍 " + addr).openPopup();
            })
            .catch(() => {
              locationText.textContent = `Lat: ${e.latlng.lat.toFixed(5)}, Lng: ${e.latlng.lng.toFixed(5)}`;
            });
        });

        mapInitialized = true;
      }
    });

    function closeMap() {
      overlay.style.display = "none";
      mapContainer.style.display = "none";
    }
    overlay.addEventListener("click", closeMap);
    closeBtn.addEventListener("click", closeMap);


//for-signin-container-open
const signinopen = document.getElementById('signin-open');
const signincontainer = document.querySelector('.login-regis-container');

signinopen.addEventListener('click', function () {
  signincontainer.style.display = 'block';
});

addEventListener('keypress',function(){
    signincontainer.style.display='none';
})


//login/regiter
// Get elements
const registerBox = document.querySelector(".register-container");
const loginBox = document.querySelector(".login-container");
const registerBtn = document.querySelector(".register-btn");
const loginInput = document.querySelector(".login-container input");

// 🔹 Tabs
const allLoginTabs = document.querySelectorAll(".register-container-1 div:first-child");
const allRegisterTabs = document.querySelectorAll(".register-container-1 div:last-child");

// 🔹 Initially Register show
registerBox.style.display = "block";
loginBox.style.display = "none";

// Default highlight Register tabs
allRegisterTabs.forEach(tab => tab.style.color = "#53B3C9");

// Tab Switching
allRegisterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    registerBox.style.display = "block";
    loginBox.style.display = "none";

    // Highlight
    allRegisterTabs.forEach(t => t.style.color = "#53B3C9");
    allLoginTabs.forEach(t => t.style.color = "black");
  });
});

allLoginTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    registerBox.style.display = "none";
    loginBox.style.display = "block";

    // Highlight
    allLoginTabs.forEach(t => t.style.color = "#53B3C9");
    allRegisterTabs.forEach(t => t.style.color = "black");
  });
});

// Register
registerBtn.addEventListener("click", () => {
  const email = document.querySelector(".register-container input[type='email']").value.trim();
  const mobile = document.querySelector(".register-container input[type='number']").value.trim();
  const password = document.querySelector(".register-container input[type='password']").value.trim();

  if (!email || !mobile || !password) {
    alert("All fields are required!");
    return;
  }
  if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    alert("Enter a valid email!");
    return;
  }
  if (mobile.length !== 10) {
    alert("Enter valid 10 digit mobile number!");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return;
  }

  const userData = { email, mobile, password };
  localStorage.setItem("ecommerce-user-register", JSON.stringify(userData));
  alert("Registration Successful! Please login.");
  registerBox.style.display = "none";
  loginBox.style.display = "block";

  // After register → highlight LOGIN tab
  allLoginTabs.forEach(t => t.style.color = "#53B3C9");
  allRegisterTabs.forEach(t => t.style.color = "black");
});

// Login
document.querySelector(".login-containers-2").addEventListener("click", () => {
  const userData = JSON.parse(localStorage.getItem("ecommerce-user-register"));
  if (!userData) {
    alert("No user found! Please register first.");
    return;
  }

  const loginVal = loginInput.value.trim();
  if (!loginVal) {
    alert("Please enter your Email/Mobile!");
    return;
  }

  if (loginVal === userData.email || loginVal === userData.mobile) {
    alert("Login Successful!");
    // window.location.href = "home.html";
  } else {
    alert("Invalid Email or Mobile number!");
  }
});





//login/signup-activate
const loginregActive = document.getElementById('login-reg-active');
const loginRegisContainers = document.getElementById('login-regis-containers');

loginregActive.addEventListener('click',function(){
    loginRegisContainers.style.display='block'
})

addEventListener('keypress',function(){
    loginRegisContainers.style.display='none';
})







//hamburger
function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('active');
}

//dropdown
const mobileandmore = document.getElementById('mobile-and-more');
const navbaroverlay1 = document.getElementById('navbar-overlay1');

mobileandmore.addEventListener('click', function () {
  if (navbaroverlay1.style.display === 'none' || navbaroverlay1.style.display === '') {
    navbaroverlay1.style.display = 'grid'; 
  } else {
    navbaroverlay1.style.display = 'none'; 
  }
});


const men = document.getElementById('men');
const navbaroverlay2 = document.getElementById('navbar-overlay2');

men.addEventListener('click', function () {
  if (navbaroverlay2.style.display === 'none' || navbaroverlay2.style.display === '') {
    navbaroverlay2.style.display = 'grid'; 
  } else {
    navbaroverlay2.style.display = 'none'; 
  }
});

const women = document.getElementById('women');
const navbaroverlay3 = document.getElementById('navbar-overlay3');

women.addEventListener('click', function () {
  if (navbaroverlay3.style.display === 'none' || navbaroverlay3.style.display === '') {
    navbaroverlay3.style.display = 'grid'; 
  } else {
    navbaroverlay3.style.display = 'none'; 
  }
});















//changing image
let index = 0;
const slides = document.querySelectorAll(".sect-item1");

function showSlides() {
  slides.forEach(slide => slide.style.display = "none"); // hide all
  slides[index].style.display = "block"; // show current
  index = (index + 1) % slides.length; // loop
}

showSlides();
setInterval(showSlides, 1000); 


//cart,wishlist,functionalitis
// ---------------- LocalStorage Helper ----------------
function getLocalData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setLocalData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ---------------- Selected Product Save ----------------
document.querySelectorAll(".sec2-content-items").forEach(item => {
  item.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("wishlist-btn") ||
      e.target.classList.contains("sec2-content-items4")
    ) return;

    const img = this.querySelector("img").src;
    const name = this.querySelector(".sec2-content-items2").innerText;
    const price = this.querySelector(".sec2-content-items3").innerText;
    let extraImages = [];
    let description = "";

    if (name.includes("Samsung")) {
      extraImages = [
        "./Assets/Images/samsung1.webp",
        "./Assets/Images/samsung2.webp",
        "./Assets/Images/samsung3.webp",
        "./Assets/Images/samsung4.webp"
      ];
      description = "Samsung Galaxy S21 – Powerful processor, amazing camera, 5G ready.";
    } else if (name.includes("Redmi")) {
      extraImages = [
        "./Assets/Images/redmi1.webp",
        "./Assets/Images/redmi2.webp",
        "./Assets/Images/redmi3.webp",
        "./Assets/Images/redmi4.webp"
      ];
      description = "Redmi Note 12 Pro – AMOLED display, smooth performance.";
    } else if (name.includes("iPhone")) {
      extraImages = [
        "./Assets/Images/iphone1.webp",
        "./Assets/Images/iphone2.webp",
        "./Assets/Images/iphone3.webp",
        "./Assets/Images/iphone4.webp"
      ];
      description = "iPhone 14 Pro – iOS 16, 48MP camera, Dynamic Island feature.";
    } else if (name.includes("Realme")) {
      extraImages = [
        "./Assets/Images/realme1.webp",
        "./Assets/Images/realme2.webp",
        "./Assets/Images/realme3.webp",
        "./Assets/Images/realme4.webp"
      ];
      description = "Realme Narzo 60 – Budget-friendly, strong battery, smooth UI.";
    } else if (name.includes("OnePlus")) {
      extraImages = [
        "./Assets/Images/oneplus1.webp",
        "./Assets/Images/oneplus2.webp",
        "./Assets/Images/oneplus3.webp",
        "./Assets/Images/oneplus4.webp"
      ];
      description = "OnePlus Nord CE 3 – Clean OxygenOS, fast charging.";
    } else if (name.includes("Vivo")) {
      extraImages = [
        "./Assets/Images/vivo1.webp",
        "./Assets/Images/vivo2.webp",
        "./Assets/Images/vivo3.webp",
        "./Assets/Images/vivo4.webp"
      ];
      description = "Vivo V29 5G – Stylish design, amazing selfie camera.";
    } else if (name.includes("Oppo")) {
      extraImages = [
        "./Assets/Images/oppo1.webp",
        "./Assets/Images/oppo2.webp",
        "./Assets/Images/oppo3.webp",
        "./Assets/Images/oppo4.webp"
      ];
      description = "Oppo Reno 10 Pro – Premium design, portrait camera.";
    } else if (name.includes("iQOO")) {
      extraImages = [
        "./Assets/Images/iqoo1.webp",
        "./Assets/Images/iqoo2.webp",
        "./Assets/Images/iqoo3.webp",
        "./Assets/Images/iqoo4.webp"
      ];
      description = "iQOO Neo 7 – Gaming beast with Dimensity processor.";
    } else if (name.includes("Motorola")) {
      extraImages = [
        "./Assets/Images/motorola.1webp.webp",
        "./Assets/Images/motorola2.webp",
        "./Assets/Images/motorola3.webp",
        "./Assets/Images/motorola4.webp"
      ];
      description = "Motorola Edge 40 – Clean stock Android experience.";
    } else if (name.includes("Google Pixel")) {
      extraImages = [
        "./Assets/Images/googlepixel1.webp",
        "./Assets/Images/googlepixel2.webp",
        "./Assets/Images/googlepixel3.webp",
        "./Assets/Images/googlepixel4.webp"
      ];
      description = "Google Pixel 7 – Best camera, pure Android updates.";
    } else if (name.includes("Infinix")) {
      extraImages = [
        "./Assets/Images/infinix1.webp",
        "./Assets/Images/infinix2.webp",
        "./Assets/Images/infinix3.webp",
        "./Assets/Images/infinix4.webp"
      ];
      description = "Infinix Zero Ultra – Value for money, good performance.";
    } else if (name.includes("Nothing")) {
      extraImages = [
        "./Assets/Images/nothing1.webp",
        "./Assets/Images/nothing2.webp",
        "./Assets/Images/nothing3.webp",
        "./Assets/Images/nothing4.webp"
      ];
      description = "Nothing Phone (2) – Transparent design, clean OS.";
    }
    const selected = { img, name, price, description, images: extraImages };
    localStorage.setItem("ecommerce-selected-product", JSON.stringify(selected));

    console.log("Selected Product Saved:", selected);
    window.location.href = "./Html/ProductDescrip.html";
  });
});


// ---------------- Wishlist ----------------
const wishlistCountEl = document.getElementById("wishlist-count");

function updateWishlistCount() {
  const wishlist = getLocalData("ecommerce-wishlist");
  wishlistCountEl.innerText = wishlist.length;
}
updateWishlistCount();

document.querySelectorAll(".sec2-content-items1-overlay").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const parent = this.closest(".sec2-content-items");
    const img = parent.querySelector("img").src;
    const name = parent.querySelector(".sec2-content-items2").innerText;
    const price = parent.querySelector(".sec2-content-items3").innerText;

    let wishlist = getLocalData("ecommerce-wishlist");
    const index = wishlist.findIndex(item => item.name === name && item.price === price);

    const icon = this.querySelector("i");

    if (index === -1) {
      wishlist.push({ img, name, price });
      setLocalData("ecommerce-wishlist", wishlist);

      icon.classList.remove("bi-heart");
      icon.classList.add("bi-heart-fill");
      icon.style.color = "red";

      console.log("Added to Wishlist:", wishlist);
       alert(`${name} Added to wishlist`)
    } else {
      wishlist.splice(index, 1);
      setLocalData("ecommerce-wishlist", wishlist);

      icon.classList.remove("bi-heart-fill");
      icon.classList.add("bi-heart");
      icon.style.color = "black";

      console.log("Removed from Wishlist:", wishlist);
      alert(`${name} removed from wishlist`)
    }

    updateWishlistCount();
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const wishlist = getLocalData("ecommerce-wishlist");

  document.querySelectorAll(".sec2-content-items").forEach(item => {
    const name = item.querySelector(".sec2-content-items2").innerText;
    const price = item.querySelector(".sec2-content-items3").innerText;
    const btn = item.querySelector(".sec2-content-items1-overlay i");

    if (wishlist.some(w => w.name === name && w.price === price)) {
      btn.classList.remove("bi-heart");
      btn.classList.add("bi-heart-fill");
      btn.style.color = "red";
    }
  });
});

const cartCountEl = document.getElementById("cart-count");

function updateCartCount() {
  const cart = getLocalData("ecommerce-cart");
  cartCountEl.innerText = cart.length;
}
updateCartCount();

document.querySelectorAll(".sec2-content-items4").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const parent = this.closest(".sec2-content-items");
    const img = parent.querySelector("img").src;
    const name = parent.querySelector(".sec2-content-items2").innerText;
    const price = parent.querySelector(".sec2-content-items3").innerText;

    let cart = getLocalData("ecommerce-cart");
    cart.push({ img, name, price });
    setLocalData("ecommerce-cart", cart);

    updateCartCount();
    console.log("Cart Updated:", cart);
    alert(`${name} successfully added to cart`)
  });
});











//search functionalities
  const searchInput = document.querySelector('.head-row2-2 input');
  const searchButton = document.querySelector('.head-row2-2 button');

  function searchProducts() {
    let filter = searchInput.value.toLowerCase().trim();
    let products = document.querySelectorAll('.sec2-content-items');

    let firstMatch = null;

    products.forEach((product) => {
      let name = product.querySelector('.sec2-content-items2').textContent.toLowerCase();
      
      if (name.includes(filter)) {
        product.style.display = 'block';
        if (!firstMatch) {
          firstMatch = product; 
        }
      } else {
        product.style.display = 'none';
      }
    });

    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  searchButton.addEventListener('click', searchProducts);

  searchInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      searchProducts();
    }
  });