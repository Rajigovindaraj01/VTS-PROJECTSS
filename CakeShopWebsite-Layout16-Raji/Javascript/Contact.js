//add-to-cart
function updateCartCount() {
    let storedCartieees = JSON.parse(localStorage.getItem("selectedCart")) || [];
    document.getElementById("cart-count").textContent = storedCartieees.length;
}
updateCartCount();






const submit = document.getElementById('sub')
submit.addEventListener('click',function(){
    alert('Message Sent,get back to you soon')
})