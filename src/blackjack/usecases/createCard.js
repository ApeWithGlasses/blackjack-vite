export const createCard = (card, turn, cardsContainer) => {
    const imgCard = document.createElement('img');
    imgCard.src = `./assets/cartas/${card}.png`;
    imgCard.classList = 'computer__card';
    cardsContainer[turn].appendChild(imgCard);
}