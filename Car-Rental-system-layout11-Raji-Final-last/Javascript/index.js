document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section1, .section2, .section3, .section4, .section5");
    let currentIndex = 0;

    // Initially show only the first section
    sections.forEach((sec, i) => {
        sec.style.display = (i === 0) ? "block" : "none";
    });

    // Show section with animation
    function showSection(index, direction) {
        sections[currentIndex].classList.remove("slide-in-bottom", "slide-in-top");
        sections[currentIndex].style.display = "none";
        
        currentIndex = index;
        sections[currentIndex].style.display = "block";
        sections[currentIndex].classList.add(direction);
    }

    // NEXT buttons
    document.querySelectorAll(".next, .next2, .next3, .next4, .next5").forEach(btn => {
        btn.addEventListener("click", () => {
            let nextIndex = (currentIndex + 1) % sections.length;
            showSection(nextIndex, "slide-in-right");
        });
    });

    // PREVIOUS buttons
    document.querySelectorAll(".previous, .previous2, .previous3, .previous4, .previous5").forEach(btn => {
        btn.addEventListener("click", () => {
            let prevIndex = (currentIndex - 1 + sections.length) % sections.length;
            showSection(prevIndex, "slide-in-left");
        });
    });
});
// ===============================================================================================================================================================
 async function fetchCities() {
        let res = await fetch("https://countriesnow.space/api/v0.1/countries/population/cities");
        let data = await res.json();
        return data.data.map(city => city.city);
    }

    function setupSearch(inputId, suggestionId, cities) {
        const input = document.getElementById(inputId);
        const suggestionBox = document.getElementById(suggestionId);

        input.addEventListener("input", () => {
            const val = input.value.toLowerCase();
            suggestionBox.innerHTML = "";
            if (val.length === 0) {
                suggestionBox.style.display = "none";
                return;
            }
            const matches = cities.filter(city => city.toLowerCase().includes(val)).slice(0, 10);
            matches.forEach(match => {
                const div = document.createElement("div");
                div.textContent = match;
                div.onclick = () => {
                    input.value = match;
                    suggestionBox.style.display = "none";
                };
                suggestionBox.appendChild(div);
            });
            suggestionBox.style.display = matches.length ? "block" : "none";
        });
    }

    fetchCities().then(cities => {
        setupSearch("departure", "departure-suggestions", cities);
        setupSearch("return-location", "return-suggestions", cities);
    });


    document.querySelectorAll('.input-box input').forEach(input => {
  input.addEventListener('input', () => {
    const icon = input.previousElementSibling;
    if (input.value.trim() !== '') {
      icon.style.display = 'none';
    } else {
      icon.style.display = 'inline-block';
    }
  });
});


//testimonials
const containers = document.querySelectorAll('.sec10-items');

  containers.forEach(container => {
    const contentDiv = container.querySelector('.sec10-i1-1');
    const imgDiv = container.querySelector('.sec10-i1-2');

    if(imgDiv && contentDiv) {
      imgDiv.addEventListener('click', () => {
        if(contentDiv.style.display === 'none' || contentDiv.style.display === '') {
          contentDiv.style.display = 'block';
        } else {
          contentDiv.style.display = 'none';
        }
      });
    }
  });

//faq
const heads = document.querySelectorAll('.sec12-items-head');
const bodies = document.querySelectorAll('.sec12-items-body');

heads.forEach((head, index) => {
  head.addEventListener('click', () => {
    bodies[index].classList.toggle('show');
    head.classList.toggle('rotate');
  });
});


//drop-down
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const targetId = button.getAttribute('data-target');
    const dropdownContent = document.getElementById(targetId);
    dropdownContent.classList.toggle('show');
  });
});



//cardsclick and navigation
function storeCarAndNavigate(card) {
    const imgElement = card.querySelector('.s5-i1-1 img');
    const imgSrc = imgElement ? imgElement.src : '';

    const name = card.querySelector('.s5-i1-2')?.innerText || '';
    const price = card.querySelector('.s5-i1-3')?.innerText || '';

    const details = [];
    card.querySelectorAll('.s5-i1-4-1').forEach((feature) => {
        details.push(feature.innerText.trim());
    });

    const rating = card.querySelector('.s5-i1-5-1')?.innerText || '';

    const selectedCar = {
        image: imgSrc,
        name: name,
        price: price,
        details: details,
        rating: rating
    };
    localStorage.setItem('car-rental-selectedcar', JSON.stringify(selectedCar));
    const confirmRent = confirm('Are you sure you want to rent this car?');
    if (confirmRent) {
        window.location.href = './Html/booking.html';
    }
}
const carCards = document.querySelectorAll('.sec5-items');

carCards.forEach((card) => {
    card.addEventListener('click', () => storeCarAndNavigate(card));
    const rentBtn = card.querySelector('.s5-i1-5-2 a');
    if (rentBtn) {
        rentBtn.addEventListener('click', (e) => {
            e.preventDefault();
            storeCarAndNavigate(card);
        });
    }
});


//pageurl's
const carItems = document.querySelectorAll('.sec4-items');
const pageUrls = {
    "Saloon": "./Html/SaloonCars.html",
    "Suv": "./Html/pickupCars.html",
    "Van": "./Html/Vancars.html",
    "Pickup": "./Html/pickupCars.html",
    "Sports": "./Html/Sports.html",
    "Off Road": "./Html/offRoadcars.html",
    "Hatchback": "./Html/offRoadcars.html",
    "Roaster": "./Html/Sports.html"
};

// Attach click events
carItems.forEach(item => {
    const carName = item.querySelector('.sec4-item2').textContent.trim();
    item.addEventListener('click', () => {
        const url = pageUrls[carName];
        if (url) {
            window.location.href = url; 
        }
    });
    item.style.cursor = 'pointer';
});


// Select all brand items
const brandItems = document.querySelectorAll('.sec3-items');
const brandPages = {
    "Brand1": "./Html/SaloonCars.html",
    "Brand2": "./Html/pickupCars.html",
    "Brand3": "./Html/Vancars.html",
    "Brand4": "./Html/Sports.html",
    "Brand5": "./Html/offRoadcars.html"
};
brandItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const pageUrl = Object.values(brandPages)[index]; 
        if (pageUrl) {
            window.location.href = pageUrl;
        }
    });
    item.style.cursor = 'pointer';
});



//footer
document.querySelector("footer .foot-row1 > div:nth-child(1)").style.cursor = "pointer";
document.querySelector("footer .foot-row1 > div:nth-child(1)").onclick = function() {
    window.location.href = "./Html/Contact.html";
};

document.querySelector("footer .foot-row1 > div:nth-child(3)").style.cursor = "pointer";
document.querySelector("footer .foot-row1 > div:nth-child(3)").onclick = function() {
    window.location.href = "./Html/about.html";
};