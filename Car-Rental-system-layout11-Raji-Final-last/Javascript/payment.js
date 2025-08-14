//drop-down
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const targetId = button.getAttribute('data-target');
    const dropdownContent = document.getElementById(targetId);
    dropdownContent.classList.toggle('show');
  });
});

//retrieval
// Retrieve the selected car from localStorage
const selectedCar = JSON.parse(localStorage.getItem('car-rental-selectedcar'));

if (selectedCar) {
  const storedImageDiv = document.querySelector('.col1-image2');
if (storedImageDiv) {
  storedImageDiv.innerHTML = `<img src="${selectedCar.image}" alt="${selectedCar.name}" />`;
}
  const carNameElem = document.querySelector('.c2-1 div:nth-child(1)');
  const carPriceElem = document.querySelector('.c2-1 div:nth-child(2)');
  if (carNameElem) carNameElem.innerText = selectedCar.name;
  if (carPriceElem) carPriceElem.innerText = selectedCar.price;


  const specDescs = document.querySelectorAll('.col2-grids-items .desc');

if (selectedCar.details.length >= 4) {
  specDescs[0].innerText = selectedCar.details[1];
  specDescs[1].innerText = selectedCar.details[3];
  specDescs[2].innerText = '4';                    
  specDescs[3].innerText = 'Yes';                  
  specDescs[4].innerText = selectedCar.details[2];
  specDescs[5].innerText = selectedCar.details[0];
}
  const gst = 400;
  const priceNumber = parseInt(selectedCar.price.replace(/[^0-9]/g, ''));
  const total = priceNumber + gst;

  const totalElem = document.querySelector('.c2-3 div:nth-child(2)');
  if (totalElem) totalElem.innerText = `₹${total}`;
}
///storing
const contactInput = document.querySelector('.sec2-col1 .col1-item:nth-child(1) input');
const addressInput = document.querySelector('.sec2-col1 .col1-item:nth-child(2) input');
const paymentOptions = document.querySelectorAll('.c2-4 .c1-img1 img');
const confirmBtn = document.querySelector('.c1-8');
const carImage = document.querySelector('.col1-image2');
const carNameElem = document.querySelector('.c2-1 div:nth-child(1)');
const carPriceElem = document.querySelector('.c2-1 div:nth-child(2)');
const specDescs = document.querySelectorAll('.col2-grids-items .desc');
const totalElem = document.querySelector('.c2-3 div:nth-child(2)');

let selectedPayment = null;
paymentOptions.forEach((img) => {
  img.addEventListener('click', () => {
    paymentOptions.forEach((i) => i.style.backgroundColor = '');
    img.style.backgroundColor = '#d1e7dd';
    selectedPayment = img.getAttribute('src');
  });
});
confirmBtn.addEventListener('click', () => {
  const contact = contactInput.value.trim();
  const address = addressInput.value.trim();

  if (!contact) {
    alert('Please enter contact details');
    return;
  }
  if (!address) {
    alert('Please enter delivery address');
    return;
  }
  if (!selectedPayment) {
    alert('Please select a payment method');
    return;
  }
  const carDetails = {
    image: carImage.querySelector('img') ? carImage.querySelector('img').src : '',
    name: carNameElem ? carNameElem.innerText : '',
    price: carPriceElem ? carPriceElem.innerText : '',
    specs: Array.from(specDescs).map(desc => desc.innerText),
    total: totalElem ? totalElem.innerText : ''
  };
  const bookingData = {
    user: {
      contact: contact,
      address: address,
      paymentMethod: selectedPayment
    },
    car: carDetails
  };
  localStorage.setItem('car-rental-user-detail', JSON.stringify(bookingData));
  alert('Booking Confirmed!');
  window.location.href = '../Html/Confirmation.html';
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