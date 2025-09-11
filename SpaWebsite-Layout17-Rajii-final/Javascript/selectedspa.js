const selected = JSON.parse(localStorage.getItem("spa-selected"));

  if (selected) {
    const container = document.getElementById("service-detail");
    const imgTag = container.querySelector("img");
    const nameTag = container.querySelector("h1");

    imgTag.src = selected.img;
    imgTag.alt = selected.name;
    nameTag.textContent = selected.name;
  }


const booknav = document.getElementById('booking')
booknav.addEventListener('click',function(){
    window.location.href='../Html/Reservationbook.html'
})