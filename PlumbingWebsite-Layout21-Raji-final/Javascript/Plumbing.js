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



const login = document.getElementById('login');
login.addEventListener('click',function(){
    window.location.href='../Html/Login.html'
})

const home = document.getElementById('home');
home.addEventListener('click',function(){
    window.location.href='../index.html'
})