import _ from 'underscore';
import { computer, createCard, amountPoints ,askForCard, createDeck} from './usecases';

const module = (() => {
  'use strict'
  let deck = [];
  const types = ['C', 'D', 'H', 'S'],
    specials = ['A', 'J', 'Q', 'K'];
  let mainPoints = [];

  const newBtn = document.querySelector('#new'),
    askBtn = document.querySelector('#ask'),
    stopBtn = document.querySelector('#stop'),
    pointsLayer = document.querySelectorAll('small'),
    cardsContainer = document.querySelectorAll('.cards__container');

  const initializeWebGame = (players = 2) => {
    deck = createDeck(types, specials);
    mainPoints = [];
    for (let i = 0; i < players; i++) {
      mainPoints.push(0);
    }

    stopBtn.disabled = false;
    askBtn.disabled = false;

    cardsContainer.forEach(elem => elem.innerText = '');
    pointsLayer.forEach(elem => elem.innerText = 0);
  }

  askBtn.addEventListener('click', () => {
    const card = askForCard(deck);
    const playerPoints = amountPoints(card, 0, mainPoints, pointsLayer);

    createCard(card, 0, cardsContainer);

    if (playerPoints > 21) {
      console.warn('Sorry, you lose.');
      askBtn.disabled = true;
      stopBtn.disabled = true;
      computer(playerPoints, deck, mainPoints, pointsLayer, cardsContainer);
    } else if (playerPoints === 21) {
      setTimeout(() => {
        alert('Blackjack');
      }, 500);
      askBtn.disabled = true;
      stopBtn.disabled = true;
    }
  });

  stopBtn.addEventListener('click', () => {
    stopBtn.disabled = true;
    askBtn.disabled = true;

    computer(mainPoints[0], deck, mainPoints, pointsLayer, cardsContainer);
  });

  newBtn.addEventListener('click', () => {
    initializeWebGame();
  });

  return {
    ini: initializeWebGame
  };
})();