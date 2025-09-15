
const clickhere = document.getElementById("clickhere");
const container = document.getElementById("custom-container");

clickhere.addEventListener("click", function () {
  container.style.display = container.style.display === "block" ? "none" : "block";
});

document.addEventListener("DOMContentLoaded", function () {
  const tshirt = JSON.parse(localStorage.getItem("tshirt-selected"));
  if (!tshirt) return;

  document.querySelector(".sec1-1-image img").src = tshirt.image;
  document.querySelector(".sec1-col2 h1").innerText = tshirt.name;
  document.querySelector(".sec1-col2 span").innerText = tshirt.name;
  document.querySelector(".section3 h2").innerText = tshirt.name;
  document.querySelector(".cc-1 img").src = tshirt.image;

  let basePrice = parseInt(tshirt.price.replace(/[^0-9]/g, "")) || 0;

  document.querySelectorAll(".sec3-items-1 div").forEach((color) => {
    color.addEventListener("click", function () {
      document.querySelectorAll(".sec3-items-1 div").forEach((c) => c.classList.remove("selected"));
      color.classList.add("selected");

      const selectedColor = color.getAttribute("data-color");
      localStorage.setItem("selectedColor", selectedColor);
      console.log("🎨 Selected Color:", selectedColor);
    });
  });


  document.querySelectorAll(".sec3-items-2 div").forEach((size) => {
    size.addEventListener("click", function () {
      document.querySelectorAll(".sec3-items-2 div").forEach((s) => s.classList.remove("selected"));
      size.classList.add("selected");
    });
  });


  document.querySelectorAll(".sec3-items-5 div").forEach((neck) => {
    neck.addEventListener("click", function () {
      document.querySelectorAll(".sec3-items-5 div").forEach((n) => n.classList.remove("selected"));
      neck.classList.add("selected");
    });
  });

  const qtyMinus = document.querySelector(".sec3-items-3 div:first-child");
  const qtyDisplay = document.querySelector(".sec3-items-3 div:nth-child(2)");
  const qtyPlus = document.querySelector(".sec3-items-3 div:last-child");
  let quantity = 1;

  function updatePrice() {
    const total = basePrice * quantity;
    document.querySelector(".sec3-items-4 div:first-child").innerText = "₹" + total;
  }

  qtyMinus.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      qtyDisplay.innerText = quantity;
      updatePrice();
    }
  });

  qtyPlus.addEventListener("click", function () {
    quantity++;
    qtyDisplay.innerText = quantity;
    updatePrice();
  });

  qtyDisplay.innerText = quantity;
  updatePrice();


  function getSelected(selector) {
    const selected = document.querySelector(selector + " .selected");
    if (!selected) return null;

    if (selector === ".sec3-items-1") {
      return selected.getAttribute("data-color");
    }
    return selected.innerText.trim();
  }

  document.getElementById("paynow-btn").addEventListener("click", function () {
    const details = {
      ...tshirt,
      color: getSelected(".sec3-items-1"),
      size: getSelected(".sec3-items-2"),
      neck: getSelected(".sec3-items-5"),
      quantity: quantity,
      totalPrice: basePrice * quantity,
    };

    localStorage.setItem("tshirt-selected-details", JSON.stringify(details));
    alert("✅ Details saved for Pay Now!");
    window.location.href='../Html/Payment.html'
  });


  document.getElementById("addtocart-btn").addEventListener("click", function () {
    const details = {
      ...tshirt,
      color: getSelected(".sec3-items-1"),
      size: getSelected(".sec3-items-2"),
      neck: getSelected(".sec3-items-5"),
      quantity: quantity,
      totalPrice: basePrice * quantity,
    };

    let cart = JSON.parse(localStorage.getItem("tshirt-cart")) || [];
    cart.push(details);
    localStorage.setItem("tshirt-cart", JSON.stringify(cart));
    const cartIcon = document.getElementById("cart-count");
    if (cartIcon) {
      cartIcon.innerText = cart.length;
    }

    alert("🛒 Added to Cart!");
  });
});

//cart-count
document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-count");
  if (cartIcon) {
    let cart = JSON.parse(localStorage.getItem("tshirt-cart")) || [];
    cartIcon.innerText = cart.length;
  }
});