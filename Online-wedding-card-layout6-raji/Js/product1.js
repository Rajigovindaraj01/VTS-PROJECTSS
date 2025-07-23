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

  document.getElementById("increase").addEventListener("click", () => {
    quantity++;
    document.getElementById("quantity-value").innerText = quantity;
  });

  document.getElementById("decrease").addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      document.getElementById("quantity-value").innerText = quantity;
    }
  });


  document.getElementById("add-to-cart").addEventListener("click", () => {
    const product = {
      sku: document.getElementById("sku").innerText,
      price: document.getElementById("price").innerText.replace("Rs. ", ""),
      quantity: quantity,
      image: document.getElementById("product-img").src
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartBadge();
    alert("Product added to cart!");
  });

  function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const badge = document.getElementById("cart-badge");
    if (cart.length > 0) {
      badge.innerText = cart.length;
      badge.style.display = "inline";
    } else {
      badge.style.display = "none";
    }
  }
  updateCartBadge();



document.getElementById("buy-now").addEventListener("click", () => {
    const imageSrc = document.getElementById("product-img").src;
    const skuText = document.getElementById("sku").textContent;
    const priceText = document.getElementById("price").textContent;

    const productDetails = {
        image: imageSrc,
        sku: skuText,
        price: priceText,
        quantity: quantity
    };
    localStorage.setItem("mybag", JSON.stringify(productDetails));
    window.location.href = "../Pages/checkout.html"; 
});

















document.querySelectorAll('.wishlist-icon').forEach((icon,index)=>{
    icon.addEventListener('click',function(){
        this.classList.remove('fa-regular');
        this.classList.add('fa-solid');
        this.style.color = 'red';

        const card = this.closest('.cards');
        const imageSrc = card.querySelector('img').src;
        const title = card.querySelector('.product-title').textContent;
        const price = card.querySelector('.product-price').textContent;

        const wishlistItem = {image: imageSrc,title,price};

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        const alreadyAdded = wishlist.some(item=>item.title===title);
        if(!alreadyAdded){
            wishlist.push(wishlistItem);
            localStorage.setItem('wishlist',JSON.stringify(wishlist));
            alert('Added to Wishlist')
        } 
        else{
            alert('Alread in wishlist')
        }
    })
})