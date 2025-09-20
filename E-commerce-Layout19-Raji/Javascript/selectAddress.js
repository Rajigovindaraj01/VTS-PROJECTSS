let qty = 1;
let productData = JSON.parse(localStorage.getItem("ecommerce-selected-product"));
let savedAddress = localStorage.getItem("user-address") || "Enter your address";


function cleanPrice(price) {
  return parseInt(price.toString().replace(/[^0-9]/g, ""));
}

if (productData) {
  document.getElementById("product-img").src = productData.img;
  document.getElementById("product-name").innerText = productData.name;

  document.getElementById("qty").innerText = qty;
  document.getElementById("item-count").innerText = qty;

  updateSummary(); 
}

document.getElementById("saved-address").innerText = savedAddress;
document.getElementById("address-input").value = savedAddress;

function updateQty(val) {
  qty += val;
  if (qty < 1) qty = 1;
  document.getElementById("qty").innerText = qty;
  document.getElementById("item-count").innerText = qty;
  updateSummary();
}

function removeItem() {
  localStorage.removeItem("ecommerce-selected-product");
  window.location.href = "../index.html"; 
}

function toggleAddressEdit() {
  document.getElementById("address-edit").style.display = "block";
}

function saveAddress() {
  let newAddress = document.getElementById("address-input").value;
  localStorage.setItem("user-address", newAddress);
  document.getElementById("saved-address").innerText = newAddress;
  document.getElementById("address-edit").style.display = "none";
}

function updateSummary() {
  if (!productData) return;

  let basePrice = cleanPrice(productData.price);
  let totalPrice = basePrice * qty;
  document.getElementById("price").innerText = "₹ " + totalPrice;
  document.getElementById("order-value").innerText = "₹ " + totalPrice;
  document.getElementById("summary-value").innerText = "₹ " + totalPrice;
  let discount = Math.floor(Math.random() * 200) + 100;
  document.getElementById("discount").innerText = "- ₹ " + discount;
  document.getElementById("summary-discount").innerText = "- ₹ " + discount;
  document.getElementById("grand-total").innerText = "₹ " + (totalPrice - discount);
}















// Proceed button 
document.addEventListener("DOMContentLoaded", () => {
  const proceedBtn = document.querySelector(".proceed");
  if (proceedBtn) {
    proceedBtn.addEventListener("click", proceedToPayment);
  }
});

function proceedToPayment() {
  if (!productData) return;

  let address = localStorage.getItem("user-address") || "Enter your address";

  let basePrice = cleanPrice(productData.price);
  let totalPrice = basePrice * qty;
  let discount = parseInt(
    document.getElementById("discount").innerText.replace(/[^0-9]/g, "")
  );
  let grandTotal = totalPrice - discount;
  let orderDetails = {
    product: {
      name: productData.name,
      img: productData.img,
      price: basePrice,
      quantity: qty,
      totalPrice: totalPrice,
    },
    address: address,
    summary: {
      totalValue: totalPrice,
      discount: discount,
      grandTotal: grandTotal,
    },
  };

  localStorage.setItem("ecomm-selectaddress", JSON.stringify(orderDetails));
  window.location.href = "../Html/Reviewcart.html";
}
