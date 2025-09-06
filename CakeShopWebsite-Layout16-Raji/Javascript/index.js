//searchfunctionality
const searchInput = document.getElementById("searchInput")
const items = document.querySelectorAll(".sec3-items")

searchInput.addEventListener('keyup', function(){
    const filter = searchInput.value.toLowerCase();

items.forEach(item=>{
    const text = item.querySelector(".sec3-item2").textContent.toLowerCase();
    if(text.includes(filter)){
        item.style.display= "";
    }
    else{
        item.style.display="none";
    }
})
})




//localstorage-storing
const itemss = document.querySelectorAll('.sec3-items');

itemss.forEach(ite => {
    ite.addEventListener('click', () => {
        const name = ite.querySelector(".sec3-item2").textContent;
        const price = ite.dataset.price;
        const image = ite.querySelector("img").src;

        const selectedCakeItem = { name, price, image };
        localStorage.setItem("selectedCakeItems", JSON.stringify([selectedCakeItem]));

        alert(`${name} stored successfully!`);
        window.location.href = "./Html/ProductDesc.html";
    });
});



//navi-to-anotherpage
const navi = document.querySelectorAll('.sec6-items');
navi.forEach(navigation=>{
    navigation.addEventListener('click',()=>{
        window.location.href='';
    })
})

//display cart total
function updateCartCount() {
    let storedCartieees = JSON.parse(localStorage.getItem("selectedCart")) || [];
    document.getElementById("cart-count").textContent = storedCartieees.length;
}
updateCartCount();




const redirect = document.querySelectorAll('.sec6-items')
redirect.forEach((redir=>{
    redir.addEventListener('click',function(){
        window.location.href='./Html/SpecialCakes.html'
    })
}))