document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector(".c3");

    submitBtn.addEventListener("click", () => {
        const name = document.querySelector(".c1 input").value.trim();
        const email = document.querySelectorAll(".c2 input")[0].value.trim();
        const password = document.querySelectorAll(".c2 input")[1].value.trim();
        const mobile = document.querySelectorAll(".c2 input")[2].value.trim();
        if (!name || !email || !password || !mobile) {
            alert("Please fill all fields.");
            return;
        }
        const userData = {
            name,
            email,
            password,
            mobile,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem("signupData", JSON.stringify(userData));
        alert("Signup Successful");
        window.location.href = "../index.html";
    });
});
