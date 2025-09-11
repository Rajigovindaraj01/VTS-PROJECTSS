
  const tabs = {
    "tab-reservation": document.querySelector(".reservation-detail-container"),
    "tab-spaease": document.querySelector(".spaease-container"),
    "tab-cancel": document.querySelector(".cancellation-container"),
    "tab-logout": document.querySelector(".Logout-container"),
  };

  function showTab(tabId) {
    Object.values(tabs).forEach((container) => {
      container.style.display = "none";
    });
    tabs[tabId].style.display = "block";
  }

  Object.keys(tabs).forEach((tabId) => {
    document.getElementById(tabId).addEventListener("click", () => {
      showTab(tabId);
    });
  });

  showTab("tab-reservation");


  const booking = JSON.parse(localStorage.getItem("spa-booking-detail"));

  if (booking) {

    document.querySelector(".reservation-detail-container .name").textContent = booking.name;
    document.querySelector(".reservation-detail-container .number").textContent = booking.number;
    document.querySelector(".reservation-detail-container .service").textContent = booking.service;
    document.querySelector(".reservation-detail-container .date").textContent = booking.date;
    document.querySelector(".reservation-detail-container .time").textContent = booking.time;
    document.querySelector(".reservation-detail-container .therapist").textContent = booking.therapist;
    document.querySelector(".reservation-detail-container .id").textContent = booking.bookingId;
  } else {
    document.querySelector(".reservation-detail-container").innerHTML = "<p>No reservation found!</p>";
  }







//for login
// for login dashboard display
const user = JSON.parse(localStorage.getItem("spa-user-detail"));

if (user) {
  const imgTag = document.getElementById("profilePic");

  document.querySelector(".sec1-col1-profile-bar .name-1").textContent = user.username;
  document.querySelector(".sec1-col1-profile-bar .number-1").textContent = user.phone;

  imgTag.src = user.pic;
}







//cancel reserve
document.querySelector(".cancel").addEventListener("click", () => {
  const cancelName = document.querySelector(".cancel-row1-1 input[placeholder='Enter Your Name']").value.trim();
  const cancelNumber = document.querySelector(".cancel-row1-1 input[type='number']").value.trim();
  const cancelBookingId = document.querySelector(".cancel-row1-1 input[placeholder='Enter Booking ID']").value.trim();
  const cancelReason = document.querySelector(".cancel-row1-1 input[placeholder='Enter Your Reason']").value.trim();

  const savedBooking = JSON.parse(localStorage.getItem("spa-booking-detail"));

  if (!savedBooking) {
    alert("❌ No booking found to cancel!");
    return;
  }
  if (
    savedBooking.name === cancelName &&
    savedBooking.number === cancelNumber &&
    savedBooking.bookingId === cancelBookingId
  ) {
    localStorage.removeItem("spa-booking-detail"); 
    alert("✅ Your booking has been cancelled!\nReason: " + cancelReason);
    window.location.reload();
  } else {
    alert("⚠️ Entered details do not match any booking!");
  }
});


const logout = document.getElementById('cancel');
logout.addEventListener('click',function(){
    alert('Are You Confirm with Logout')
    window.location.href='../Html/Login.html';
})