 // Retrieve the order data from localStorage
        const orderData = JSON.parse(localStorage.getItem("ecommerce-selected-product"));

        if (orderData) {
            // Set Order Number (assuming you stored it as orderData.orderNumber)
            document.getElementById("order-number").textContent = orderData.orderNumber || "123456";

            // Display product image
            const imageDiv = document.querySelector(".product-image");
            imageDiv.innerHTML = `<img src="${orderData.img}" alt="${orderData.name}" style="width:100px;height:100px;">`;

            // Display product name
            document.querySelector(".product-name").textContent = orderData.name;

            // Display product price
            document.querySelector(".product-price").textContent = `Price: ${orderData.price}`;

            // Display total price (if multiple items, sum them; for single product just show its price)
            document.querySelector(".total-price").textContent = `Total: ${orderData.price}`;
        } else {
            document.querySelector(".order-summary").innerHTML = "<h2>No order data found!</h2>";
        }