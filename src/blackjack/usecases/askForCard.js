/**
 * 
 * @param {Array<String>} deck [...]
 * @returns {String} Returns a card.
 */
export const askForCard = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'There are not more cards';
    }
    return deck.pop();
}