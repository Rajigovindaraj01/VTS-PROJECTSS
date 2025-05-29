const data = JSON.parse(sessionStorage.getItem('completedOrder'));

if (data) {
  document.getElementById('orderId').innerText = data.orderId;
  document.getElementById('customerName').innerText = data.customer.name;
  document.getElementById('customerPhone').innerText = data.customer.number;
  document.getElementById('customerEmail').innerText = data.customer.email || "Not Provided";
} else {
  document.body.innerHTML = "<h2>Something went wrong. No data available.</h2>";
}

function downloadInvoice() {
  window.open('invoice.html', '_blank');
}
