document.getElementById("check-btn").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value;
  const resultElement = document.getElementById("result");

  if (!inputText) {
    alert("Please input a value");
    return;
  }

  //     An event listener is added to the button to trigger the palindrome check when clicked.
  // The input text is cleaned by removing all non-alphanumeric characters and converting to lowercase.
  // The cleaned text is then reversed and compared with the original cleaned text.
  // The result is displayed in the result element.
  const cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedText = cleanedText.split("").reverse().join("");

  if (cleanedText === reversedText) {
    resultElement.textContent = `${inputText} is a palindrome`;
  } else {
    resultElement.textContent = `${inputText} is not a palindrome`;
  }
});
