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












//filtr-button
const filtClick = document.querySelector('.sec1-col1-2');
const filtOver = document.querySelector('.sec1-col1-1-overlay');

filtClick.addEventListener('click', function () {
    if (filtOver.style.display === 'block') {
        filtOver.style.display = 'none';   // already open → close pannum
    } else {
        filtOver.style.display = 'block';  // closed → open pannum
    }
});



//sort by
 const filtClick1 = document.querySelector('.section1-col2-item1-2');
 const filtOver1 = document.querySelector('.section1-col2-item1-2-ovrlay');
filtClick1.addEventListener('click', () => {
    filtOver1.style.display = filtOver1.style.display === 'block' ? 'none' : 'block';
});













//storing-selected-product
const extraData = {
    "Turkey, Chickpea & Sweet Potato Small Breed 2Kg": {
      extraImages: [
        "../Assets/Images/d1-1.webp",
        "../Assets/Images/d1-2.webp",
        "../Assets/Images/d1-3.webp",
        "../Assets/Images/d1-4.webp",
        "../Assets/Images/d1-5.webp"
      ],
      description: "This premium dog food is made with turkey, chickpeas, and sweet potatoes. It is specially formulated for small breed dogs."
    },
    "Cuddle Adult Dog Wet foods Healthy food for puppies": {
      extraImages: [
        "../Assets/Images/d2-1.png",
        "../Assets/Images/d2-2.webp",
        "../Assets/Images/d2-3.png",
        "../Assets/Images/d2-4.png",
        "../Assets/Images/d2-5.png"
      ],
      description: "Nutritious wet food for adult dogs, also suitable for puppies. Supports healthy digestion and immunity."
    },
    "Kennel Kitchen Dry Dog Food Chicken Receipe": {
      extraImages: [
        "../Assets/Images/d3-1.avif",
        "../Assets/Images/d3-2.webp",
        "../Assets/Images/d3-3.webp",
        "../Assets/Images/d3-4.avif",
        "../Assets/Images/d3-5.webp"
      ],
      description: "Nutritious wet food for adult dogs, also suitable for puppies. Supports healthy digestion and immunity."
    },
    "Drools Dog Spike Hard Ball Toy 3 inch": {
      extraImages: [
        "../Assets/Images/d4-1.webp",
        "../Assets/Images/d4-2.webp",
        "../Assets/Images/d4-3.webp",
        "../Assets/Images/d4-4.webp",
        "../Assets/Images/d4-5.webp"
      ],
      description: "Nutritious wet food for adult dogs, also suitable for puppies. Supports healthy digestion and immunity."
    },
    "Drools Puppy Dog Food Chicken and Egg Flavour 1.2Kg": {
      extraImages: [
        "../Assets/Images/d5-1.webp",
        "../Assets/Images/d5-2.webp",
        "../Assets/Images/d5-3.webp",
        "../Assets/Images/d5-4.webp",
        "../Assets/Images/d5-5.webp"
      ],
      description: "Nutritious wet food for adult dogs, also suitable for puppies. Supports healthy digestion and immunity."
    },
    "Pedigree Adult & Puppy Dry Dog Food 100% Vegetarian": {
      extraImages: [
         "../Assets/Images/d6-1.webp",
        "../Assets/Images/d6-2.webp",
        "../Assets/Images/d6-3.webp",
        "../Assets/Images/d6-4.webp",
        "../Assets/Images/d6-5.webp"
      ],
      description: "Nutritious wet food for adult dogs, also suitable for puppies. Supports healthy digestion and immunity."
    },
    "Canine Creek Real Chicken in Gravy 150GM": {
      extraImages: [
         "../Assets/Images/d7-1.webp",
        "../Assets/Images/d7-2.webp",
        "../Assets/Images/d7-3.webp",
        "../Assets/Images/d7-4.webp",
        "../Assets/Images/d7-5.webp"
      ],
      description: "Nutritious wet food for adult dogs, also suitable for puppies. Supports healthy digestion and immunity."
    },
    "Himalaya Digestive Stimulate Drops for Dogs and Cats": {
      extraImages: [
        "../Assets/Images/d8-1.jpg",
        "../Assets/Images/d8-2.jpg",
        "../Assets/Images/d8-3.jpg",
        "../Assets/Images/d8-4.webp",
        "../Assets/Images/d8-5.webp"
      ],
      description: "Nutritious wet food for adult dogs, also suitable for puppies. Supports healthy digestion and immunity."
    },
    "Pedigree Pro Adult Small Breed  Food for puppies": {
      extraImages: [
         "../Assets/Images/d9-1.webp",
        "../Assets/Images/d9-2.webp",
        "../Assets/Images/d9-3.webp",
        "../Assets/Images/d9-4.webp",
        "../Assets/Images/d9-5.webp"
      ],
      description: "Nutritious wet food for adult dogs, also suitable for puppies. Supports healthy digestion and immunity."
    }
  };

  document.querySelectorAll(".section1-col2-itemsss").forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector(".section1-col2-itemsss2").innerText;
      const price = card.querySelector(".section1-col2-itemsss4").innerText;
      const weight = card.querySelector(".section1-col2-itemsss5").innerText;
      const mainImage = card.querySelector("img").getAttribute("src");

      const extra = extraData[title] || { extraImages: [], description: "" };

      const selectedProduct = {
        title,
        price,
        weight,
        mainImage,
        extraImages: extra.extraImages,
        description: extra.description
      };

      localStorage.setItem("pet-product-selected", JSON.stringify(selectedProduct));
      console.log("Saved:", selectedProduct);
      alert(`${title} has Selected`)
      window.location.href = "../Html/Product-desp.html";
    });
  });















