document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.fa-cart-plus');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  
  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const row = e.target.closest('.table-body');
      const name = row.querySelector('.table-body-item').textContent.trim();
      const qtyText = row.querySelector('.item2 > div:nth-child(2)').textContent.trim();
      const rate = parseFloat(row.children[2].textContent.trim());
      const tax = parseFloat(row.children[3].textContent.trim());
      const qtyNum = parseInt(qtyText) || 1;

      const existingIndex = cart.findIndex(item => item.name === name);
      if (existingIndex !== -1) {
        cart[existingIndex].qty += qtyNum;
      } else {
        cart.push({ name, qty: qtyNum, rate, tax });
      }
      saveCart();
      alert(`${name} added to cart!`);
    });
  });

  document.querySelectorAll('.btn-increase').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const row = e.target.closest('.table-body');
      const qtyDiv = row.querySelector('.item2 > div:nth-child(2)');
      let qty = parseInt(qtyDiv.textContent);
      qty++;
      qtyDiv.textContent = qty;
    });
  });

  document.querySelectorAll('.btn-decrease').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const row = e.target.closest('.table-body');
      const qtyDiv = row.querySelector('.item2 > div:nth-child(2)');
      let qty = parseInt(qtyDiv.textContent);
      if (qty > 1) {
        qty--;
        qtyDiv.textContent = qty;
      }
    });
  });

  document.querySelector('.next').addEventListener('click', () => {
    window.location.href = '../index.html';  
  });
});
