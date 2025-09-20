
function cleanPrice(val) {
  if (!val) return 0;
  return parseInt(val.toString().replace(/[^0-9]/g, ""));
}

const itemCount = document.getElementById("item-count");
const itemPrice = document.getElementById("item-price");
const codChargeEl = document.getElementById("cod-charge");
const grandTotalEl = document.getElementById("grand-total");
const placeOrderBtn = document.getElementById("place-order");

let orderData = JSON.parse(localStorage.getItem("ecomm-selectaddress"));
let baseTotal = 0;

if (orderData) {
 
  const qty = orderData.summary?.quantity || orderData.product?.quantity || 1;
  itemCount.innerText = qty;

 
  baseTotal = cleanPrice(orderData.summary?.grandTotal || orderData.product?.totalPrice || 0);
  itemPrice.innerText = "₹ " + baseTotal;
  grandTotalEl.innerText = "₹ " + baseTotal;
  placeOrderBtn.innerText = "Place Order for ₹ " + baseTotal;
}

let codCharge = 0;


document.querySelectorAll("input[name='pay']").forEach(radio => {
  radio.addEventListener("change", (e) => {

    document.querySelectorAll(".payment-option").forEach(opt => opt.classList.remove("active"));

    document.getElementById(e.target.value).classList.add("active");


    codCharge = e.target.value === "cod" ? 9 : 0;

    codChargeEl.innerText = "₹ " + codCharge;
    const finalAmount = baseTotal + codCharge;
    grandTotalEl.innerText = "₹ " + finalAmount;
    placeOrderBtn.innerText = "Place Order for ₹ " + finalAmount;
  });
});


placeOrderBtn.addEventListener("click", () => {
  const paymentMode = document.querySelector("input[name='pay']:checked")?.value || "Not Selected";
  const finalAmount = cleanPrice(grandTotalEl.innerText);

  alert("Order placed successfully!\nFinal amount: ₹" + finalAmount);
  window.location.href='../Html/Thankyou.html'

  localStorage.setItem("final-order", JSON.stringify({
    ...orderData,
    finalAmount,
    paymentMode
  }));


});

document.addEventListener("DOMContentLoaded", () => {
  const proceedBtn = document.querySelector(".proceed");
  if (proceedBtn) proceedBtn.addEventListener("click", proceedToPayment);
});

function proceedToPayment() {
  if (!window.productData || typeof qty === "undefined") return;

  const address = localStorage.getItem("user-address") || "Enter your address";

  const basePrice = cleanPrice(productData.price);
  const totalPrice = basePrice * qty;

  const discountEl = document.getElementById("discount");
  const discount = discountEl ? cleanPrice(discountEl.innerText) : 0;

  const grandTotal = totalPrice - discount;

  const orderDetails = {
    product: {
      name: productData.name,
      img: productData.img,
      price: basePrice,
      quantity: qty,
      totalPrice: totalPrice
    },
    address: address,
    summary: {
      totalValue: totalPrice,
      discount: discount,
      grandTotal: grandTotal,
      quantity: qty
    }
  };

  localStorage.setItem("ecomm-selectaddress", JSON.stringify(orderDetails));

  window.location.href = "../Html/Thankyou.html";
}
