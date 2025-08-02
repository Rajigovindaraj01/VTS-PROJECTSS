//for booking dropdowns
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll('.secction2-dropdowns');

    dropdowns.forEach(dropdown => {
        const head = dropdown.querySelector('.drop-head');
        const body = dropdown.querySelector('.drop-body');

        head.addEventListener('click', () => {
            body.classList.toggle('show-drop');
        });
    });
});


//for drop-2
document.addEventListener("DOMContentLoaded",function(){
    const drops = document.querySelectorAll('.hut-section2-dropdowns');

    drops.forEach(droppp =>{
        const dropHead = droppp.querySelector('.hut-sec2-col2-head');
        const dropBody = droppp.querySelector('.hut-sec2-col2-body');

        dropHead.addEventListener('click',()=>{
            dropBody.classList.toggle('showing-drop')
        })
    })
})



//tabs
const buttons = document.querySelectorAll(".section-row1 div");
const contents = document.querySelectorAll(".section3-row2");

function showTab(index) {
  contents.forEach(c => c.style.display = "none");
  buttons.forEach(btn => btn.classList.remove("active-btn"));
  contents[index].style.display = "grid";
  buttons[index].classList.add("active-btn");
}
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    showTab(index);
  });
});
showTab(0);

//booking-details
document.addEventListener("DOMContentLoaded", function () {
  const bookBtns = document.querySelectorAll(".drop-body-dold-out");

  bookBtns.forEach((btn) => {
    btn.style.cursor = "pointer";

    btn.addEventListener("click", function () {
      const status = btn.innerText.trim().toUpperCase();

      if (status === "SOLD OUT") {
        alert("Sorry, this is SOLD OUT.");
        return;
      }

      if (status === "BOOK THIS DATE") {
        const dropBody = btn.closest(".drop-body");
        const bdy1 = dropBody.querySelector(".drop-bdy1");
        const bdy2 = dropBody.querySelector(".drop-bdy2");
        const bdy3 = dropBody.querySelector(".drop-bdy3");
        const fromText = bdy1?.innerText.split("\n")[0] || ""; 
        const toText = bdy2?.innerText.split("\n")[0] || "";   
        const availability = bdy3?.innerText.split("\n")[0] || "";

        const bookingDetails = {
          from: fromText.trim(),
          to: toText.trim(),
          status: availability.trim()
        };

        localStorage.setItem("tourlayout-bookingdetails", JSON.stringify(bookingDetails));
        window.location.href = "../html/Payment1.html";
      }
    });
  });
});


//navigation
const pageLinks = {
    "europe": "../html/Collection1.html",
    "asia": "../html/tour.html",
    "africa": "../html/Collection2.html",
    "south-america": "../html/Collection1.html",
    "north-america": "../html/Collection1.html",
    "oceania": "../html/Collection2.html",
    "hiking": "../html/hut-to-hut-hiking.html",
    "cycling": "../html/hut2.html",
    "rafting": "../html/hut-to-hut-hiking.html",
    "snorkeiling": "../html/hut2.html",
    "wild-swim": "../html/hut-to-hut-hiking.html",
    "northernlights": "../html/hut2.html",
    "new-advent": "../html/hut-to-hut-hiking.html",
    "winter-sun": "../html/hut-to-hut-hiking.html",
    "Desserts": "../html/hut3.html",
    "Foodie": "../html/hut-to-hut-hiking.html",
    "jungle": "../html/hut3.html",
    "islands": "../html/hut3.html"
  };
  Object.keys(pageLinks).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.cursor = "pointer";
      element.addEventListener("click", () => {
        window.location.href = pageLinks[id];
      });
    }
  });