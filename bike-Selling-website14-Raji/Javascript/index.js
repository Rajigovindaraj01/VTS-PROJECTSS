document.addEventListener("DOMContentLoaded", function() {
    const overlays = document.querySelectorAll('.overlay-img');
    let current = 0;

    function changeOverlay() {
        overlays[current].classList.remove('active');
        current = (current + 1) % overlays.length;
        overlays[current].classList.add('active');
    }

    setInterval(changeOverlay, 2000); 
});



//faq
const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
      faq.querySelector(".faq-head").addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });


//bike selecting
  const items = document.querySelectorAll(".sec4-items");

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("booked")) {
        alert("This bike is already booked, please select another one.");
        return;
      }

      const img = item.querySelector(".sec4-item1-overlay1 img")?.src || "";
      const title = item.querySelector(".sec4-item-2")?.innerText || "";
      const details = item.querySelector(".sec4-item-3")?.innerText || "";
      const price = item.querySelector(".sec4-item-4")?.innerText || "";
      const location = item.querySelector(".sec4-item-5")?.innerText || "";

      const bikeData = { img, title, details, price, location };
      localStorage.setItem("selectedBike", JSON.stringify(bikeData));

      item.classList.add("booked");

      alert("Bike booked successfully!");
      window.location.href = "./Html/BikeSpecification.html";
    });
  });