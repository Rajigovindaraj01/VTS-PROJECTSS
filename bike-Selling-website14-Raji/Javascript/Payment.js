document.addEventListener("DOMContentLoaded", () => {
  // ----- Payment
  const paymentOptions = document.querySelectorAll(".sec1-col1 .c2 i");

  paymentOptions.forEach((icon) => {
    icon.addEventListener("click", () => {
      paymentOptions.forEach((i) => i.className = "fa-regular fa-circle");
      icon.className = "fa-solid fa-circle-check";
    });
  });

  // ----- Retrieve -----
  const bikeData = JSON.parse(localStorage.getItem("selectedBike"));

  if (bikeData) {
    const subtotalEl = document.querySelector(".c5.prices div:last-child");
    const gstEl = document.querySelector(".c5:nth-child(2) div:last-child");
    const testDriveEl = document.querySelector(".c5:nth-child(3) div:last-child");
    const grandTotalEl = document.querySelector(".c6 div:last-child");

    const subtotal = parseFloat(bikeData.price.replace(/[^0-9.]/g, "")) || 0;
    const gst = 1000;      
    const testDrive = 1000; 

    subtotalEl.innerText = "Rs. " + subtotal.toFixed(2);
    gstEl.innerText = "Rs. " + gst.toFixed(2);
    testDriveEl.innerText = "Rs. " + testDrive.toFixed(2);

    const grandTotal = subtotal + gst + testDrive;
    grandTotalEl.innerText = "Rs. " + grandTotal.toFixed(2);
  } else {
    alert("No bike selected!");
  }
});


//confirmpay
const confirmBtn = document.querySelector('.c7');
const overlay = document.querySelector('.confirm-overlay');

if (confirmBtn) {
  confirmBtn.addEventListener('click', () => {
    const selectedPayment = document.querySelector(".sec1-col1 .c2 i.fa-solid.fa-circle-check");

    if (!selectedPayment) {
      alert("Please select a payment method!");
      overlay.style.display = 'none'; 
    } else {
      overlay.style.display = 'block';
    }
  });
}
