
    const tabs = document.querySelectorAll(".tab");
    const forms = document.querySelectorAll(".form");

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        forms.forEach(f => f.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab + "Form").classList.add("active");
      });
    });

    document.getElementById("signupForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signupName").value.trim();
      const phone = document.getElementById("signupPhone").value.trim();
      const password = document.getElementById("signupPassword").value.trim();
      const pic = document.getElementById("signupPic").value.trim();
      const errorDiv = document.getElementById("signupError");

      if (!name || !phone || !password || !pic) {
        errorDiv.textContent = "All fields are required!";
        return;
      }
      if (!/^[0-9]{10}$/.test(phone)) {
        errorDiv.textContent = "Enter a valid 10-digit phone number!";
        return;
      }
      if (password.length < 6) {
        errorDiv.textContent = "Password must be at least 6 characters!";
        return;
      }
      if (!/^https?:\/\//.test(pic)) {
        errorDiv.textContent = "Enter a valid profile pic URL!";
        return;
      }

      const user = { username: name, phone, password, pic };
      localStorage.setItem("spa-user-detail", JSON.stringify(user));

      errorDiv.style.color = "green";
      errorDiv.textContent = "Signup successful!";
    });

    document.getElementById("loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      const errorDiv = document.getElementById("loginError");

      const savedUser = JSON.parse(localStorage.getItem("spa-user-detail"));

      if (savedUser && savedUser.username === username && savedUser.password === password) {
        errorDiv.style.color = "green";
        errorDiv.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
          window.location.href = "../Html/userDashboard.html";
        }, 1000);
      } else {
        errorDiv.textContent = "Invalid username or password!";
      }
    });