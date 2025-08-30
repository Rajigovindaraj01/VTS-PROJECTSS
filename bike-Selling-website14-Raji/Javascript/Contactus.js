// Send button alert
      document.getElementById("sendBtn").addEventListener("click", () => {
        alert("We'll get back to you soon!");
      });

      function initMap() {
        const location = { lat: 12.689, lng: 79.9985 }; 
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: location,
        });
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
      }