//cart-----
// cart count display update function
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("pet-cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

// run on page load
updateCartCount();

document.querySelectorAll(".section1-col2-itemsss6").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    const card = btn.closest(".section1-col2-itemsss");

    // HTML data
    const title = card.querySelector(".section1-col2-itemsss2").innerText;
    const price = card.querySelector(".section1-col2-itemsss4").innerText;
    const weight = card.querySelector(".section1-col2-itemsss5").innerText;
    const mainImage = card.querySelector("img").getAttribute("src");

    const product = { title, price, weight, mainImage, qty: 1 };

    // localStorage la cart eduthu update pannanum
    let cart = JSON.parse(localStorage.getItem("pet-cart")) || [];

    // already iruka product check
    const existingIndex = cart.findIndex((p) => p.title === product.title);
    if (existingIndex > -1) {
      cart[existingIndex].qty += 1; // quantity increase
    } else {
      cart.push(product);
    }

    // save back to localStorage
    localStorage.setItem("pet-cart", JSON.stringify(cart));

    // update cart count
    updateCartCount();
    alert(`${title} has added to cart`)
    window.location.href = "cart.html";
  });
});
















//search-function
const searchInput = document.getElementById("product-search");

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase().trim();
  const items = document.querySelectorAll(".section1-col2-itemsss");

  items.forEach((item) => {
    const title = item.querySelector(".section1-col2-itemsss2").innerText.toLowerCase();

    if (title.includes(filter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

















//filter-and-sortby
const checkboxes = document.querySelectorAll(".sec1-col1-1-overlay-items input[type=checkbox]");
const products = document.querySelectorAll(".section1-col2-itemsss");

// filter function
function applyFilters() {
  let activeFilters = {};

  // active filters collect pannrom
  checkboxes.forEach(chk => {
    if (chk.checked) {
      const category = chk.closest(".sec1-col1-1-overlay-items").previousElementSibling.innerText.split(" ")[0].toLowerCase();
      if (!activeFilters[category]) activeFilters[category] = [];
      activeFilters[category].push(chk.parentElement.innerText.trim().toLowerCase());
    }
  });

  products.forEach(prod => {
    let visible = true;
    for (let key in activeFilters) {
      const value = prod.dataset[key]?.toLowerCase();
      if (value && !activeFilters[key].includes(value)) {
        visible = false;
        break;
      }
    }
    prod.style.display = visible ? "block" : "none";
  });
}

// attach filter change
checkboxes.forEach(chk => chk.addEventListener("change", applyFilters));




















//sort
const sortBtn = document.querySelector('.section1-col2-item1-2');
const sortOverlay = document.querySelector('.section1-col2-item1-2-ovrlay');
const productsContainer = document.querySelector('.section1-col2-item2');


sortOverlay.querySelectorAll('p').forEach(option => {
  option.addEventListener('click', function () {
    let products = Array.from(productsContainer.querySelectorAll('.section1-col2-itemsss'));
    let sortType = this.innerText.trim();

    if (sortType === "Price: Low-High") {
      products.sort((a, b) => {
        let priceA = parseInt(a.querySelector('.section1-col2-itemsss4').innerText.replace('₹', '').replace(',', ''));
        let priceB = parseInt(b.querySelector('.section1-col2-itemsss4').innerText.replace('₹', '').replace(',', ''));
        return priceA - priceB;
      });
    } else if (sortType === "Price: High-Low") {
      products.sort((a, b) => {
        let priceA = parseInt(a.querySelector('.section1-col2-itemsss4').innerText.replace('₹', '').replace(',', ''));
        let priceB = parseInt(b.querySelector('.section1-col2-itemsss4').innerText.replace('₹', '').replace(',', ''));
        return priceB - priceA;
      });
    }

    // Append sorted
    productsContainer.innerHTML = "";
    products.forEach(p => productsContainer.appendChild(p));

    sortOverlay.style.display = 'none';
  });
});

// Click outside to close
document.addEventListener('click', function (e) {
  if (!sortBtn.contains(e.target) && !sortOverlay.contains(e.target)) {
    sortOverlay.style.display = 'none';
  }
});
