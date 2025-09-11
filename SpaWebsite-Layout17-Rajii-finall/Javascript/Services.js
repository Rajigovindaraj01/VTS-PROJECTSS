
const spaItems = document.querySelectorAll(".sec1-items");

spaItems.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img").getAttribute("src"); 
    const name = item.querySelector(".sec1-2").textContent;
    localStorage.setItem("spa-selected", JSON.stringify({ img, name }));
    window.location.href = "../Html/SelectedSpa.html";  
  });
});





// subscribe button
document.querySelectorAll(".sec8-5").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = "Subscribed ✅"; 
    btn.style.background = "green";   
    btn.style.color = "white";
  });
});
