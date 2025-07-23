//for drop-downs

const dropdownTitle=document.getElementById("dropdownTitle");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownTitle.addEventListener("click",()=>{
    dropdownMenu.classList.toggle("active");
})

const dropdownTitle2=document.getElementById("dropdownTitle2");
const dropdownMenu2 = document.getElementById("dropdownMenu2");

dropdownTitle2.addEventListener("click",()=>{
    dropdownMenu2.classList.toggle("active");
})

const dropdownTitle3=document.getElementById("dropdownTitle3");
const dropdownMenu3 = document.getElementById("dropdownMenu3");

dropdownTitle3.addEventListener("click",()=>{
    dropdownMenu3.classList.toggle("active");
})
const dropdownTitle4=document.getElementById("dropdownTitle4");
const dropdownMenu4 = document.getElementById("dropdownMenu4");

dropdownTitle4.addEventListener("click",()=>{
    dropdownMenu4.classList.toggle("active");
})










const container = document.getElementById('wishlist-container');
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

wishlist.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'cards';

    card.innerHTML = `
        <div class="cards1">
            <img src="${item.image}" alt="${item.title}">
        </div>
        <div>
            <h3 class="product-title">${item.title}</h3>
        </div>
        <div>
            <h3 class="product-price" style="color: brown;">${item.price}</h3>
        </div>
        <div class="wishlist">
            <i class="fa-solid fa-heart wishlist-icon" style="color: red; padding: 5px; border-radius: 50%; cursor: pointer;"></i>
        </div>
    `;

    const heartIcon = card.querySelector('.wishlist-icon');
    heartIcon.addEventListener('click', () => {
        wishlist.splice(index, 1);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        card.remove();
        alert("Product removed from wishlist");
    });

    container.appendChild(card);
});
