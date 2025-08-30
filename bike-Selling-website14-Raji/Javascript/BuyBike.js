const faqs = document.querySelectorAll(".sec1-col1-items");

    faqs.forEach(faq => {
      faq.querySelector(".sec1-col1-items-head").addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });


const sortby = document.querySelectorAll(".sorthead");

    sortby.forEach(sort => {
      sort.querySelector(".sort-by-container").addEventListener("click", () => {
        sort.classList.toggle("actives");
      });
    });



//bike selecting
const items = document.querySelectorAll(".sec4-items");

items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.querySelector(".booked")) {
      alert("❌ This bike is already booked, please select another one.");
      return;
    }


    const img = item.querySelector(".sec4-item1-overlay1 img")?.src || "";
    const title = item.querySelector(".sec4-item-2")?.innerText || "";
    const details = item.querySelector(".sec4-item-3")?.innerText || "";
    const price = item.querySelector(".sec4-item-4")?.innerText || "";
    const location = item.querySelector(".sec4-item-5")?.innerText || "";

    const bikeData = { img, title, details, price, location };
    localStorage.setItem("selectedBike", JSON.stringify(bikeData));

    const bookedTag = document.createElement("div");
    bookedTag.className = "booked";
    bookedTag.innerText = "Booked";
    item.appendChild(bookedTag);

    alert("✅ Bike booked successfully!");
    window.location.href = "../Html/BikeSpecification.html"; 
  });
});




// Filter option 
document.querySelectorAll(".sec1-col1-items-body div").forEach((el) => {
  el.addEventListener("click", () => {
    if (el.querySelector("input")) return; 
    el.classList.toggle("selected");
  });
});

document.querySelector(".apply-btn").addEventListener("click", () => {
  const selectedValues = [...document.querySelectorAll(".sec1-col1-items-body div.selected")]
    .map((el) => el.textContent.trim());

  const rangeBudget = document.getElementById("budgetRange")?.value 
    ? parseInt(document.getElementById("budgetRange").value) 
    : null;

  const yearRange = document.getElementById("yearRange")?.value
    ? parseInt(document.getElementById("yearRange").value)
    : null;

  const kmInput = document.getElementById("kmInput");
  const kmRange = document.getElementById("kmRange");
  let maxKm = kmInput?.value ? parseInt(kmInput.value) : null;
  if (!maxKm && kmRange?.value) {
    maxKm = parseInt(kmRange.value);
  }

  document.querySelectorAll(".section4-container .sec4-items").forEach((item) => {
    const text = item.innerText;
    let match = selectedValues.length === 0 || selectedValues.some((val) => text.includes(val));

    if (match && rangeBudget) {
      const priceMatch = text.match(/₹\s*([\d\s,]+)/);
      if (priceMatch) {
        const price = parseInt(priceMatch[1].replace(/[,\s]/g, ""));
        if (price > rangeBudget) match = false;
      }
    }

    if (match && yearRange) {
      const yearMatch = text.match(/\b\d{4}\b/);
      if (yearMatch) {
        const year = parseInt(yearMatch[0]);
        if (year < yearRange) match = false;
      }
    }


    if (match && maxKm) {
      const kmMatch = text.match(/([\d\s,]+)\s*Km/i);
      if (kmMatch) {
        const kms = parseInt(kmMatch[1].replace(/[,\s]/g, ""));
        if (kms > maxKm) match = false;
      }
    }

    item.style.display = match ? "block" : "none";
  });
});


const budgetRange = document.getElementById("budgetRange");
const budgetValue = document.getElementById("rangeValue");
budgetRange.addEventListener("input", () => {
  budgetValue.textContent = budgetRange.value;
});

const yearRange = document.getElementById("yearRange");
yearRange.addEventListener("input", () => {

  console.log("Year selected:", yearRange.value);
});

const kmInput = document.getElementById("kmInput");
const kmRange = document.getElementById("kmRange");

kmInput.addEventListener("input", () => {
  if (kmInput.value >= kmInput.min && kmInput.value <= kmInput.max) {
    kmRange.value = kmInput.value;
  }
});


kmRange.addEventListener("input", () => {
  kmInput.value = kmRange.value;
});
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const sortContainer = document.querySelector(".sort-by-container div:first-child");
const sortBody = document.querySelector(".sortby-body");
const sortOptions = sortBody.querySelectorAll("div");
const sectionContainer = document.querySelector(".section4-container");


document.querySelector(".sort-by-container").addEventListener("click", () => {
  sortBody.classList.toggle("show");
});


function getPrice(text) {
  return parseInt(text.replace(/[₹,\s]/g, ""));
}

function getKm(text) {
  return parseInt(text.replace(/[^\d]/g, ""));
}

function getYear(text) {
  return parseInt(text.trim().split("|")[0]);
}


sortOptions.forEach((option) => {
  option.addEventListener("click", () => {

    sortOptions.forEach((o) => o.classList.remove("active"));

    option.classList.add("active");

    sortContainer.textContent = option.textContent;

    sortBody.classList.remove("show");

    const items = Array.from(sectionContainer.querySelectorAll(".sec4-items"));

    let sorted;
    switch (option.textContent) {
      case "Price - Low to High":
        sorted = items.sort((a, b) => 
          getPrice(a.querySelector(".sec4-item-4").textContent) - 
          getPrice(b.querySelector(".sec4-item-4").textContent)
        );
        break;

      case "Price - High to Low":
        sorted = items.sort((a, b) => 
          getPrice(b.querySelector(".sec4-item-4").textContent) - 
          getPrice(a.querySelector(".sec4-item-4").textContent)
        );
        break;

      case "KM Driven - Low to High":
        sorted = items.sort((a, b) => 
          getKm(a.querySelector(".sec4-item-3").textContent) - 
          getKm(b.querySelector(".sec4-item-3").textContent)
        );
        break;

      case "KM Driven - High to Low":
        sorted = items.sort((a, b) => 
          getKm(b.querySelector(".sec4-item-3").textContent) - 
          getKm(a.querySelector(".sec4-item-3").textContent)
        );
        break;

      case "Year - old to New":
        sorted = items.sort((a, b) => 
          getYear(a.querySelector(".sec4-item-2").textContent) - 
          getYear(b.querySelector(".sec4-item-2").textContent)
        );
        break;

      case "Year - New to Old":
        sorted = items.sort((a, b) => 
          getYear(b.querySelector(".sec4-item-2").textContent) - 
          getYear(a.querySelector(".sec4-item-2").textContent)
        );
        break;

      case "Newest First": 
      default:
        sorted = items.sort((a, b) => 
          getYear(b.querySelector(".sec4-item-2").textContent) - 
          getYear(a.querySelector(".sec4-item-2").textContent)
        );
        break;
    }

    sectionContainer.innerHTML = "";
    sorted.forEach((el) => sectionContainer.appendChild(el));
  });
});

