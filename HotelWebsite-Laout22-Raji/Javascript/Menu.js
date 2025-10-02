let cart = JSON.parse(localStorage.getItem('hotel-cart')) || [];

document.querySelectorAll('.sec3-items').forEach(item => {
    const addBtn = item.querySelector('.add');
    const quantityControls = item.querySelector('.quantity-controls');
    const minusBtn = item.querySelector('.minus');
    const plusBtn = item.querySelector('.plus');
    const qtySpan = item.querySelector('.qty');
    const addToCartBtn = item.querySelector('.addtocart');

    let qty = 1;
    addBtn.addEventListener('click', () => {
        addBtn.style.display = 'none';
        quantityControls.style.display = 'flex';
    });

    minusBtn.addEventListener('click', () => {
        if (qty > 1) qty--;
        qtySpan.textContent = qty;
    });


    plusBtn.addEventListener('click', () => {
        qty++;
        qtySpan.textContent = qty;
    });

    addToCartBtn.addEventListener('click', () => {
        const itemData = {
            name: item.querySelector('h1').textContent,
            price: Number(item.querySelector('.price').textContent.replace('₹','').trim()),
            img: item.querySelector('img').src,
            description: item.querySelector('p').textContent,
            quantity: qty
        };

        const existingIndex = cart.findIndex(c => c.name === itemData.name);
        if(existingIndex > -1){
            cart[existingIndex].quantity += qty;
        } else {
            cart.push(itemData);
        }

        localStorage.setItem('hotel-cart', JSON.stringify(cart));

        alert(`${itemData.name} added to cart! Quantity: ${qty}`);
        qty = 1;
        qtySpan.textContent = qty;
        quantityControls.style.display = 'none';
        addBtn.style.display = 'block';
        window.location.href='../Html/Cart.html';
    });
});