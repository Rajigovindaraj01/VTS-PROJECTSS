document.addEventListener("DOMContentLoaded", () => {
  let finalTotal = localStorage.getItem("plumbing-final-total") || 0;

  const amountSpan = document.querySelector(".amount-to-pay.total span");
  const payBtn = document.querySelector(".pay.total");
  amountSpan.textContent = "₹ " + finalTotal;
  payBtn.textContent = "PAY ₹ " + finalTotal;
  payBtn.addEventListener("click", () => {
    localStorage.setItem("plumbing-payment-done", finalTotal);
    window.location.href = "../Html/Req-Thanku.html";
  });
});
