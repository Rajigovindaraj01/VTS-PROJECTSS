const itemss = document.querySelectorAll(".sec1-items");

  itemss.forEach(itemo => {
    itemo.addEventListener("click", () => {
      const img = itemo.querySelector("img").getAttribute("src"); 
      const name = itemo.querySelector(".sec1-2").textContent;
      localStorage.setItem("spa-selected", JSON.stringify({ img, name }));
      window.location.href = "../Html/SelectedSpa.html"; 
    });
  });


//search
 const searchBox = document.getElementById("searchBox");
  const section1 = document.querySelector(".section1");
  const items = document.querySelectorAll(".section1-content-container .sec1-items");


  const noResultsMsg = document.createElement("div");
  noResultsMsg.textContent = "No results found!";
  noResultsMsg.style.textAlign = "center";
  noResultsMsg.style.fontSize = "20px";
  noResultsMsg.style.color = "red";
  noResultsMsg.style.marginTop = "20px";
  noResultsMsg.style.display = "none";
  section1.appendChild(noResultsMsg);

  searchBox.addEventListener("input", () => {
    const query = searchBox.value.trim().toLowerCase();

    if (query) {
      section1.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    let matchFound = false;

    items.forEach(item => {
      const text = item.querySelector(".sec1-2").textContent.toLowerCase();

      if (text.includes(query)) {
        item.style.display = "block";
        item.style.border = "2px solid #9747FF"; 
        item.style.boxShadow = "0 0 10px #9747FF";
        item.style.borderRadius = "20px";
        matchFound = true;
      } else {
        item.style.display = "none";
        item.style.border = "none";
        item.style.boxShadow = "none";
      }
    });


    if (!matchFound && query !== "") {
      noResultsMsg.style.display = "block";
    } else {
      noResultsMsg.style.display = "none";
    }

    if (query === "") {
      items.forEach(item => {
        item.style.display = "block";
        item.style.border = "none";
        item.style.boxShadow = "none";
      });
      noResultsMsg.style.display = "none";
    }
  });



 document.querySelectorAll(".sec8-5").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.textContent = "Subscribed ✅"; 
      btn.style.background = "green";   
      btn.style.color = "white";
    });
  });