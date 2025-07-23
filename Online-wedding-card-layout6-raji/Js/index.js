//for drop-downs

const dropdownTitle=document.getElementById("dropdownTitle");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownTitle.addEventListener("click",()=>{
    dropdownMenu.classList.toggle("active");
})

const dropdownTitle2=document.getElementById("dropdownTitle2");
const dropdownMenu2 = document.getElementById("dropdownMenu2");

dropdownTitle2.addEventListener("click",()=>{
    dropdownMenu2.classList.toggle("active");
})

const dropdownTitle3=document.getElementById("dropdownTitle3");
const dropdownMenu3 = document.getElementById("dropdownMenu3");

dropdownTitle3.addEventListener("click",()=>{
    dropdownMenu3.classList.toggle("active");
})
const dropdownTitle4=document.getElementById("dropdownTitle4");
const dropdownMenu4 = document.getElementById("dropdownMenu4");

dropdownTitle4.addEventListener("click",()=>{
    dropdownMenu4.classList.toggle("active");
})

let quantity = 1;

document.querySelector(".cart-icon").addEventListener("click", () => {
  const product = {
    sku: document.querySelector(".sku").innerText,
    price: document.querySelector(".price").innerText.replace("Rs. ", ""),
    quantity: quantity,
    image: document.querySelector(".product-img").src
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartBadge();
  alert("Product added to cart!");
});

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const badge = document.querySelector(".cart-badge");
  if (badge) {
    badge.innerText = cart.length;
  }
}


document.querySelectorAll(".fa-heart").forEach((heartIcon) => {
  heartIcon.addEventListener("click", () => {
    const card = heartIcon.closest(".section6-cards");

    const product = {
      image: card.querySelector(".product-img").src,
      sku: card.querySelector(".sku").innerText,
      price: card.querySelector(".price").innerText.replace("Rs. ", "")
    };

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const index = wishlist.findIndex(item => item.image === product.image);

    if (index === -1) {
      wishlist.push(product);
      heartIcon.style.color = "red";
      alert("Product added to wishlist!");
    } else {
      wishlist.splice(index, 1);
      heartIcon.style.color = "";
      alert("Product removed from wishlist!");
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  });
});
