const dropdownTitle = document.getElementById("dropdownTitle");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownTitle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
})

const dropdownTitle1 = document.getElementById("dropdownTitle1");
const dropdownMenu1 = document.getElementById("dropdownMenu1");

dropdownTitle1.addEventListener("click", () => {
    dropdownMenu1.classList.toggle("active");
})


document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.querySelector(".c2 input");
    const subjectInput = document.querySelector(".c3 input");
    const descriptionInput = document.querySelector(".c4 input");
    const submitBtn = document.querySelector(".c7-1 a");
    const captchaBox = document.querySelector(".c6-1");

    let isCaptchaChecked = false;
    captchaBox.addEventListener("click", () => {
        isCaptchaChecked = !isCaptchaChecked;
        captchaBox.innerHTML = isCaptchaChecked ? "✅" : "";
        captchaBox.style.border = isCaptchaChecked
            ? "2px solid rgb(126, 207, 50)"
            : "1px solid rgb(126, 207, 50)";
    });
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (!isCaptchaChecked) {
            alert("Please verify you're not a robot.");
            return;
        }

        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const description = descriptionInput.value.trim();

        if (!email || !subject || !description) {
            alert("Please fill all fields marked with *");
            return;
        }
        const ticket = {
            email,
            subject,
            description,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem("ticketData", JSON.stringify(ticket));
        alert("Ticket submitted and saved to localStorage!");

        emailInput.value = "";
        subjectInput.value = "";
        descriptionInput.value = "";
        captchaBox.innerHTML = "";
        isCaptchaChecked = false;
    });
});