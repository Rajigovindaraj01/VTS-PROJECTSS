    const menuToggle = document.getElementById("menu-toggle");
    const sideNav = document.getElementById("side-nav");

    menuToggle.addEventListener("click", () => {
        sideNav.classList.toggle("active");
    })


    const calendarDates = document.getElementById("calendarDates");
    const monthYear = document.getElementById("monthYear");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentDate = new Date();

    function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const today = new Date();

      monthYear.textContent = date.toLocaleString("default", { month: "long" }) + " " + year;
      calendarDates.innerHTML = "";

      const firstDay = new Date(year, month, 1).getDay();
      const totalDays = new Date(year, month + 1, 0).getDate();

      for (let i = 0; i < firstDay; i++) {
        calendarDates.innerHTML += `<div></div>`;
      }

      for (let i = 1; i <= totalDays; i++) {
        const day = new Date(year, month, i);
        const isToday =
          day.getDate() === today.getDate() &&
          day.getMonth() === today.getMonth() &&
          day.getFullYear() === today.getFullYear();

        calendarDates.innerHTML += `<div class="${isToday ? "today" : ""}">${i}</div>`;
      }
    }

    prevBtn.onclick = () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    };

    nextBtn.onclick = () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    };

    let touchStartX = 0;
    let touchEndX = 0;
    document.getElementById("calendarContainer").addEventListener("touchstart", e => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.getElementById("calendarContainer").addEventListener("touchend", e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    function handleSwipe() {
      if (touchEndX < touchStartX - 30) {
        nextBtn.click();
      }
      if (touchEndX > touchStartX + 30) {
        prevBtn.click();
      }
    }

    renderCalendar(currentDate);