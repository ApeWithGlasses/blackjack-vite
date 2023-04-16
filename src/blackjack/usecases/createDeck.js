import _ from 'underscore';

/**
 * 
 * @param {Array<String>} types Example ['C', 'D', 'H', 'S']
 * @param {Array<String>} specials Example ['C', 'D', 'H', 'S']
 * @returns {Array<String>} Returns a new cards deck array
 */

export const createDeck = (types, specials) => {
    if (!types || types.length === 0) throw new Error('Types is obligatory like a string array.');
    if (!specials || specials.length === 0) throw new Error('Specials is obligatory like a string array.');

    let deck = [];
    for (let i = 2; i < 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let type of types) {
        for (let special of specials) {
            deck.push(special + type);
        }
    }

    return deck = _.shuffle(deck);
}