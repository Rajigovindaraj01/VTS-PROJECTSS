document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("togglePassword");
  const eyeIcon = document.getElementById("eyeIcon");
  const loginBtn = document.getElementById("loginBtn");
  const passwordInput = document.getElementById("password");

  toggleBtn.addEventListener("click", () => {
    const isVisible = passwordInput.type === "text";
    passwordInput.type = isVisible ? "password" : "text";
    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
  });

  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length !== 8) {
      alert("Password must be exactly 8 characters long.");
      return;
    }
    window.location.href = "../pages/home.html";
  });
});
