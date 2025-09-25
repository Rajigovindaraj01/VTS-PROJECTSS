const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.head3');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuToggle.classList.toggle('toggle');
});






//cart-display

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("pet-cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}
updateCartCount();



//dropdown
const dog = document.getElementById('dog');
const dog1 = document.getElementById('dog1');

dog.addEventListener('click', function(event) {
  event.stopPropagation(); 
  dog1.style.display = dog1.style.display === 'grid' ? 'none' : 'grid';
});

// close dropdown when clicking outside
document.addEventListener('click', function() {
  dog1.style.display = 'none';
});




const cat = document.getElementById('cat');
const cat1 = document.getElementById('cat1');

// Toggle dropdown visibility
cat.addEventListener('click', function(event) {
  event.stopPropagation();
  cat1.style.display = cat1.style.display === 'grid' ? 'none' : 'grid';
});
document.addEventListener('click', function() {
  cat1.style.display = 'none';
});



const smallpets = document.getElementById('small-pets');
const smallpets1 = document.getElementById('small-pets1');
smallpets.addEventListener('click', function(event) {
  event.stopPropagation();
  smallpets1.style.display = smallpets1.style.display === 'grid' ? 'none' : 'grid';
});
document.addEventListener('click', function() {
  smallpets1.style.display = 'none';
});


const petservice = document.getElementById('petservice');
const petservice1 = document.getElementById('petservice-1');
petservice.addEventListener('click', function(event) {
  event.stopPropagation();
  petservice1.style.display = petservice1.style.display === 'grid' ? 'none' : 'grid';
});
document.addEventListener('click', function() {
  petservice1.style.display = 'none';
});



const brand = document.getElementById('brand');
const brand1 = document.getElementById('brand1');
brand.addEventListener('click', function(event) {
  event.stopPropagation();
  brand1.style.display = brand1.style.display === 'grid' ? 'none' : 'grid';
});
document.addEventListener('click', function() {
  brand1.style.display = 'none';
});




const breed = document.getElementById('breed');
const breed1 = document.getElementById('breed1');
breed.addEventListener('click', function(event) {
  event.stopPropagation();
  breed1.style.display = breed1.style.display === 'grid' ? 'none' : 'grid';
});
document.addEventListener('click', function() {
  breed1.style.display = 'none';
});













//automatic change
let slides = document.querySelectorAll(".section1 .content");
let index = 0;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (idx === i) slide.classList.add("active");
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

showSlide(index); 
setInterval(nextSlide, 2000);

















//horizontal scroll
const container = document.querySelector('.sec2-cont-container');
const rightArrow = document.querySelector('.angle-right-icon');
const leftArrow = document.querySelector('.angle-left-icon');

rightArrow.addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
  setTimeout(() => toggleArrows(), 300);
});

leftArrow.addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
  setTimeout(() => toggleArrows(), 300);
});

function toggleArrows() {
  // Show/hide left arrow
  if (container.scrollLeft > 0) {
    leftArrow.style.display = 'block';
  } else {
    leftArrow.style.display = 'none';
  }

  // Show/hide right arrow
  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    rightArrow.style.display = 'none';
  } else {
    rightArrow.style.display = 'block';
  }
}

// Optional: update arrows on manual scroll (drag/scrollbar)
container.addEventListener('scroll', toggleArrows);

// Initial check
toggleArrows();













//second-scroll
const container1 = document.querySelector('.sec3-cont-col2');
const rightArrow1 = document.querySelector('.angle-right-icon1');
const leftArrow1 = document.querySelector('.angle-left-icon1');

const scrollAmount = 300;

// Right arrow click
rightArrow1.addEventListener('click', () => {
  container1.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  setTimeout(toggleArrows1, 300); 
});

// Left arrow click
leftArrow1.addEventListener('click', () => {
  container1.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  setTimeout(toggleArrows1, 300);
});

// Toggle arrow visibility
function toggleArrows1() {
  leftArrow1.style.display = container1.scrollLeft > 0 ? 'block' : 'none';
  rightArrow1.style.display = (container1.scrollLeft + container1.clientWidth >= container1.scrollWidth) ? 'none' : 'block';
}

container1.addEventListener('scroll', toggleArrows1);
toggleArrows1();






















