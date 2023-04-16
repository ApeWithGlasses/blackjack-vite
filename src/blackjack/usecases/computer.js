import { askForCard } from "./askForCard";
import { createCard } from "./createCard";
import { determinateWinner } from "./determinateWinner";
import { amountPoints } from "./amountPoints";

/**
 * 
 * @param {Number} minimumPoints
 * @param {HTMLElement} mainPoints
 * @param {Array<String>} deck
 */

export const computer = (minimumPoints, deck, mainPoints, pointsLayer, cardsContainer) => {
    if (!minimumPoints) throw new Error('minimumPoints are necesary.');
    if (!mainPoints) throw new Error('mainPoints is necesary.');

    let computerPoints = 0;
    do {
        const card = askForCard(deck);
        computerPoints = amountPoints(card, mainPoints.length - 1, mainPoints, pointsLayer);
        createCard(card, mainPoints.length - 1, cardsContainer);

    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));

    determinateWinner(mainPoints);
}