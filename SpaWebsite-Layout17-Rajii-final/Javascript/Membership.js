document.querySelectorAll(".section3").forEach(section => {
    section.querySelector(".become").addEventListener("click", () => {
        let img = section.querySelector("img").getAttribute("src");
        let name = section.querySelector("h2").innerText;
        let price = section.querySelector("h1").innerText;
        let services = section.querySelectorAll("p")[0].innerText;
        let validity = section.querySelectorAll("p")[1].innerText;
        let membername = section.querySelector('.become').innerText;

        let membership = {
            image: img,
            name: name,
            price: price,
            services: services,
            validity: validity,
            membername:membername
        };

        localStorage.setItem("spa-membership-selected", JSON.stringify(membership));
        window.location.href = "../Html/Memberdescrip.html";
    });
});