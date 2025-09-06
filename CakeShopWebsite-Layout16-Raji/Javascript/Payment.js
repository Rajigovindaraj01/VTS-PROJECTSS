const dotContainers = document.querySelectorAll(".sec3-dots div");
let selectedIndex = null;

// radio button behavior
dotContainers.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    dotContainers.forEach(d => d.innerHTML = `<i class="fa-regular fa-circle"></i>`);
    dot.innerHTML = `<i class="fa-solid fa-circle-dot"></i>`;
    selectedIndex = index;
  });
});

// modal logic
const modal = document.getElementById("paymentModal");
const payNowBtn = document.querySelector(".pay-now");
const closeBtn = document.querySelector(".close");

payNowBtn.addEventListener("click", () => {
  if (selectedIndex !== null) {
    modal.style.display = "flex";
  } else {
    alert("Please select a payment option first!");
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  window.location.href="../index.html"
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});


//display cart total
function updateCartCount() {
    let storedCartieees = JSON.parse(localStorage.getItem("selectedCart")) || [];
    document.getElementById("cart-count").textContent = storedCartieees.length;
}
updateCartCount();