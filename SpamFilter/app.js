const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

const helpRegex = /please help|assist me/i;

const stockAlert = /stock alert/i

const denyList = [helpRegex,dollarRegex,freeRegex,stockAlert];

const dollarRegex  = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

const freeRegex = /(?:\s|^)fr[e3][e3]\s \sm[o0]n[]e3y(?:\s|$)/i


const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});