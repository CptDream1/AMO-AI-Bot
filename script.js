document.getElementById("chatbot-button").onclick = () => {
  const widget = document.getElementById("chatbot-widget");
  widget.style.display = widget.style.display === "block" ? "none" : "block";
};

document.getElementById("chat-form").onsubmit = async (e) => {
  e.preventDefault();
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  addMessage("user", message);
  input.value = "";

  // Dummy response – replace this with OpenAI fetch if needed
  setTimeout(() => {
    addMessage("bot", getDummyResponse(message));
  }, 1000);
};

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.className = sender;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getDummyResponse(input) {
  input = input.toLowerCase();
  if (input.includes("class") || input.includes("age")) return "We offer classes for children aged 5-16.";
  if (input.includes("fees")) return "Our fees start from £25/month.";
  if (input.includes("location")) return "We are based in Birmingham, UK.";
  return "Sorry, I’m still learning. Please contact us for more help.";
}
