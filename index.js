let buttons = document.querySelectorAll(".open-popup");
let popup = document.querySelector(".popup");
let buttonClose = popup.querySelector(".close");
let popupBlock = popup.querySelector(".block");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

buttons.forEach((button) => {
  button.addEventListener("click", openPopup);
});

buttonClose.addEventListener("click", closePopup);

popup.addEventListener("click", closePopup);

popupBlock.addEventListener("click", (event) => {
  event.stopPropagation();
});
