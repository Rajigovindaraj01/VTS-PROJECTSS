document.addEventListener("DOMContentLoaded", () => {
    let membership = JSON.parse(localStorage.getItem("spa-membership-selected"));

    if (membership) {
        document.querySelector(".sec2-col1 img").src = membership.image;
        document.querySelector(".membername").innerText = membership.membername;
        document.querySelector(".price").innerText = membership.price;
        document.querySelector(".validity").innerText = membership.validity;
        document.querySelector(".services").innerText = membership.services;
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const payNowBtn = document.querySelector(".paynow");
    const paymentBox = document.querySelector(".payment-method");
    const modal = document.querySelector(".modal");
    const closeModalBtn = document.querySelector(".closeModal");

    payNowBtn.addEventListener("click", () => {
        paymentBox.style.display = "block";
    });

    document.querySelectorAll(".payment-method input").forEach(input => {
        input.addEventListener("change", () => {
            modal.style.display = "block";
        });
    });
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
        window.location.href = "../index.html"; 
    });
});
