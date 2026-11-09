const button = document.getElementById("message-button");
const message = document.getElementById("message");

button.addEventListener("click", function() {
  message.hidden = !message.hidden;
  if(!message.hidden) {
    button.textContent = "Hide message"
  } else {
    button.textContent = "Show message"
  }
});

button.addEventListener("click", changeColor);

function changeColor() {
    const currentBg = document.body.style.backgroundColor;

    if (currentBg === "pink") {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "pink";
    }
}

