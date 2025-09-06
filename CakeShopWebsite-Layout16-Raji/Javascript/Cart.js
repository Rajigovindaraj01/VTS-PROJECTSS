function loadCart() {
  let cartItems = JSON.parse(localStorage.getItem("selectedCart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const subtotalElement = document.getElementById("subtotal");

  cartContainer.innerHTML = "";
  let subtotal = 0;

  cartItems.forEach((item, index) => {
    let price = parseInt(item.price.replace("Rs.", "").trim());
    let quantity = item.quantity || 1;
    subtotal += price * quantity;

    let div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="cart-details">
            <div class="cart-name-qua">
            <h4>${item.name}</h4>
            <div class="qty-controls">
              <button onclick="changeQty(${index}, -1)">-</button>
              <span>${quantity}</span>
              <button onclick="changeQty(${index}, 1)">+</button>
            </div>
            </div>
            <div class="carteeeeeeeeeeeeee">
            <p>Rs.${price * quantity}</p>
            <span class="remove" onclick="removeItem(${index})">Remove</span>
            <button class="buynow" onclick="buyNow(${index})">Buy Now</button>
            </div>
          </div>
        `;
    cartContainer.appendChild(div);
  });

  subtotalElement.textContent = "Rs." + subtotal;
}

function changeQty(index, delta) {
  let cartItems = JSON.parse(localStorage.getItem("selectedCart")) || [];
  if (!cartItems[index].quantity) cartItems[index].quantity = 1;
  cartItems[index].quantity += delta;
  if (cartItems[index].quantity < 1) cartItems[index].quantity = 1;
  localStorage.setItem("selectedCart", JSON.stringify(cartItems));
  loadCart();
}

function removeItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("selectedCart")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("selectedCart", JSON.stringify(cartItems));
  loadCart();
}

document.getElementById("removeAll").addEventListener("click", () => {
  localStorage.removeItem("selectedCart");
  loadCart();
});

const checkout = document.getElementById("check");
checkout.addEventListener("click", function () {
  window.location.href = "../Html/Payment.html";
});

const conti = document.getElementById("continue");
conti.addEventListener("click", function () {
  window.location.href = "../index.html";
});

loadCart();

function updateCartCount() {
  let storedCartieees = JSON.parse(localStorage.getItem("selectedCart")) || [];
  document.getElementById("cart-count").textContent = storedCartieees.length;
}
updateCartCount();
