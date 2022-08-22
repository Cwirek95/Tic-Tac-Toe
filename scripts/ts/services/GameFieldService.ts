import { GameField } from "../classes/GameField";
import { Player } from "../classes/Player";
import { Sign } from "../enums/Sign.js";

export const renderGameField = (gameFields: GameField[], gameFieldContainer: HTMLElement) => {
    gameFields.forEach((gameField, index) => {
        const gameFieldElement: HTMLElement = document.createElement("div");
        gameFieldElement.classList.add("field-item");
        gameFieldElement.id = `field-${index + 1}`;

        gameFieldContainer.appendChild(gameFieldElement);
    });
};

export const clearGameField = (gameTurnElement: HTMLElement, pointsPlayerO: HTMLElement, pointsPlayerX: HTMLElement, 
                                gameFields: GameField[], playerO: Player, playerX: Player) => {
    gameTurnElement.innerHTML = Sign.O;
    pointsPlayerO.innerHTML = playerO.points.toString();
    pointsPlayerX.innerHTML = playerX.points.toString();
    for (let i = 1; i <= 9; i++) {
        document.querySelector(`#field-${i}`).innerHTML = "";
        gameFields[i].clear();
    }
}

export const turn = (gameFields: GameField[], i: number, sign: Sign, nextTurnSign: Sign,
                        playerO: Player, playerX: Player, gameTurnElement: HTMLElement) => {
    gameFields.at(i).changeStatus(sign);
    document.querySelector(`#field-${i}`).innerHTML = sign;
    gameTurnElement.innerHTML = nextTurnSign;
    playerO.changeStatus();
    playerX.changeStatus();
}