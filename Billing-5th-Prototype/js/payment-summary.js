    const billData = JSON.parse(sessionStorage.getItem('billData'));

    if (!billData) {
        alert("No bill data found. Please go back and generate the bill.");
    } else {
        document.getElementById('billNo').textContent = billData.billNo;
        document.getElementById('date').textContent = billData.date;
        document.getElementById('time').textContent = billData.time;
        document.getElementById('total').textContent = `$${billData.total}`;
        document.getElementById('tax').textContent = `$${billData.tax}`;
        document.getElementById('roundOff').textContent = `$${billData.roundOff}`;
        const grandTotal = (parseFloat(billData.total) + parseFloat(billData.tax) + parseFloat(billData.roundOff)).toFixed(2);
        document.getElementById('grandTotal').textContent = `$${grandTotal}`;
        document.querySelector('.collected strong').textContent = grandTotal;
        document.querySelector('.received-box input').value = grandTotal;
    }

    document.querySelector('.btn.pay').addEventListener('click', () => {
  const customer = JSON.parse(localStorage.getItem('customer')) || null;
  const billData = JSON.parse(sessionStorage.getItem('billData')) || null;

  if (!customer || !billData) {
    alert("Missing customer or bill information!");
    return;
  }

  const orderId = "ORD" + Math.floor(100000 + Math.random() * 900000);

  const completedData = {
    customer,
    billData,
    orderId
  };

  sessionStorage.setItem('completedOrder', JSON.stringify(completedData));
  window.location.href = "../pages/completed.html";
});
