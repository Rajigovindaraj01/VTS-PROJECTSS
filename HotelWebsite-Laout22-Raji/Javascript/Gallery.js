const filterButtons = document.querySelectorAll(".sec2-1 div");
const items = document.querySelectorAll(".sec2-2items");
const noImages = document.getElementById("no-images");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");
        let visibleCount = 0;

        items.forEach(item => {
            if (filter === "all" || item.getAttribute("data-category") === filter) {
                item.style.display = "block";
                visibleCount++;
            } else {
                item.style.display = "none";
            }
        });

        if (visibleCount === 0) {
            noImages.style.display = "block";
        } else {
            noImages.style.display = "none";
        }
    });
});
