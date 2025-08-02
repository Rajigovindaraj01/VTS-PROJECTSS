document.getElementById('continueBtn').addEventListener('click', function () {
  const email = document.getElementById('mail').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    window.location.href = "../index.html";
  } else {
    alert("Please enter both email and password.");
  }
});