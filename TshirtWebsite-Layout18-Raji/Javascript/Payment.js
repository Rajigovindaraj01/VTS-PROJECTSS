document.addEventListener("DOMContentLoaded", function () {
  const tshirt = JSON.parse(localStorage.getItem("tshirt-selected-details"));
  if (tshirt) {
    document.getElementById("product-name").innerText = tshirt.name || '';
    document.getElementById("product-size").innerText = tshirt.size || '';
    document.getElementById("product-color").innerText = tshirt.color || '';
    document.getElementById("product-qty").innerText = tshirt.quantity || 1;
    document.getElementById("product-price").innerText = tshirt.price || tshirt.totalPrice;

    const tax = Math.round((tshirt.totalPrice * 2) / 100);
    document.getElementById("product-tax").innerText = `${tax} (2%)`;
    document.getElementById("product-total").innerText = tshirt.totalPrice + tax;

    document.getElementById("product-img").src = tshirt.image || '';
  }
  const logoSrc = localStorage.getItem("tshirt-selected-logo");
  if (logoSrc) {
    const logoImg = document.createElement("img");
    logoImg.src = logoSrc;
    logoImg.alt = "Selected Logo";
    logoImg.style.width = "100px"; 
    logoImg.style.marginTop = "10px";

    const imageContainer = document.querySelector(".product-image");
    imageContainer.appendChild(logoImg);
  }
});

document.querySelectorAll('input[name="pay"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    const payMethod = radio.value;
    const payLogo = radio.getAttribute("data-image");
    const total = document.getElementById("product-total").innerText;

    localStorage.setItem("payment-info", JSON.stringify({
      method: payMethod,
      total: total,
      logo: payLogo
    }));
    window.location.href = "../Html/Paymentselected.html";
  });
});
