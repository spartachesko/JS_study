document.addEventListener('DOMContentLoaded', () => {
  let cardsArray = []
  let checkSecondCard = []
  let selectedCards = []

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  function addNumber(number) {
    if (cardsArray.includes(number) && cardsArray.indexOf(number) == cardsArray.length) {
      return false
    } else if (cardsArray.includes(number)) {
      checkSecondCard = cardsArray.slice(cardsArray.indexOf(number) + 1, cardsArray.length)

      if (!checkSecondCard.includes(number)) {
        cardsArray.push(number)
        checkSecondCard = []
        return true
      }

      checkSecondCard = []
      return false

    } else {
      cardsArray.push(number)
      return true
    }
  }

  function createCard(i) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('card__close')
    let number = getRandomIntInclusive(1, 5)
    if (addNumber(number)) {
      card.innerText = `CARD ${number}`
      card.setAttribute('id', i)
      card.setAttribute('data-value', number)
      let cards = document.querySelector('.cards')
      cards.append(card)
    }
    return
  }



  for (let i = 0; cardsArray.length < 10; i++) {
    createCard(i)
  }


  function checkValues(arrayForCheck) {
    let result = arrayForCheck.map(function (item, index, array) {
      return Object.values(item)[0]
    });
    let indexes = arrayForCheck.map(function (item, index, array) {
      return Object.keys(item)[0]
    });

    for (let i = 1; i < result.length; ++i) {
      if (result[i - 1] !== result[i]) {


        indexes.map(function(item, index, array){
          console.log('item indexes', item)
          console.log('index indexes', index)
          let closeCard = document.getElementById(item)

          index !== array.length ?
          closeCard.classList.add("card__close") :
          setTimeout(closeCard.classList.add("card__close"), 2000) 
        })




      }  else {
        console.log('values the same')
      }
      selectedCards = []
    }
    result = []
    indexes =[]
  }


  function handler(el) {
    let id = el.target.id
    let selectedCard = document.getElementById(id)
    selectedCard.classList.remove("card__close")
    console.log('selectedCard', selectedCard)
    let valueInCard = selectedCard.dataset.value
    console.log('value', valueInCard)
    let rawObj = {}
    rawObj[id] = valueInCard
    if (selectedCards.length === 1) {
      console.log('id', id)
      console.log('selectedCards[0]', selectedCards[0])
      selectedCards.push(rawObj)
      checkValues(selectedCards)
    } else {
      selectedCards.push(rawObj)
      rawObj = {}
    }
  }


  let cards = document.querySelectorAll('.card')
  console.log('cards', cards)
  cards.forEach(element => {
    element.addEventListener('click', (el) => handler(el))
  });

})




