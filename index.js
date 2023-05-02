import validator from './validator.js';
const cardContainer = document.getElementById('card-container');
const cardNumber = document.getElementById('card-number');
const validateButton = document.getElementById("validateButton")
const message = document.getElementById("message")
const messageIcon = document.getElementById("message-icon")
const cardNumberRegex = /^\d+$/;
validateButton.addEventListener("click", () => {  
  if(cardNumber.value === ""){
    cardContainer.classList = ""
    cardContainer.classList.add("initialbg")
    message.classList = ""
    message.classList.add("yellow")
    message.innerHTML = "Por favor ingrese el número de tarjeta que desea validar." 
    messageIcon.innerHTML = `⚠`
  }else {
    if(cardNumberRegex.test(cardNumber.value)){
      const cardNumberArray = cardNumber.value.split('')
      const validatingCard = validator.isValid(cardNumberArray)
      const numberMaskify = validator.maskify(cardNumber.value)
      if(validatingCard){
        message.classList = ""
        cardContainer.classList = ""
        cardContainer.classList.add("success")
        message.innerHTML = `Su tarjeta número ${numberMaskify} es válida.`
        messageIcon.innerHTML = `✔`
      }else{
        message.classList = ""
        cardContainer.classList = ""
        cardContainer.classList.add("error")
        message.innerHTML = `Su tarjeta número ${numberMaskify}  no es válida.`
        messageIcon.innerHTML = `❌`
      }
    }else {
      message.classList = ""
      cardContainer.classList = ""
      cardContainer.classList.add("warning")
      message.innerHTML = "Solo se puede validar números"
      messageIcon.innerHTML = `⚠`  
    }
  }
  cardNumber.value = ""
})