import { Player } from "../classes/Player.js";
import { Sign } from "../enums/Sign.js";

const winningPossibility = [
     {check: [1,2,3]},
     {check: [1,4,7]},
     {check: [1,5,9]},
     {check: [2,5,8]},
     {check: [3,5,7]},
     {check: [3,6,9]}, 
     {check: [4,5,6]},
     {check: [7,8,9]} 
    ];

let fieldsPlayerO: number[] = [];
let fieldsPlayerX: number[] = [];

export const checkGameOver = (fieldNumber: number, sign: Sign, winnerContainer: HTMLElement, winnerContainerText: HTMLElement,
                                winnerContainerH3: HTMLElement, player: Player) => {
                                    
    sign === Sign.O ? fieldsPlayerO.push(fieldNumber) : fieldsPlayerX.push(fieldNumber);

    for (let i = 0; i < winningPossibility.length; i++) {

        let checkerO = () => winningPossibility[i].check.every(o => fieldsPlayerO.includes(o));
        let checkerX = () => winningPossibility[i].check.every(x => fieldsPlayerX.includes(x));

        // O win
        if (checkerO()) {
            displayInfo(Sign.O, winnerContainer, winnerContainerText, winnerContainerH3);
            player.addPoint();
        }
        // X win
        if (checkerX()) {
            displayInfo(Sign.X, winnerContainer, winnerContainerText, winnerContainerH3);
            player.addPoint();
        }
    }
    // Draw
    if (fieldsPlayerO.length + fieldsPlayerX.length === 9) {
        displayInfo(null, winnerContainer, winnerContainerText, winnerContainerH3);
    }
};


const displayInfo = (winnerSign: Sign, winnerContainer: HTMLElement, winnerContainerText: HTMLElement, winnerContainerH3: HTMLElement) => {
    winnerContainer.classList.add('display-winner');
    if (winnerSign === null) {
        winnerContainerText.innerHTML = '';
        winnerContainerH3.innerHTML = 'DRAW';
    } else {
        winnerContainerText.innerHTML = winnerSign;
        winnerContainerH3.innerHTML = 'WIN';
    }
    fieldsPlayerO = [];
    fieldsPlayerX = [];
}