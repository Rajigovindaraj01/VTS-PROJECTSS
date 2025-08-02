// for section3
const buttons = document.querySelectorAll(".section-row1 div");
const contents = document.querySelectorAll(".section3-row2");

function showTab(index) {
  contents.forEach(c => c.style.display = "none");
  buttons.forEach(btn => btn.classList.remove("active-btn"));
  contents[index].style.display = "grid";
  buttons[index].classList.add("active-btn");
}
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    showTab(index);
  });
});
showTab(0);



//navigation
const pageLinks = {
    "europe": "../html/Collection1.html",
    "asia": "../html/tour.html",
    "africa": "../html/Collection2.html",
    "south-america": "../html/Collection1.html",
    "north-america": "../html/Collection1.html",
    "oceania": "../html/Collection2.html",
    "hiking": "../html/hut-to-hut-hiking.html",
    "cycling": "../html/hut2.html",
    "rafting": "../html/hut-to-hut-hiking.html",
    "snorkeiling": "../html/hut2.html",
    "wild-swim": "../html/hut-to-hut-hiking.html",
    "northernlights": "../html/hut2.html",
    "new-advent": "../html/hut-to-hut-hiking.html",
    "winter-sun": "../html/hut-to-hut-hiking.html",
    "Desserts": "../html/hut3.html",
    "Foodie": "../html/hut-to-hut-hiking.html",
    "jungle": "../html/hut3.html",
    "islands": "../html/hut3.html"
  };
  Object.keys(pageLinks).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.cursor = "pointer";
      element.addEventListener("click", () => {
        window.location.href = pageLinks[id];
      });
    }
  });





//navigation-section
const pageNavigation = {
    navigation1: '../html/hut-to-hut-hiking.html',
    navigation2: '../html/hut3.html',
    navigation3: '../html/hut2.html',
    navigation4: '../html/tour.html'
  };
  Object.keys(pageNavigation).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.cursor = 'pointer';
      element.addEventListener('click', () => {
        window.location.href = pageNavigation[id];
      });
    }
  });