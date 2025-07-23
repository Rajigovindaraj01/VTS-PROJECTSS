//for drop-downs

const dropdownTitle = document.getElementById("dropdownTitle");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownTitle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
})

const dropdownTitle2 = document.getElementById("dropdownTitle2");
const dropdownMenu2 = document.getElementById("dropdownMenu2");

dropdownTitle2.addEventListener("click", () => {
    dropdownMenu2.classList.toggle("active");
})

const dropdownTitle3 = document.getElementById("dropdownTitle3");
const dropdownMenu3 = document.getElementById("dropdownMenu3");

dropdownTitle3.addEventListener("click", () => {
    dropdownMenu3.classList.toggle("active");
})
const dropdownTitle4 = document.getElementById("dropdownTitle4");
const dropdownMenu4 = document.getElementById("dropdownMenu4");

dropdownTitle4.addEventListener("click", () => {
    dropdownMenu4.classList.toggle("active");
})



const orderId = "ORD" + Math.floor(100000 + Math.random() * 900000);
document.querySelector(".col1-item1 div:nth-child(2)").innerText = "ORDER ID: " + orderId;

const details = JSON.parse(localStorage.getItem("checkout-details"));
if (details) {
    const mybag = JSON.parse(localStorage.getItem("mybag"));
    if (mybag?.image) {
        const img = document.createElement("img");
        img.src = mybag.image;
        img.alt = "Product";
        img.style.width = "100%";
        img.style.height = "100%";
        document.querySelector(".col-item2-item1").appendChild(img);
    } else {
        document.querySelector(".col-item2-item1").innerText = "Image not found";
    }

    document.querySelector(".col-item2-item2").innerText = details.productName;
    document.querySelector(".col-item2-item3").innerText = "Rs. " + details.subtotal;

    document.querySelector(".values div:nth-child(1)").innerText = details.subtotal;
    document.querySelector(".values div:nth-child(2)").innerText = details.shipping;
    document.querySelector(".values div:nth-child(3)").innerText = "18%";
    document.querySelector(".values div:nth-child(4)").innerText = "Rs. 5.00";

    const subtotal = parseFloat(details.subtotal);
    const tax = subtotal * 0.18;
    const discount = 5;
    const total = subtotal + tax - discount;

    document.querySelector(".total-value").innerText = "Rs. " + total.toFixed(2);
} else {
    alert("Checkout details not found.");
}