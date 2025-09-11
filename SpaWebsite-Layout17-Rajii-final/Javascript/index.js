const book = document.getElementById('book');
book.addEventListener('click',function(){
    window.location.href='./Html/Reservationbook.html'
})





//search
const searchBox = document.getElementById("searchBox");
  const section5 = document.querySelector(".section5");
  const services = document.querySelectorAll(".section5 > div");

  searchBox.addEventListener("input", () => {
    const query = searchBox.value.trim().toLowerCase();

    if (query) {
      section5.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    let matchFound = false;

    services.forEach(service => {
      const text = service.querySelector(".sec5-2").textContent.toLowerCase();

      if (text.includes(query)) {
        service.style.display = "block";
        service.style.border = "2px solid #9747FF";
        service.style.boxShadow = "0 0 10px #9747FF";
        service.style.borderRadius = '20px';
        matchFound = true;
      } else {
        service.style.display = "none";
        service.style.border = "none";
        service.style.boxShadow = "none";
      }
    });

    if (!matchFound && query !== "") {
      services.forEach(service => (service.style.display = "none"));
    }
    if (query === "") {
      services.forEach(service => {
        service.style.display = "block";
        service.style.border = "none";
        service.style.boxShadow = "none";
      });
    }
  });



//subscription
 document.querySelectorAll(".sec8-5").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.textContent = "Subscribed ✅"; 
      btn.style.background = "green";   
      btn.style.color = "white";
    });
  });