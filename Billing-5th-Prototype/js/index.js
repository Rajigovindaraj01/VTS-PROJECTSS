const cartItemsContainer = document.getElementById("cart-items-container");

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let customer = JSON.parse(localStorage.getItem('customer')) || null;

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart(items) {
  cartItemsContainer.innerHTML = "";

  if (items.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  items.forEach((product, index) => {
    const amount = (product.rate * product.qty) + product.tax;

    const row = document.createElement("div");
    row.classList.add("table-body");
    row.dataset.index = index;

    row.innerHTML = `
      <div class="table-body-item">${product.name}</div>
      <div class="table-body-item item2">
        <button class="btn-decrease">-</button>
        <div class="quantity">${product.qty}</div>
        <button class="btn-increase">+</button>
      </div>
      <div class="table-body-item">${product.rate.toFixed(2)}</div>
      <div class="table-body-item">${product.tax.toFixed(2)}</div>
      <div class="table-body-item">${amount.toFixed(2)}</div>
    `;

    cartItemsContainer.appendChild(row);
  });

  cartItemsContainer.querySelectorAll(".btn-increase").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest(".table-body");
      const index = parseInt(row.dataset.index);
      cart[index].qty++;
      saveCart();
      renderCart(cart);
    });
  });

  cartItemsContainer.querySelectorAll(".btn-decrease").forEach((btn) => {
    btn.addEventListener("click", () => {
      const row = btn.closest(".table-body");
      const index = parseInt(row.dataset.index);
      cart[index].qty--;
      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }
      saveCart();
      renderCart(cart);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.querySelector('input[type="text"]');
  const addressInput = document.querySelectorAll('input[type="text"]')[1];
  const numberInput = document.querySelector('input[type="number"]');
  const dateInput = document.querySelector('input[type="date"]');
  const editBtn = document.querySelector('.fa-user-pen').closest('button');
  const deleteBtn = document.querySelector('.fa-trash').closest('button');
  const searchInput = document.querySelector('input[type="search"]');

  if (customer) {
    nameInput.value = customer.name;
    addressInput.value = customer.address;
    numberInput.value = customer.number;
    dateInput.value = customer.date;
  }

  editBtn.addEventListener('click', () => {
    const newCustomer = {
      name: nameInput.value.trim(),
      address: addressInput.value.trim(),
      number: numberInput.value.trim(),
      date: dateInput.value.trim()
    };

    if (!newCustomer.name || !newCustomer.address || !newCustomer.number || !newCustomer.date) {
      alert("Fill all customer details before saving.");
      return;
    }

    localStorage.setItem('customer', JSON.stringify(newCustomer));
    alert("Customer details updated!");
  });

  deleteBtn.addEventListener('click', () => {
    localStorage.removeItem('customer');
    nameInput.value = "";
    addressInput.value = "";
    numberInput.value = "";
    dateInput.value = "";
    alert("Customer details deleted!");
  });

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    const filtered = cart.filter(item =>
      item.name.toLowerCase().includes(query)
    );
    renderCart(filtered);
  });

  renderCart(cart);
});

document.querySelector('.next-button').addEventListener('click', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = 0;
  let tax = 0;

  cart.forEach(item => {
    total += item.rate * item.qty;
    tax += item.tax;
  });

  const roundOff = Math.round(total + tax) - (total + tax);

  const billData = {
    total: total.toFixed(2),
    tax: tax.toFixed(2),
    roundOff: roundOff.toFixed(2),
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    billNo: Math.floor(100000 + Math.random() * 900000)
  };

  sessionStorage.setItem('billData', JSON.stringify(billData));
  window.location.href = '../pages/payment-summary.html';
});
