//cart-count
document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-count");
  if (cartIcon) {
    let cart = JSON.parse(localStorage.getItem("tshirt-cart")) || [];
    cartIcon.innerText = cart.length;
  }
});


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



    document.querySelectorAll(".sec4-items").forEach(item => {
        item.addEventListener("click", function () {
            const image = item.querySelector(".sec4-1-1 img").getAttribute("src");
            const status = item.querySelector(".sec4-1-2").innerText;
            const name = item.querySelector(".sec4-2").innerText;
            const desc = item.querySelector(".sec4-3").innerText;
            const price = item.querySelector(".sec4-4").innerText;

            const selectedTshirt = {
                image: image,
                status: status,
                name: name,
                desc: desc,
                price: price
            };

            localStorage.setItem("tshirt-selected", JSON.stringify(selectedTshirt));
            alert(`${name} Selected`);
            window.location.href = "../Html/tshirtDescription.html";
        });
    });



// filter
const applyBtn = document.getElementById("applyFilter");
const clearBtn = document.getElementById("clear");
const checkboxes = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".sec4-items");

applyBtn.addEventListener("click", () => {
  let selected = [];
  checkboxes.forEach(cb => {
    if (cb.checked) selected.push(cb.value.toLowerCase()); 
  });

  products.forEach(p => {
    let tags = p.getAttribute("data-tags");
    if (!tags) tags = ""; 
    tags = tags.toLowerCase().split(",");

    if (selected.length === 0 || selected.some(s => tags.includes(s))) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
});

clearBtn.addEventListener("click", () => {
  checkboxes.forEach(cb => cb.checked = false);
  products.forEach(p => p.style.display = "block");
});
