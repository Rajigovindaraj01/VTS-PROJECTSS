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



document.querySelectorAll('.wishlist-icon').forEach((icon,index)=>{
    icon.addEventListener('click',function(){
        this.classList.remove('fa-regular');
        this.classList.add('fa-solid');
        this.style.color = 'red';

        const card = this.closest('.cards');
        const imageSrc = card.querySelector('img').src;
        const title = card.querySelector('.product-title').textContent;
        const price = card.querySelector('.product-price').textContent;

        const wishlistItem = {image: imageSrc,title,price};

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        const alreadyAdded = wishlist.some(item=>item.title===title);
        if(!alreadyAdded){
            wishlist.push(wishlistItem);
            localStorage.setItem('wishlist',JSON.stringify(wishlist));
            alert('Added to Wishlist')
        } 
        else{
            alert('Alread in wishlist')
        }
    })
})


document.querySelectorAll('.cards').forEach(card => {
    card.addEventListener('click', function () {
        window.location.href = '../Pages/product1.html'; 
    });
});