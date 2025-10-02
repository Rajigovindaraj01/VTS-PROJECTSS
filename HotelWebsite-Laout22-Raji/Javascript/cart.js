// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('hotel-cart')) || [];

// DOM elements
const cartItemsDiv = document.getElementById('cart-items');
const totalPriceSpan = document.getElementById('total-price');
const popup = document.getElementById('popup');
const popupCart = document.getElementById('popup-cart');

// Render cart items
function renderCart(){
    cartItemsDiv.innerHTML = '';
    let total = 0;
    if(cart.length === 0){
        cartItemsDiv.innerHTML = '<p style="text-align:center;">Your cart is empty.</p>';
    }
    cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
            <div class="cart-item-qty">Qty: ${item.quantity}</div>
            <div class="cart-item-price">₹${item.price * item.quantity}</div>
        `;
        cartItemsDiv.appendChild(div);
    });
    totalPriceSpan.textContent = total;
}

renderCart();

document.getElementById('cancel').addEventListener('click', ()=>{
    if(confirm('Do you want to cancel the order?')){
        cart = [];
        localStorage.setItem('hotel-cart', JSON.stringify(cart));
        window.location.href = "../Html/Menu.html";
    }
});

document.getElementById('proceed').addEventListener('click', ()=>{
    if(cart.length === 0){
        alert('Your cart is empty!');
        return;
    }
    popup.style.display = 'flex';
    popupCart.innerHTML = '';
    cart.forEach(item=>{
        const div = document.createElement('div');
        div.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;
        popupCart.appendChild(div);
    });
});


document.getElementById('popup-cancel').addEventListener('click', ()=>{
    popup.style.display = 'none';
});


document.getElementById('popup-confirm').addEventListener('click', ()=>{
    alert('Order confirmed! Thank you for shopping.');
    cart = [];
    localStorage.setItem('hotel-cart', JSON.stringify(cart));
    popup.style.display = 'none';
    window.location.href = "../index.html";
});
