document.addEventListener("DOMContentLoaded", () => {
  const bikeData = JSON.parse(localStorage.getItem("selectedBike"));

  if (bikeData) {
    document.querySelector(".bike-img").src = bikeData.img || "";
    document.querySelector(".bike-title").innerText = bikeData.title || "";
    document.querySelector(".bike-descrip").innerText = bikeData.details || "";
    document.querySelector(".location").innerText = bikeData.location || "";
    document.querySelector(".bike-price").innerText = bikeData.price || "";
  } else {
    alert("No bike selected!");
  }
});



const bikeData = JSON.parse(localStorage.getItem("selectedBike"));

if (bikeData) {
  // split pannudhu
  const parts = bikeData.title.split("|").map(p => p.trim());

  const year = parts[0] || "";
  const brandModel = parts[1] || "";
  const cc = parts[2] || "";
  const variant = parts[3] || "";

  // details split pannudhu
  const detailsParts = bikeData.details.split(".").map(p => p.trim());
  const km = detailsParts[0] || "";
  const fuel = detailsParts[1] || "";
  const owner = detailsParts[2] || "";

  // assign pannudhu
  document.querySelector(".bike-year").innerText = year;
  document.querySelector(".bike-brand-model").innerText = brandModel;
  document.querySelector(".bike-cc").innerText = cc;
  document.querySelector(".bike-variant").innerText = variant;

  document.querySelector(".bike-km").innerText = km;
  document.querySelector(".bike-fuel").innerText = fuel;
  document.querySelector(".bike-owner").innerText = owner;

  document.querySelector(".bike-location").innerText = bikeData.location;
  document.querySelector(".bike-price").innerText = bikeData.price;
  document.querySelector(".bike-img").src = bikeData.img;
}


const buynowbtn = document.getElementsByClassName('buynow')[0];

if (buynowbtn) {
  buynowbtn.addEventListener('click', () => {
    window.location.href = '../Html/Payment.html';
  });
}