  const ranges = document.querySelectorAll('.price-range');
  const quantityDisplay = document.getElementById('quantityValue');
  const priceDisplay = document.getElementById('priceValue');
  const totalDisplay = document.getElementById('totalPrice');

  let selectedQty = 0;
  let selectedPrice = 0;

  ranges.forEach(range => {
    range.addEventListener('click', () => {
      ranges.forEach(r => r.classList.remove('selected'));
      range.classList.add('selected');

      const quantityRange = range.getAttribute('data-range');
      selectedPrice = parseInt(range.getAttribute('data-price'));
      selectedQty = 20;
      if (quantityRange.includes('-')) {
        selectedQty = parseInt(quantityRange.split('-')[0]);
      } else if (quantityRange.includes('+')) {
        selectedQty = parseInt(quantityRange);
      }

      quantityDisplay.textContent = selectedQty;
      priceDisplay.textContent = `Rs.${selectedPrice}`;
      totalDisplay.textContent = `Rs.${selectedQty * selectedPrice}`;
    });
  });

  
  const buyNowBtn = document.querySelector('.z10-buynow');
  buyNowBtn.addEventListener('click', () => {
    const productName = document.getElementById('productName').textContent;
    const productImage = document.getElementById('productImage').getAttribute('src');
    const total = selectedQty * selectedPrice;

    if (selectedQty === 0 || selectedPrice === 0) {
      alert('Please select a price range first.');
      return;
    }

    const productData = {
      productName,
      productImage,
      selectedQuantity: selectedQty,
      selectedPrice,
      totalPrice: total
    };

    localStorage.setItem('productsSelected', JSON.stringify(productData));
    window.location.href = "../Pages/Checkout.html";
    alert('Product saved successfully!');
  });







document.querySelector('.z10-addtocart').addEventListener('click', function () {
  const productName = document.getElementById('productName').innerText;
  const productImage = document.getElementById('productImage').getAttribute('src');
  const quantity = parseInt(document.getElementById('quantityValue').innerText);
  const pricePerUnit = parseInt(document.getElementById('priceValue').innerText.replace("Rs.", ""));
  const totalPrice = pricePerUnit * quantity;

  const selectedProducts = {
    productName,
    productImage,
    selectedPrice: pricePerUnit,
    selectedQuantity: quantity,
    totalPrice
  };
  let cartItems = JSON.parse(localStorage.getItem("utensils-cart")) || [];
  cartItems.push(selectedProducts);
  localStorage.setItem("utensils-cart", JSON.stringify(cartItems));
  document.querySelector('.cart-container').style.display = 'block';
});





document.getElementById('cart-display').addEventListener('click',function(){
    document.querySelector('.cart-container').style.display = 'block';
})






//login
 document.getElementById('Userprofile').addEventListener('click', () => {
      document.getElementById('loginBox').style.display = 'block';
    });
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const formHeading = document.getElementById('formHeading');

    loginTab.addEventListener('click', () => {
      loginTab.classList.add('active-tab');
      registerTab.classList.remove('active-tab');
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
      formHeading.innerText = 'Welcome! Login to get amazing discounts and offers for bulk order.';
    });

    registerTab.addEventListener('click', () => {
      registerTab.classList.add('active-tab');
      loginTab.classList.remove('active-tab');
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
      formHeading.innerText = 'Welcome! Register to get amazing discounts and offers for bulk order.';
    });

    // Register functionality
    document.getElementById("registerBtn").addEventListener("click", () => {
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const termsAccepted = document.getElementById("terms").checked;

      if (!fullName || !email || !mobile || !password || !confirmPassword) {
        alert("Please fill out all required fields.");
        return;
      }

      if (!termsAccepted) {
        alert("You must accept the terms and conditions.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const userDetails = {
        fullName,
        email,
        mobile,
        password,
      };

      localStorage.setItem("utensils-userinfo", JSON.stringify(userDetails));
      alert("Stored Successfully!");
      window.location.href = "../index.html";
    });

    // Login functionality
    document.getElementById("loginBtn").addEventListener("click", () => {
      const loginUsername = document.getElementById("loginUsername").value.trim();
      const loginPassword = document.getElementById("loginPassword").value;

      if (!loginUsername || !loginPassword) {
        alert("Please enter both username and password.");
        return;
      }

      const storedData = JSON.parse(localStorage.getItem("utensils-userinfo"));

      if (!storedData) {
        alert("New user? Just register!");
        return;
      }

      if ((loginUsername === storedData.email || loginUsername === storedData.mobile) &&
          loginPassword === storedData.password) {
        alert("Login Successful!");
        window.location.href = "../index.html";
      } else {
        alert("Incorrect Credentials.");
      }
    });