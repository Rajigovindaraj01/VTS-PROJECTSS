  document.querySelectorAll(".sec2-3-1-head").forEach(head => {
    head.addEventListener("click", () => {
      const parent = head.closest(".sec2-3-1");
      const body = parent.querySelector(".sec2-3-1-body");
      document.querySelectorAll(".sec2-3-1-body").forEach(b => {
        if (b !== body) b.style.display = "none";
      });

      body.style.display = (body.style.display === "block") ? "none" : "block";
    });
  });

  const bookingData = {
    name: "",
    number: "",
    service: "",
    date: "",
    therapist: "",
    time: ""
  };

  const nameInput = document.querySelector(".sec2-2-1 input");
  const numberInput = document.querySelector(".sec2-2-2 input");

  nameInput.addEventListener("input", e => bookingData.name = e.target.value);
  numberInput.addEventListener("input", e => bookingData.number = e.target.value);

  document.querySelectorAll(".sec2-3-1-body div").forEach(option => {
    option.addEventListener("click", () => {
      const parent = option.closest(".sec2-3-1");
      const headLabel = parent.querySelector(".sec2-3-1-head div:first-child");
      const value = option.textContent.trim();

      headLabel.textContent = value;

      parent.querySelector(".sec2-3-1-body").style.display = "none";

      if (["Body Massage", "Facial Treatment", "Body Treatment", "Hair & Scalp Treatment", "Manicure & Pedicure"].includes(value)) {
        bookingData.service = value;
      } else if (value === "Male" || value === "Female") {
        bookingData.therapist = value;
      } else if (value.includes("AM") || value.includes("PM")) {
        bookingData.time = value;
      } else {
        bookingData.date = value;
      }
    });
  });

  document.querySelector(".booknow").addEventListener("click", () => {
    bookingData.name = nameInput.value.trim();
    bookingData.number = numberInput.value.trim();

    if (!bookingData.name || !bookingData.number || !bookingData.service || !bookingData.date || !bookingData.therapist || !bookingData.time) {
      alert("⚠️ Please fill all fields before booking!");
      return;
    }


    const bookingId = "SPA-" + Math.floor(100000 + Math.random() * 900000);

    const finalBooking = {
      ...bookingData,
      bookingId
    };

    localStorage.setItem("spa-booking-detail", JSON.stringify(finalBooking));

    document.querySelector(".book-confirm").style.display = "block";
    document.querySelector(".booknow").style.display = "none";
  });

document.querySelector(".book-confirm").addEventListener('click',function(){
    alert('If you want to cancel or View your booking...please go to your Dashboard')
    window.location.href='../index.html';
})