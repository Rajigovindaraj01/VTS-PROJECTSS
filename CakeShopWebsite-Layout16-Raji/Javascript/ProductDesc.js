document.addEventListener("DOMContentLoaded", () => {
    const storedCakeItems = JSON.parse(localStorage.getItem("selectedCakeItems"));

    if (storedCakeItems && storedCakeItems.length > 0) {
        const { name, price, image } = storedCakeItems[0];

        document.querySelector(".product-container .name").textContent = name;
        document.querySelector(".product-container .price").textContent = `₹ ${price}`;
        const imgTag = document.querySelector(".product-container .pro-col1-1 img");
        if (imgTag) {
            imgTag.src = image;
            imgTag.alt = name;
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const storedCakeItems = JSON.parse(localStorage.getItem("selectedCakeItems"));

    if (storedCakeItems && storedCakeItems.length > 0) {
        const { name, price, image } = storedCakeItems[0];

        // Base price
        let basePrice = parseInt(price);

        // Show base price
        document.querySelector(".price").textContent = `₹ ${basePrice}`;

        const select = document.querySelector(".select");
        const qtyDiv = document.querySelector(".selectedQty");
        const totalDiv = document.querySelector(".totalPrice");

        function updatePrice() {
            const val = select.value;
            let qty = 1;
            let extra = 0;

            if (val === "customization") {
                const prev = qtyDiv.textContent.match(/\d+/);
                qty = prev ? parseInt(prev[0]) : 1;
                extra = 500;
                qtyDiv.textContent = `Selected Quantity: Customization (${qty}kg)`;
            } else {
                qty = parseInt(val); 
                qtyDiv.textContent = `Selected Quantity: ${qty}kg`;
            }

            totalDiv.textContent = `Total Price: ₹ ${(basePrice * qty) + extra}`;
        }

        select.addEventListener("change", updatePrice);
        updatePrice();
    }
});






//add-to-cart
function updateCartCount() {
    let storedCartieees = JSON.parse(localStorage.getItem("selectedCart")) || [];
    document.getElementById("cart-count").textContent = storedCartieees.length;
}
updateCartCount();

// Update count after add-to-cart click
const cakecart = document.getElementsByClassName("add-to-cart");

Array.from(cakecart).forEach(ite => {
    ite.addEventListener("click", () => {
        const name = document.querySelector(".name").textContent;
        const price = document.querySelector(".price").textContent;
        const image = document.querySelector(".product-container img").src;

        const selectedCart = { name, price, image };

        let storedCartieees = JSON.parse(localStorage.getItem("selectedCart")) || [];
        storedCartieees.push(selectedCart);
        localStorage.setItem("selectedCart", JSON.stringify(storedCartieees));

        alert(`${name} added to cart!`);

        // Update the badge
        updateCartCount();
    });
});





const buynow = document.querySelector('.buy-now'); 
buynow.addEventListener('click', function() {
    window.location.href = '../Html/Payment.html';
});
