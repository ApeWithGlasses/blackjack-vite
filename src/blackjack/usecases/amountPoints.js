import { cardValue } from "./cardValue";

export const amountPoints = (card, turn, mainPoints, pointsLayer) => {
    mainPoints[turn] = mainPoints[turn] + cardValue(card);
    pointsLayer[turn].innerHTML = mainPoints[turn];
    return mainPoints[turn];
}