
const now = new Date();
document.getElementById("order-date").innerText = now.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'short'
});

document.getElementById("order-time").innerText = now.toLocaleTimeString([], {
  hour: 'numeric',
  minute: '2-digit'
});
const product = JSON.parse(localStorage.getItem("mybag"));

if (product) {
  const name = product.sku?.replace("SKU Code: ", "") || "Product";
  const qty = product.quantity || 1;
  const price = parseFloat(product.price.replace("Rs.", "").trim()) * qty;

  document.getElementById("product-name").innerText = name;
  document.getElementById("product-qty").innerText = qty;
  document.getElementById("product-price").innerText = `Rs. ${price.toFixed(2)}`;
  document.getElementById("total-price").innerText = `Rs. ${price.toFixed(2)}`;
} else {
  document.getElementById("product-name").innerText = "No product";
  document.getElementById("product-qty").innerText = "-";
  document.getElementById("product-price").innerText = "Rs. 0.00";
  document.getElementById("total-price").innerText = "Rs. 0.00";
}

 document.getElementById('pay-btn').addEventListener('click', () => {
    const checkoutDetails = {
      date: document.getElementById('order-date').innerText,
      time: document.getElementById('order-time').innerText,
      productName: document.getElementById('product-name').innerText,
      quantity: document.getElementById('product-qty').innerText,
      compliment: 'Hold Bag',
      coupon: 'MAR0057',
      subtotal: document.getElementById('product-price').innerText.replace('Rs. ', ''),
      shipping: '0.00',
      total: document.getElementById('total-price').innerText.replace('Rs. ', '')
    };

    localStorage.setItem('checkout-details', JSON.stringify(checkoutDetails));
    alert('Checkout details saved successfully in localStorage!');
    window.location.href = "../Pages/orderConfirmation.html";
  });
