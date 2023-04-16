/**
 * 
 * @param {String} card 
 * @returns {Number} Returns the card value.
 */
export const cardValue = (card) => {
    if (!card) throw new Error('There are not a card.');
    const value = card.substring(0, card.length - 1);
    return (isNaN(value)) ? (value === 'A') ? 11 : 10 : parseInt(value);
}