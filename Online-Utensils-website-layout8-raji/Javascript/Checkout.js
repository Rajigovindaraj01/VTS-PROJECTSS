document.addEventListener("DOMContentLoaded", function () {
    const productData = JSON.parse(localStorage.getItem("productsSelected"));

    if (!productData) {
      alert("No product found in cart. Please select a product first.");
      return;
    }
    const summaryItems = document.querySelectorAll(".check-col2-3");

    summaryItems[0].children[1].textContent = productData.productName;
    summaryItems[1].children[1].textContent = productData.selectedQuantity;
    summaryItems[2].children[1].textContent = `Rs.${productData.selectedPrice}`;
    summaryItems[3].children[1].textContent = `Rs.${productData.selectedPrice}`;
    summaryItems[5].children[1].textContent = "Free";

    const total = productData.totalPrice - 15;
    summaryItems[6].children[1].textContent = `Rs.${total}`;
  });



//for checkout
document.getElementById("placeOrderBtn").addEventListener("click", function () {
    const billingDetails = {
        firstName: document.getElementById("billingFName").value,
        lastName: document.getElementById("billingLName").value,
        address: document.getElementById("billingAddress").value,
        phone: document.getElementById("billingPhone").value,
        email: document.getElementById("billingEmail").value,
    };

    const shippingDetails = {
        firstName: document.getElementById("shippingFName").value,
        lastName: document.getElementById("shippingLName").value,
        address: document.getElementById("shippingAddress").value,
        phone: document.getElementById("shippingPhone").value,
        email: document.getElementById("shippingEmail").value,
    };
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const checkoutData = {
        billingDetails: billingDetails,
        shippingDetails: shippingDetails,
        paymentMethod: paymentMethod
    };
    localStorage.setItem("utensilsCheckoutDetails", JSON.stringify(checkoutData));
    window.location.href = "../Pages/OrderConfirmation.html";
    alert("Saved User Details Successfully")
});



//for viewcart
document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cart-display");
    const cartContainer = document.querySelector(".cart-container");
    cartIcon?.addEventListener("click", function (e) {
      e.preventDefault();
      cartContainer.style.display = "block";

      const cartData = JSON.parse(localStorage.getItem("utensils-cart")) || [];
      const cartBody = document.getElementById("cartBody");
      const itemCount = document.getElementById("itemCount");
      const subTotalEl = document.getElementById("subTotal");
      const gstEl = document.getElementById("gst");
      const totalEl = document.getElementById("total");
      cartBody.innerHTML = "";

      let subtotal = 0;

      cartData.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td><img src="${item.productImage}" class="product-img" alt="Product"/> ${item.productName}</td>
          <td>Rs.${item.selectedPrice}</td>
          <td>${item.selectedQuantity}</td>
          <td>Rs.${item.totalPrice}</td>
          <td class="remove" onclick="removeItem(${index})">✖</td>
        `;
        cartBody.appendChild(row);
        subtotal += item.totalPrice;
      });

      const gst = Math.round(subtotal * 0.18);
      const total = subtotal + gst;

      itemCount.innerText = cartData.length;
      subTotalEl.innerText = `Rs.${subtotal}`;
      gstEl.innerText = `Rs.${gst}`;
      totalEl.innerText = `Rs.${total}`;
    });
    window.removeItem = function (index) {
      const cartData = JSON.parse(localStorage.getItem("utensils-cart")) || [];
      cartData.splice(index, 1);
      localStorage.setItem("utensils-cart", JSON.stringify(cartData));
      location.reload();
    };
  });



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