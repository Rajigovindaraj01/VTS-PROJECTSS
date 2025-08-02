
  // dropdowns
  document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdowns');
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', () => {
        const dropdownList = dropdown.nextElementSibling;
        if (dropdownList && dropdownList.classList.contains('dropdown-list')) {
          dropdownList.classList.toggle('show');
        }
      });
    });
  });

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



//searching
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('.tour-search input[type="search"]');
    const checkboxes = document.querySelectorAll('.dropdown-list input[type="checkbox"]');
    const tourCards = document.querySelectorAll('.to-sec-col2-items');

    function filterCards() {
        const searchText = searchInput.value.toLowerCase();

        const selectedActivities = [];
        const selectedDifficulties = [];
        const selectedDestinations = [];

        checkboxes.forEach(cb => {
            if (cb.checked) {
                const label = cb.parentElement.textContent.trim().toLowerCase();
                const section = cb.closest('.dropdown-list').previousElementSibling.querySelector('div').textContent.toLowerCase();

                if (section.includes('activity')) selectedActivities.push(label);
                if (section.includes('difficult')) selectedDifficulties.push(label);
                if (section.includes('destination')) selectedDestinations.push(label);
            }
        });

        tourCards.forEach(card => {
            const text = card.textContent.toLowerCase();

            const matchSearch = text.includes(searchText);
            const matchActivity = selectedActivities.length === 0 || selectedActivities.some(a => text.includes(a));
            const matchDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.some(d => text.includes(d));
            const matchDestination = selectedDestinations.length === 0 || selectedDestinations.some(dest => text.includes(dest));

            if (matchSearch && matchActivity && matchDifficulty && matchDestination) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterCards);
    checkboxes.forEach(cb => cb.addEventListener('change', filterCards));
});


//navigation for collections
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



//navigation for bookings
const navMap = {
    nav1: '../html/hut3.html',
    nav2: '../html/hut3.html',
    nav3: '../html/hut3.html',
    nav4: '../html/hut3.html',
    nav5: '../html/hut3.html',
    nav6: '../html/hut3.html'
  };
  Object.keys(navMap).forEach(navId => {
    const element = document.getElementById(navId);
    if (element) {
      element.addEventListener('click', () => {
        window.location.href = navMap[navId];
      });
    }
  });