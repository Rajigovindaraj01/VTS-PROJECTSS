document.addEventListener("DOMContentLoaded", function () {
  const payment = JSON.parse(localStorage.getItem("payment-info"));
  if (!payment) return;
  const logoImg = document.querySelector(".sec1-1 img");
  logoImg.src = payment.logo;
  logoImg.alt = payment.method;
  document.querySelector(".section1 h2 span").innerText = "₹" + payment.total;
  document.querySelector(".pay-btn").addEventListener("click", () => {
    alert(`✅ Payment of ₹${payment.total} via ${payment.method} is successful!`);
    window.location.href = "../Html/Paymentsucess.html";
  });
});

