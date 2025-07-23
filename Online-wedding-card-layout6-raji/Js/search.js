 //for drop-downs

const dropdownTitle=document.getElementById("dropdownTitle");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownTitle.addEventListener("click",()=>{
    dropdownMenu.classList.toggle("active");
})

const dropdownTitle2=document.getElementById("dropdownTitle2");
const dropdownMenu2 = document.getElementById("dropdownMenu2");

dropdownTitle2.addEventListener("click",()=>{
    dropdownMenu2.classList.toggle("active");
})

const dropdownTitle3=document.getElementById("dropdownTitle3");
const dropdownMenu3 = document.getElementById("dropdownMenu3");

dropdownTitle3.addEventListener("click",()=>{
    dropdownMenu3.classList.toggle("active");
})
const dropdownTitle4=document.getElementById("dropdownTitle4");
const dropdownMenu4 = document.getElementById("dropdownMenu4");

dropdownTitle4.addEventListener("click",()=>{
    dropdownMenu4.classList.toggle("active");
})
 const ideasData = [
      { image: "../Assets/Images/Premium Vector _ Indian wedding invitation card template design.jpg", title: "Hindu wedding Card" },
      { image: "../Assets/Images/download__10_-removebg-preview.png", title: "Simple wedding Card" },
      { image: "../Assets/Images/Emerald_Green_Gold_Floral_Anand_Karaj_Sikh_Wedding____ShabzDesigns-removebg-preview.png", title: "Muslim wedding Card" },
      { image: "../Assets/Images/download.jpeg", title: "Scroll wedding Card" },
      { image: "../Assets/Images/Doli_Themed_Book_Style_Semi_Box_Dulah_Dulhan_Themed_Flower_Themed_Hindu_Wedding_Sikh_Wedding_Padded_Wedding_invitation_Cards_-_EJ3003-removebg-preview.png", title: "Luxury wedding Card" },
    ];

    const popularData = [
      { image: "../Assets/Images/download__13_-removebg-preview.png", title: "Post Theme Wedding Card" },
      { image: "../Assets/Images/download.jpeg", title: "Scroll Wedding Card" },
      { image: "../Assets/Images/Wedding_card_design_in_red_satin_cloth-removebg-preview.png", title: "Theme Wedding Card" },
      { image: "../Assets/Images/Watercolor_Arabian_Lattice_Arch_Muslim_Wedding_Invitation-removebg-preview.png", title: "Customize Wedding Card" },
      { image: "../Assets/Images/pngtree-elegant-peacock-wedding-invitation-card-design-image_16972921.jpg", title: "Laser Wedding Card" },
      { image: "../Assets/Images/Ganesha_Invitation__Hindu_Wedding_Invitation___Indian_Wedding__sri_Lankan_Wedding___Tamil_Invitation__Lavender_Lilac_Purle_-_Etsy_UK-removebg-preview.png", title: "Hindu Wedding Card" },
    ];

    function createCard({ image, title }) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${image}" alt="${title}" />
        <div class="card-content">${title}</div>
      `;
      return card;
    }

    function renderCards(dataArray, containerId) {
      const container = document.getElementById(containerId);
      container.innerHTML = "";
      dataArray.forEach(data => {
        container.appendChild(createCard(data));
      });
    }

    renderCards(ideasData, "ideas");
    renderCards(popularData, "popular");

    document.getElementById("searchInput").addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const filteredIdeas = ideasData.filter(item => item.title.toLowerCase().includes(query));
      const filteredPopular = popularData.filter(item => item.title.toLowerCase().includes(query));
      renderCards(filteredIdeas, "ideas");
      renderCards(filteredPopular, "popular");
    });