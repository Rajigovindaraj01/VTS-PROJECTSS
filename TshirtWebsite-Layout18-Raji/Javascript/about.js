const searchInput = document.querySelector('.head-col-3 input[type="search"]');

searchInput.addEventListener("keyup", function () {
  const filter = searchInput.value.toLowerCase();
  let firstMatch = null;

  document.querySelectorAll(".sec3-items").forEach((item) => {
    const text = item
      .querySelector(".sec3-overlay-content")
      .innerText.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = "block";
      if (!firstMatch) firstMatch = item;
    } else {
      item.style.display = "none";
    }
  });

  document.querySelectorAll(".sec4-items").forEach((item) => {
    const text1 = item.querySelector(".sec4-2").innerText.toLowerCase();
    const text2 = item.querySelector(".sec4-3").innerText.toLowerCase();
    if (text1.includes(filter) || text2.includes(filter)) {
      item.style.display = "block";
      if (!firstMatch) firstMatch = item;
    } else {
      item.style.display = "none";
    }
  });

  if (firstMatch) {
    firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

//cart-count
document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-count");
  if (cartIcon) {
    let cart = JSON.parse(localStorage.getItem("tshirt-cart")) || [];
    cartIcon.innerText = cart.length;
  }
});
