document.getElementById("reservationForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const guests = document.getElementById("guests").value.trim();

      if (name && phone && email && guests) {
        alert("Reservation successful!\nName: " + name + "\nPhone: " + phone + "\nEmail: " + email + "\nGuests: " + guests);
      } else {
        alert("Please fill all fields correctly.");
      }
    });