document.querySelector(".select .selected")
  .addEventListener("click", function () {
    document.querySelector(".select").classList.add("show");
  });
document.querySelectorAll(".dropdown a").forEach(function (item) {
  item.addEventListener("click", function () {
    document.querySelector(".select").classList.remove("show");
  });
});








function toggleText(index) {
  let textId = "myText" + index;
  let textElement = document.getElementById(textId);
  if (!textElement) {
    console.error("Element not found with ID: " + textId);
    return;
  }
  textElement.style.display =
    textElement.style.display === "none" ? "block" : "none";

  let bottomTextContainers = document.querySelectorAll(".bottom-text");

  bottomTextContainers.forEach(function (container) {
    container.classList.remove("active");
  });

  let clickedTextContainer = event.target.parentElement.nextElementSibling;
  clickedTextContainer.classList.toggle("active");
}
for (let i = 1; i <= 9; i++) {
  let textId = "myText" + i;
  let textElement = document.getElementById(textId);
  if (textElement) {
    textElement.style.display = "none";
  } else {
    console.error("Element not found with ID: " + textId);
  }
  let buttonId = "toggleButton" + i;
  let buttonElement = document.getElementById(buttonId);
  if (buttonElement) {
    buttonElement.onclick = function () {
      toggleText(i);
    };
  } else {
    console.error("Element not found with ID: " + buttonId);
  }
}
