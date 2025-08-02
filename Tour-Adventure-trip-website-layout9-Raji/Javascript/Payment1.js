//countryselect
document.addEventListener('DOMContentLoaded', function () {
      const select = document.getElementById("countrySelect");
      const flagImg = document.getElementById("flag");

      select.addEventListener("input", function () {
        const selectedOption = select.options[select.selectedIndex];
        const flagUrl = selectedOption.getAttribute("data-flag");
        flagImg.src = flagUrl;
      });
    });
//retrieve data
const bookingData = JSON.parse(localStorage.getItem("tourlayout-bookingdetails"));

if (bookingData) {
  document.querySelector(".p2").textContent = bookingData.from;
  document.querySelector(".p3").textContent = bookingData.to;
}



//incre-decrea
document.addEventListener("DOMContentLoaded", function () {
    const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const travellerCount = document.getElementById("travellerCount");
    const totalPriceSpan = document.getElementById("totalPrice");

    let count = 1;
    const pricePerPerson = 40000;

    function updateDisplay() {
      travellerCount.textContent = `${count} ADULT${count > 1 ? 'S' : ''}`;
      totalPriceSpan.textContent = (count * pricePerPerson).toLocaleString("en-IN");
    }

    increaseBtn.addEventListener("click", () => {
      count++;
      updateDisplay();
    });

    decreaseBtn.addEventListener("click", () => {
      if (count > 1) {
        count--;
        updateDisplay();
      }
    });
  });


//store to local
const decreaseBtn = document.getElementById("decrease");
    const increaseBtn = document.getElementById("increase");
    const travellerCountDisplay = document.getElementById("travellerCount");
    const totalPriceDisplay = document.getElementById("totalPrice");

    let travellerCount = 1;
    const pricePerTraveller = 40000;

    function updateUI() {
        travellerCountDisplay.textContent = `${travellerCount} ADULT${travellerCount > 1 ? 'S' : ''}`;
        totalPriceDisplay.textContent = pricePerTraveller * travellerCount;
    }

    increaseBtn.addEventListener("click", () => {
        travellerCount++;
        updateUI();
    });

    decreaseBtn.addEventListener("click", () => {
        if (travellerCount > 1) {
            travellerCount--;
            updateUI();
        }
    });

    const countrySelect = document.getElementById("countrySelect");
    const flagImg = document.getElementById("flag");

    countrySelect.addEventListener("change", () => {
        const selectedOption = countrySelect.options[countrySelect.selectedIndex];
        const flagURL = selectedOption.getAttribute("data-flag");
        flagImg.src = flagURL;
    });

    const continueBtn = document.querySelector(".p9");

    continueBtn.addEventListener("click", () => {
        const phoneNumber = document.querySelector('.number-input input').value;
        const country = countrySelect.value;
        const totalPrice = pricePerTraveller * travellerCount;

        const userDetails = {
            travellers: travellerCount,
            totalPrice: totalPrice,
            phoneNumber: phoneNumber,
            country: country
        };

        localStorage.setItem("tourlayout-userdetails", JSON.stringify(userDetails));
        window.location.href = "../html/Payment2.html"; 
    });







//navigation
const pageLinks = {
    "europe": "../html/Collection1.html",
    "asia": "../html/tour.html",
    "africa": "africa.html",
    "south-america": "../html/Collection1.html",
    "north-america": "../html/Collection1.html",
    "oceania": "oceania.html",
    "hiking": "hiking.html",
    "cycling": "cycling.html",
    "rafting": "rafting.html",
    "snorkeiling": "snorkeling.html",
    "wild-swim": "wild-swimming.html",
    "northernlights": "northern-lights.html",
    "new-advent": "new-adventure.html",
    "winter-sun": "winter-sun.html",
    "Desserts": "desserts-dunes.html",
    "Foodie": "foodie-adventure.html",
    "jungle": "jungle-adventure.html",
    "islands": "islands.html"
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