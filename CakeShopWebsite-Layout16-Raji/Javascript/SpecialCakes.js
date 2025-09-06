const checkboxes = document.querySelectorAll('.checkbox-input input[type="checkbox"]');
const items = document.querySelectorAll('.sec1-col2-content3-items');

checkboxes.forEach(cb => {
  cb.addEventListener('change', filterItems);
});

function filterItems() {
  const selectedFlavours = [];
  const selectedDeliveries = [];

  checkboxes.forEach(cb => {
    if (cb.checked) {
      if (
        cb.parentElement.textContent.includes("Delivery")
      ) {
        selectedDeliveries.push(cb.parentElement.textContent.trim());
      } else {
        selectedFlavours.push(cb.parentElement.textContent.trim());
      }
    }
  });

  items.forEach(item => {
    const flavour = item.getAttribute('data-flavour');
    const delivery = item.getAttribute('data-delivery');

    let flavourMatch = selectedFlavours.length === 0 || selectedFlavours.includes(flavour);
    let deliveryMatch =
      selectedDeliveries.length === 0 ||
      selectedDeliveries.some(d => delivery.includes(d));

    if (flavourMatch && deliveryMatch) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}



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








const searchInput = document.getElementById("searchInput")
const itemss = document.querySelectorAll(".sec1-col2-content3-items")

searchInput.addEventListener('keyup', function(){
    const filter = searchInput.value.toLowerCase();

itemss.forEach(iteme=>{
    const text = iteme.querySelector(".sec1-col2-content3-item2").textContent.toLowerCase();
    if(text.includes(filter)){
        iteme.style.display= "";
    }
    else{
        iteme.style.display="none";
    }
})
})