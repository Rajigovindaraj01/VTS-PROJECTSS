document.addEventListener("DOMContentLoaded", () => {
  const heads = document.querySelectorAll(".sec2-over2-head");
  const selections = {};
  const resultBox = document.getElementById("result-box");
  heads.forEach((head) => {
    head.addEventListener("click", () => {
      const body = head.nextElementSibling;

      if (body && body.classList.contains("sec2-over2-body")) {
        document.querySelectorAll(".sec2-over2-body").forEach((b) => {
          if (b !== body) b.style.display = "none";
        });
        body.style.display = body.style.display === "block" ? "none" : "block";
      }
    });
  });

  // option select click
  document.querySelectorAll(".sec2-over2-body div").forEach((option) => {
    option.addEventListener("click", () => {
      const parent = option.closest(".sec2-over2-body");
      parent.querySelectorAll("div").forEach((div) =>
        div.classList.remove("selected")
      );
      option.classList.add("selected");

      const key = parent.previousElementSibling.textContent.trim();
      selections[key] = option.textContent.trim();
    });
  });

  document.querySelectorAll(".sec2-over2-body input").forEach((input) => {
    input.addEventListener("input", () => {
      const parent = input.closest(".sec2-over2-body");
      const key = parent.previousElementSibling.textContent.trim();
      selections[key] = input.value.trim();
    });
  });
  document.querySelector(".get-price").addEventListener("click", () => {
    const price = Math.floor(Math.random() * (100000 - 20000) + 20000);

    resultBox.style.display = "block";
    resultBox.innerHTML = `
      <div><b>Your Details:</b></div>
      <pre>${JSON.stringify(selections, null, 2)}</pre>
      <div style="margin-top:10px; font-size:22px; color:green;">
        Estimated Price: ₹${price}
      </div>
    `;
  });
});
