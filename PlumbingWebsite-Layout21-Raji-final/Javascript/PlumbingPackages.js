const plum = document.getElementById('plumbing');
const plumOver = document.getElementById('plum-over');

plum.addEventListener('click',function(){
    plumOver.style.display='block';
})
document.addEventListener('keypress',function(){
    plumOver.style.display='none';
})



const drains = document.getElementById('drains');
const drainsOver = document.getElementById('drains-over');

drains.addEventListener('click',function(){
    drainsOver.style.display='block';
})
document.addEventListener('keypress',function(){
    drainsOver.style.display='none';
})


const commercial = document.getElementById('commercial');
const commercialOver = document.getElementById('commercial-over');

commercial.addEventListener('click',function(){
    commercialOver.style.display='block';
})
document.addEventListener('keypress',function(){
    commercialOver.style.display='none';
})




//view-details

const viewdetails = document.querySelectorAll('.view-details');
const viewdetailsoverlay = document.getElementById('view-details-overlay');

viewdetails.forEach((button) => {
  button.addEventListener('click', function() {
    viewdetailsoverlay.style.display = 'block';
  });
});
document.addEventListener('keypress',function(){
    viewdetailsoverlay.style.display='none';
})









//plumbing-details
document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.querySelector('input[placeholder="City"]');
  const stateInput = document.querySelector('input[placeholder="State"]');
  const pincodeInput = document.querySelector('input[placeholder="Pincode"]');

  const plumbersInCity = document.querySelector(".sec1-col1 h2:nth-of-type(2)");

  [cityInput, stateInput, pincodeInput].forEach(input => {
    input.addEventListener("input", () => {
      let city = cityInput.value.trim();
      plumbersInCity.textContent = `Plumbers in ${city || "City"}`;
    });
  });

  let cart = JSON.parse(localStorage.getItem("selected-plumbing")) || [];

  const packageNameDiv = document.querySelector(".package-name");
  const packagePriceDiv = document.querySelector(".package-price");
  const qtyDiv = document.querySelector(".sec1-col2-1-2 div:nth-child(2)");
  const minusBtn = document.querySelector(".sec1-col2-1-2 .minus");
  const plusBtn = document.querySelector(".sec1-col2-1-2 .plus");

  function updateCartUI() {
    if (cart.length === 0) {
      packageNameDiv.textContent = "";
      packagePriceDiv.textContent = "";
      qtyDiv.textContent = "0";
    } else {
      let item = cart[0];
      packageNameDiv.textContent = item.title;
      packagePriceDiv.textContent = "₹ " + (item.price * item.qty);
      qtyDiv.textContent = item.qty;
    }
    localStorage.setItem("selected-plumbing", JSON.stringify(cart));
  }

  minusBtn.addEventListener("click", () => {
    if (cart.length > 0) {
      cart[0].qty--;
      if (cart[0].qty <= 0) {
        let id = cart[0].id;
        cart = [];
        const addBtn = document.querySelector(`.add[data-id='${id}']`);
        if (addBtn) {
          addBtn.textContent = "ADD";
          addBtn.classList.remove("quantity-controls");
        }
      }
      updateCartUI();
    }
  });

  plusBtn.addEventListener("click", () => {
    if (cart.length > 0) {
      cart[0].qty++;
      updateCartUI();
    }
  });

 
  document.querySelectorAll(".sec2-col1").forEach((serviceDiv, index) => {
    const title = serviceDiv.querySelector("h3").textContent;
    const priceText = serviceDiv.querySelector("strong").textContent.replace("₹", "").trim();
    const price = parseInt(priceText);
    const imgSrc = serviceDiv.querySelector("img").getAttribute("src");

    const addBtn = serviceDiv.querySelector(".add");
    addBtn.setAttribute("data-id", index + 1);

    let service = { id: index + 1, title, price, img: imgSrc, qty: 0 };

    let exist = cart.find(item => item.id === service.id);
    if (exist) {
      service = exist;
      renderQuantityControls(addBtn, service);
    } else {
      addBtn.addEventListener("click", () => {
        service.qty = 1;
        cart = [service]; 
        renderQuantityControls(addBtn, service);
        updateCartUI();
      });
    }
  });

  function renderQuantityControls(addBtn, service) {
    addBtn.innerHTML = `
      <div class="minus">-</div>
      <div>${service.qty}</div>
      <div class="plus">+</div>
    `;
    addBtn.classList.add("quantity-controls");

    const minusBtn = addBtn.querySelector(".minus");
    const plusBtn = addBtn.querySelector(".plus");
    const qtySpan = addBtn.querySelector("div:nth-child(2)");

    minusBtn.addEventListener("click", () => {
      service.qty--;
      if (service.qty <= 0) {
        cart = [];
        addBtn.textContent = "ADD";
        addBtn.classList.remove("quantity-controls");
        updateCartUI();
        return;
      }
      qtySpan.textContent = service.qty;
      updateCartUI();
    });

    plusBtn.addEventListener("click", () => {
      service.qty++;
      qtySpan.textContent = service.qty;
      updateCartUI();
    });
  }

  updateCartUI();
});

























