//drop-down
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const targetId = button.getAttribute('data-target');
    const dropdownContent = document.getElementById(targetId);
    dropdownContent.classList.toggle('show');
  });
});

//accordion
document.querySelectorAll('.col1-head').forEach(head => {
    head.addEventListener('click', () => {
        const body = head.nextElementSibling;
        const btn = head.querySelector('.toggle-btn');

        body.classList.toggle('show');
        btn.textContent = body.classList.contains('show') ? '-' : '+';
    });
});

//range
const rangeInput = document.getElementById('priceRange');
const currentValue = document.getElementById('currentValue');

rangeInput.addEventListener('input', () => {
    currentValue.textContent = rangeInput.value;
});


//search-functions
document.querySelector('.apply-btn').addEventListener('click', function () {
    let rentalType = document.querySelector('input[name="rentalType"]:checked')?.parentNode.textContent.trim() || '';
    let fuelTypes = [...document.querySelectorAll('.col1-item:nth-child(3) input:checked')].map(el => el.parentNode.textContent.trim());
    let carYears = [...document.querySelectorAll('.col1-item:nth-child(4) input:checked')].map(el => el.parentNode.textContent.trim());
    let transmission = document.querySelector('input[name="transmission"]:checked')?.parentNode.textContent.trim() || '';
    let bodyStyles = [...document.querySelectorAll('.col1-item:nth-child(6) input:checked')].map(el => el.parentNode.textContent.trim());
    let maxPrice = document.getElementById('priceRange').value;
    let brands = [...document.querySelectorAll('.col1-item:nth-child(9) input:checked')].map(el => el.parentNode.textContent.trim());

    let cars = document.querySelectorAll('.sec5-items');
    let anyMatch = false;

    cars.forEach(car => {
        let name = car.querySelector('.s5-i1-2').textContent.trim();
        let price = parseInt(car.querySelector('.s5-i1-3').textContent.replace(/[^0-9]/g, ''));
        let fuel = car.querySelector('.fa-gas-pump').parentNode.nextElementSibling.textContent.trim();
        let trans = car.querySelector('.fa-network-wired').parentNode.nextElementSibling.textContent.trim();
        let yearMatch = car.querySelector('.s5-i1-2').textContent.match(/\b(20\d{2})\b/);
        let year = yearMatch ? yearMatch[0] : '';
        let body = ""; 

        let matches = true;

        if (rentalType && !name.toLowerCase().includes(rentalType.toLowerCase())) matches = false;
        if (fuelTypes.length && !fuelTypes.includes(fuel)) matches = false;
        if (carYears.length && !carYears.includes(year)) matches = false;
        if (transmission && trans !== transmission) matches = false;
        if (bodyStyles.length && !bodyStyles.includes(body)) matches = false;
        if (brands.length && !brands.some(b => name.toLowerCase().includes(b.toLowerCase()))) matches = false;
        if (price > maxPrice) matches = false;

        if (matches) {
            car.style.display = "block";
            anyMatch = true;
        } else {
            car.style.display = "none";
        }
    });

    let noResultDiv = document.getElementById("noResults");
    if (!anyMatch) {
        if (!noResultDiv) {
            noResultDiv = document.createElement("div");
            noResultDiv.id = "noResults";
            noResultDiv.textContent = "No results found";
            noResultDiv.style.textAlign = "center";
            noResultDiv.style.padding = "10px";
            noResultDiv.style.fontWeight = "bold";
            document.querySelector('.sec2-col2').appendChild(noResultDiv);
        }
    } else {
        if (noResultDiv) noResultDiv.remove();
    }
});


//cardsclick and navigation
  function storeCarAndNavigate(card) {
    const imgSrc = card.querySelector('.s5-i1-1 img').getAttribute('src');
    const name = card.querySelector('.s5-i1-2').innerText;
    const price = card.querySelector('.s5-i1-3').innerText;

    const details = [];
    card.querySelectorAll('.s5-i1-4-1').forEach((feature) => {
      details.push(feature.innerText.trim());
    });

    const rating = card.querySelector('.s5-i1-5-1').innerText;

    const selectedCar = {
      image: imgSrc,
      name: name,
      price: price,
      details: details,
      rating: rating
    };

    localStorage.setItem('car-rental-selectedcar', JSON.stringify(selectedCar));
    window.location.href = '../Html/booking.html'; 
    alert('Are you confirm with this car....')
  }

  const carCards = document.querySelectorAll('.sec5-items');

  carCards.forEach((card) => {
    card.addEventListener('click', () => {
      storeCarAndNavigate(card);
    });
    const rentBtn = card.querySelector('.s5-i1-5-2 a');
    rentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      storeCarAndNavigate(card);
    });
  });


  //footer
document.querySelector("footer .foot-row1 > div:nth-child(1)").style.cursor = "pointer";
document.querySelector("footer .foot-row1 > div:nth-child(1)").onclick = function() {
    window.location.href = "../Html/Contact.html";
};

document.querySelector("footer .foot-row1 > div:nth-child(3)").style.cursor = "pointer";
document.querySelector("footer .foot-row1 > div:nth-child(3)").onclick = function() {
    window.location.href = "../Html/about.html";
};