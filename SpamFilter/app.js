const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");
const helpRegex = /pleas help|assist me/i;

const isSpam = (msg) => helpRegex.test(msg); 
const denyList = [helpRegex];
checkMessageButton.addEventListener("click", () => {
   if(messageInput.value === ''){
     alert("Please enter a message.");
     return;
   }
   result.textContent = isSpam(messageInput.value) ? "Oh no! this looks like a spam message." : "This message does not seem to contain any spam."
   messageInput.value = '';  
});
