
//cart-count
document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-count");
  if (cartIcon) {
    let cart = JSON.parse(localStorage.getItem("tshirt-cart")) || [];
    cartIcon.innerText = cart.length;
  }
});



//selectedlogo

  const items = document.querySelectorAll('.sec1-items img');

  items.forEach((img) => {
    img.addEventListener('click', () => {
      const imgSrc = img.src;
      localStorage.setItem('tshirt-selected-logo', imgSrc);

      alert('logo selected');
      window.location.href = '../Html/tshirtDescription.html';
    });
  });