//cart
    let cart = JSON.parse(localStorage.getItem("giftwrapping-cart")) || [];

    function updateCartCount() {
        document.getElementById("cart-count").textContent = cart.length;
    }
    updateCartCount();
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let item = this.closest(".sec7-items");

            let product = {
                name: item.querySelector(".sec7-2").innerText,
                price: item.querySelector(".sec7-3").innerText,
                img: item.querySelector("img").src
            };

            cart.push(product);
            localStorage.setItem("giftwrapping-cart", JSON.stringify(cart));

            alert(product.name + " added to cart!");
            updateCartCount();
        });
    });


//faq
const faqHeads = document.getElementsByClassName("sec10-head");

for (let i = 0; i < faqHeads.length; i++) {
  faqHeads[i].onclick = function () {
    const bodies = document.getElementsByClassName("sec10-body");
    const icons = document.querySelectorAll(".sec10-head i");
    if (bodies[i].style.display === "block") {
      bodies[i].style.display = "none";
      icons[i].style.transform = "rotate(0deg)";
    } else {
      bodies[i].style.display = "block";
      icons[i].style.transform = "rotate(180deg)";
    }
  };
}


//search
const searchIcon = document.getElementById("search-icon");
const headLinks = document.getElementById("head-links");
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".sec7-items");

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();

  if (searchBox.style.display === "flex") {
    searchBox.style.display = "none";
    headLinks.style.display = "flex";
  } else {
    searchBox.style.display = "flex";
    headLinks.style.display = "none";
    searchInput.focus();
  }
});
function performSearch(query) {
  query = query.toLowerCase();

  products.forEach((item) => {
    const title = item.querySelector(".sec7-2").textContent.toLowerCase();
    if (title.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none"; 
    }
  });
}
searchBtn.addEventListener("click", () => {
  performSearch(searchInput.value.trim());
});
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    performSearch(searchInput.value.trim());
  }
});


//item-navigation
  const productss = document.querySelectorAll(".sec7-items");
  productss.forEach((product) => {
    product.addEventListener("click", () => {
      const image = product.querySelector(".sec7-1 img").src;
      const name = product.querySelector(".sec7-2").textContent;
      const price = product.querySelector(".sec7-3").textContent;
      const rating = product.querySelector(".sec7-4").innerHTML;
      const productData = { image, name, price, rating };
      localStorage.setItem("giftwrapping-product", JSON.stringify(productData));
      alert("Are You conform this product ?");
      window.location.href = "./Html/ProductDesc.html"; 
    });
  });
