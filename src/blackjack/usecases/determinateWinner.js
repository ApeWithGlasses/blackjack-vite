export const determinateWinner = (mainPoints) => {
    const [minimumPoints, computerPoints] = mainPoints;
    setTimeout(() => {
        if (computerPoints === minimumPoints) {
            alert('Draw');
        } else if (minimumPoints > 21) {
            alert('The computer wins');
        } else if (computerPoints > 21) {
            alert('The player wins');
        } else {
            alert('The computer wins');
        }
    }, 500);
}