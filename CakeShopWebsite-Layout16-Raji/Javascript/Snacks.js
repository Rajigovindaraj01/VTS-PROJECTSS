// add-to-cart
function updateCartCount() {
    let storedCartieees = JSON.parse(localStorage.getItem("selectedCart")) || [];
    document.getElementById("cart-count").textContent = storedCartieees.length;
}
updateCartCount();

const productCards = document.querySelectorAll(".sec1-col2-content3-items");

productCards.forEach(card => {
    const btn = card.querySelector(".sec1-col2-content3-item3-2");

    btn.addEventListener("click", () => {
        const name = card.querySelector(".sec1-col2-content3-item2").textContent;
        const price = card.querySelector(".sec1-col2-content3-item3-1").textContent;
        const image = card.querySelector(".sec1-col2-content3-item1 img").src;

        const selectedCart = { name, price, image };

        let storedCartieees = JSON.parse(localStorage.getItem("selectedCart")) || [];
        storedCartieees.push(selectedCart);
        localStorage.setItem("selectedCart", JSON.stringify(storedCartieees));

        alert(`${name} added to cart!`);
        updateCartCount();
    });
});


//search
const searchInput = document.getElementById("searchInput")
const items = document.querySelectorAll(".sec1-col2-content3-items")

searchInput.addEventListener('keyup', function(){
    const filter = searchInput.value.toLowerCase();

items.forEach(item=>{
    const text = item.querySelector(".sec1-col2-content3-item2").textContent.toLowerCase();
    if(text.includes(filter)){
        item.style.display= "";
    }
    else{
        item.style.display="none";
    }
})
})