//view-details
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("view-details-overlay");
  const overlayName = overlay.querySelector(".name");
  const overlayPriceSpan = overlay.querySelector(".price span");
  const overlayAddBtn = overlay.querySelector(".adddddd");

  let cart = JSON.parse(localStorage.getItem("selected-plumbing")) || [];

  function updateCartUI() {
    const packageNameDiv = document.querySelector(".package-name");
    const packagePriceDiv = document.querySelector(".package-price");
    const qtyDiv = document.querySelector(".sec1-col2-1-2 div:nth-child(2)");

    if (cart.length === 0) {
      packageNameDiv.textContent = "";
      packagePriceDiv.textContent = "";
      qtyDiv.textContent = "0";
    } else {
      let item = cart[0];
      packageNameDiv.textContent = item.title;
      packagePriceDiv.textContent = "₹ " + item.price * item.qty;
      qtyDiv.textContent = item.qty;
    }
    localStorage.setItem("selected-plumbing", JSON.stringify(cart));
  }


  function overlayAddToCart(service, addBtnOverlay) {
    service.qty = 1;
    cart = [service];
    renderQuantityControlsOverlay(addBtnOverlay, service);
    updateCartUI();
  }

  function renderQuantityControlsOverlay(addBtnOverlay, service) {
    addBtnOverlay.innerHTML = `<div class="minus">-</div><div>${service.qty}</div><div class="plus">+</div>`;
    addBtnOverlay.classList.add("quantity-controls");

    const minusBtn = addBtnOverlay.querySelector(".minus");
    const plusBtn = addBtnOverlay.querySelector(".plus");
    const qtySpan = addBtnOverlay.querySelector("div:nth-child(2)");

    minusBtn.onclick = () => {
      service.qty--;
      if (service.qty <= 0) {
        cart = [];
        addBtnOverlay.textContent = "ADD";
        addBtnOverlay.classList.remove("quantity-controls");
      } else {
        qtySpan.textContent = service.qty;
      }
      updateCartUI();
    };

    plusBtn.onclick = () => {
      service.qty++;
      qtySpan.textContent = service.qty;
      updateCartUI();
    };
  }

  document.querySelectorAll(".view-details").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const serviceDiv = btn.closest(".sec2-col1");
      const title = serviceDiv.querySelector("h3").textContent;
      const priceText = serviceDiv.querySelector("strong").textContent.replace("₹", "").trim();
      const imgSrc = serviceDiv.querySelector("img").src;

      overlayName.textContent = title;
      overlayPriceSpan.textContent = priceText;

      overlay.style.display = "block";

      const service = {
        id: index + 1,
        title: title,
        price: parseInt(priceText),
        img: imgSrc,
        qty: 0
      };

      overlayAddBtn.onclick = () => overlayAddToCart(service, overlayAddBtn);
    });
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.style.display = "none";
  });

  updateCartUI();
});














const viewcart = document.getElementById('view-cart');
viewcart.addEventListener('click',function(){
    window.location.href='../Html/Checkout.html';
})



const home = document.getElementById('home');
home.addEventListener('click',function(){
    window.location.href='../index.html'
})