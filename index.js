const buttons = document.querySelectorAll(".open-popup")
const popup = document.querySelector(".popup")
const buttonClose = document.querySelector(".close")
const popupBlock = document.querySelector(".block")

function openPopup() {
  popup.classList.add("open-popup")
}

function closePopup() {
  popup.classList.remove("open-popup")
}

buttons.forEach((button) => {
  button.addEventListener("click", openPopup)
})

buttonClose.addEventListener("click", closePopup)

popup.addEventListener("click", closePopup)

popupBlock.addEventListener("click", (event) => {
  event.stopPropagation()
})

const card = (function(){
  const input = document.querySelector('input[type="text"].note')
  const form = document.querySelector('.note-form')
  const box = document.querySelector('.notes-container')

  const init = () => {
    form.addEventListener('submit', submit)
    box.addEventListener('click', removeCard)
  }

  const createCard = (text) => {
    const card = document.createElement('div')
    const button = document.createElement('button')
    const textNode = document.createElement('div')

    card.classList.add('border-card')
    button.classList.add('button-cross')
    textNode.classList.add('text-12')

    textNode.innerHTML = text

    card.appendChild(button)
    card.appendChild(textNode)

    box.prepend(card)
  }

  const removeCard = (e) => {
    const isDeleteButton = e.target.classList.contains('button-cross') 
    
    if(isDeleteButton) {
      e.target.parentNode.remove()
    }
  }

  const submit = (e) => {
    e.preventDefault()
    
    createCard(input.value)
  }

  return {
    init,
    createCard
  }
})()
