document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("selected-plumbing")) || [];

  const nameDiv = document.querySelector(".checkout-col2 .sec2-1 .name");
  const priceDiv = document.querySelector(".checkout-col2 .sec2-1 .price");
  const itemTotalDiv = document.querySelector(".sec2-6 .price");
  const totalAmountDiv = document.querySelector(".sec2-9 div:nth-child(2)");
  const amountToPayDiv = document.querySelector(".sec2-10").lastElementChild;

  const mobileInput = document.querySelector('.col1-1 input[placeholder="Mobile-number"]');
  const addressInput = document.querySelector('.col1-2 input[placeholder="Address"]');

  const col1_1_p = document.querySelector(".col1-1 p:nth-of-type(2)");
  const col1_2_p = document.querySelector(".col1-2 p:nth-of-type(2)");

  const tipOptions = document.querySelectorAll(".sec2-12 p");

  const selectDateBtn = document.querySelector(".select-date");
  const slotPicker = document.createElement("input");
  slotPicker.type = "datetime-local";
  slotPicker.style.display = "none";
  document.body.appendChild(slotPicker);
  const slotValue = document.createElement("div");
  slotValue.className = "slot-value";
  selectDateBtn.after(slotValue);

  const proceedBtn = document.querySelector(".proceed");

  let visitationFee = 60;
  let taxFee = 20;
  let selectedTip = 0;
  let selectedSlot = "";
  let finalTotal = 0;


  function renderCart() {
    if (cart.length > 0) {
      let item = cart[0];
      let totalPrice = item.price * item.qty;

      nameDiv.textContent = item.title;
      priceDiv.textContent = "₹ " + totalPrice;
      itemTotalDiv.textContent = "₹ " + totalPrice;

      calculateTotal(totalPrice);
    } else {
      nameDiv.textContent = "-";
      priceDiv.textContent = "₹ 0";
      itemTotalDiv.textContent = "₹ 0";
      totalAmountDiv.textContent = "₹ 0";
      amountToPayDiv.textContent = "₹ 0";
      finalTotal = 0;
    }
  }


  function calculateTotal(itemTotal) {
    finalTotal = itemTotal + visitationFee + taxFee + selectedTip;
    totalAmountDiv.textContent = "₹ " + finalTotal;
    amountToPayDiv.textContent = "₹ " + finalTotal;

    localStorage.setItem("plumbing-final-total", finalTotal);
  }


  mobileInput.addEventListener("input", () => {
    col1_1_p.textContent = mobileInput.value || "-";
  });


  addressInput.addEventListener("input", () => {
    col1_2_p.textContent = addressInput.value || "-";
  });


  tipOptions.forEach(option => {
    option.addEventListener("click", () => {
      tipOptions.forEach(o => o.classList.remove("active"));
      option.classList.add("active");

      if (option.textContent.includes("50")) selectedTip = 50;
      else if (option.textContent.includes("100")) selectedTip = 100;
      else {
        let custom = prompt("Enter custom tip amount:");
        selectedTip = parseInt(custom) || 0;
      }

      let item = cart.length > 0 ? cart[0] : { price: 0, qty: 0 };
      calculateTotal(item.price * item.qty);
    });
  });

  
  selectDateBtn.addEventListener("click", () => slotPicker.showPicker());

  slotPicker.addEventListener("change", () => {
    if (slotPicker.value) {
      selectedSlot = slotPicker.value;
      slotValue.textContent = new Date(selectedSlot).toLocaleString();
    }
  });


  proceedBtn.addEventListener("click", () => {
    if (!mobileInput.value.trim()) return alert("Enter mobile number!");
    if (!addressInput.value.trim()) return alert("Enter address!");
    if (!selectedSlot) return alert("Select a slot!");

    let booking = {
      mobile: mobileInput.value,
      address: addressInput.value,
      slot: selectedSlot,
      tip: selectedTip,
      cart: cart,
      total: finalTotal
    };

    localStorage.setItem("plumbing-booking", JSON.stringify(booking));
    window.location.href = "../Html/checkoutfinal.html";
  });

  renderCart();
});
