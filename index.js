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

const card = {
  input: document.querySelector('input[type="text"].note'),
  form: document.querySelector(".note-form"),
  box: document.querySelector(".notes-container"),
  cardData: [],

  init() {
    this.form.addEventListener("submit", this.submit.bind(this))
    this.box.addEventListener("click", this.removeCard.bind(this))

    if(localStorage.cardData) {
      this.cardData = JSON.parse(localStorage.cardData)

      this.cardData.forEach(text => {
        this.createCard(text)
      })
    }
  },

  createCard(text) {
    const card = document.createElement("div")
    const button = document.createElement("button")
    const textNode = document.createElement("div")

    card.classList.add("border-card")
    button.classList.add("button-cross")
    textNode.classList.add("text-12")

    textNode.innerHTML = text

    card.appendChild(button)
    card.appendChild(textNode)

    this.box.prepend(card)
  },

  removeCard(e) {
    const isDeleteButton = e.target.classList.contains("button-cross")

    if (isDeleteButton) {
      const card = e.target.parentNode;
      this.cardData = this.cardData.filter(i => i !== card.textContent)
      localStorage.cardData = JSON.stringify(newData)

      card.remove()
    }
  },

  saveCard(text) {
    this.cardData.push(text)
    localStorage.cardData = JSON.stringify(this.cardData)
  },

  submit(e) {
    e.preventDefault()

    const value = this.input.value
    
    this.createCard(value)
    this.saveCard(value)

  }
}

card.init()