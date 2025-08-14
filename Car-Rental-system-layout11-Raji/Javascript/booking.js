//drop-down
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    const targetId = button.getAttribute('data-target');
    const dropdownContent = document.getElementById(targetId);
    dropdownContent.classList.toggle('show');
  });
});


//retrieve from localstorage
  const selectedCar = JSON.parse(localStorage.getItem('car-rental-selectedcar'));

  if (selectedCar) {
    document.querySelector('.col1-name').innerText = selectedCar.name;

    document.querySelector('.col1-image2').innerText = '';
    const imgEl = document.createElement('img');
    imgEl.src = selectedCar.image;
    document.querySelector('.col1-image2').appendChild(imgEl);

    const specDescs = document.querySelectorAll('.col2-grids-items .desc');
    if (selectedCar.details.length >= 4) {
      specDescs[0].innerText = selectedCar.details[1];
      specDescs[1].innerText = selectedCar.details[3];
      specDescs[2].innerText = '4';
      specDescs[3].innerText = 'Yes';
      specDescs[4].innerText = selectedCar.details[2]; 
      specDescs[5].innerText = selectedCar.details[0]; 
    }
    document.querySelector('.col2-rating').innerText = selectedCar.rating;
    document.querySelector('.col2-price').innerText = selectedCar.price;

    const btn = document.querySelector('.buttonss');
    btn.addEventListener('click', () => {
    window.location.href = '../Html/payment.html';
});
}

//other cars
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