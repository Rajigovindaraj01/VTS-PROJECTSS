//for drop-downs

const dropdownTitle=document.getElementById("dropdownTitle");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownTitle.addEventListener("click",()=>{
    dropdownMenu.classList.toggle("active");
})

const dropdownTitle1=document.getElementById("dropdownTitle1");
const dropdownMenu1 = document.getElementById("dropdownMenu1");

dropdownTitle1.addEventListener("click",()=>{
    dropdownMenu1.classList.toggle("active");
})


//chatbox
document.addEventListener("DOMContentLoaded", function () {
  const chatbox = document.getElementById("chatbox");
  const chatButton = document.getElementById("chatButton");
  const chatClose = document.getElementById("chatClose");
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const chatBody = document.getElementById("chat-body");
  const overlay = document.getElementById("chatOverlay");

  chatButton.addEventListener("click", () => {
    chatbox.classList.add("active");
    overlay.style.display = "block";
  });


  function closeChat() {
    chatbox.classList.remove("active");
    overlay.style.display = "none";
  }

  chatClose.addEventListener("click", closeChat);
  overlay.addEventListener("click", closeChat);


  sendBtn.addEventListener("click", () => {
    const msg = userInput.value.trim();
    if (msg !== "") {
      const msgDiv = document.createElement("div");
      msgDiv.classList.add("chat-message");
      msgDiv.innerHTML = `
        <div class="chat-icon">U</div>
        <div class="chat-text">${msg}</div>
      `;
      chatBody.appendChild(msgDiv);
      userInput.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  });

  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendBtn.click();
  });
});
