//get payment
const storedData = localStorage.getItem("tourlayout-userdetails");
if (storedData) {
    const parsedData = JSON.parse(storedData);
    const totalPrice = parsedData.totalPrice;
    console.log("Total Price:", totalPrice);
    document.getElementById("priceDisplay").textContent = `₹ ${totalPrice}`;
}
document.querySelector(".p10").addEventListener("click", () => {
    window.location.href = "../html/Thanku.html";
});
