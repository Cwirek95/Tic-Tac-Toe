import { GameField } from "./classes/GameField.js";
import { Player } from "./classes/Player.js";
import { FieldStatus } from "./enums/FieldStatus.js";
import { PlayerStatus } from "./enums/PlayerStatus.js";
import { Sign } from "./enums/Sign.js";
import { checkGameOver } from "./services/CheckGameOverService.js";
import { renderGameField, clearGameField, turn } from "./services/GameFieldService.js";

// Html elements
const newGameBtn: HTMLElement = document.querySelector('.new-game-btn');
const continueBtn: HTMLElement = document.querySelector('.continue-btn');
const gameFieldContainerElement: HTMLElement = document.querySelector('.game-field');
const gameTurnElement: HTMLElement = document.querySelector('.player-turn span');
const pointsPlayerO: HTMLElement = document.querySelector('#playerO span');
const pointsPlayerX: HTMLElement = document.querySelector('#playerX span');
const winnerContainer: HTMLElement = document.querySelector('.winner-container');
const winnerContainerText: HTMLElement = document.querySelector('.winner-info');
const winnerContainerH3: HTMLElement = document.querySelector('.winner-info-h3');

// Initialize game
const playerO = new Player(Sign.O, 0, PlayerStatus.TURN);
const playerX = new Player(Sign.X, 0, PlayerStatus.NO_TURN);
const gameFields: GameField[] = [];
let counter = 1;
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 4; j++) {
        const gameField = new GameField(counter);
        gameFields.push(gameField);
        counter++;
    }  
}
renderGameField(gameFields, gameFieldContainerElement);

// Game field listener
for (let i = 1; i <= 9; i++) {
    const field = document.querySelector(`#field-${i}`).addEventListener("click", (event: Event) => {
        if(gameFields[i].status === FieldStatus.EMPTY) {
            if (playerO.status === PlayerStatus.TURN && playerX.status === PlayerStatus.NO_TURN) {
                turn(gameFields, i, Sign.O, Sign.X, playerO, playerX, gameTurnElement);
                checkGameOver(i, Sign.O, winnerContainer, winnerContainerText, winnerContainerH3, playerO);
            } else if(playerO.status === PlayerStatus.NO_TURN && playerX.status === PlayerStatus.TURN) {
                turn(gameFields, i, Sign.X, Sign.O, playerO, playerX, gameTurnElement);
                checkGameOver(i, Sign.X, winnerContainer, winnerContainerText, winnerContainerH3, playerX);
            }
            else {
                throw new Error('Something bad occured')
            }
        }
    });
}

// New game button listener
newGameBtn.addEventListener("click", (event: Event) => {
    playerO.clear();
    playerX.clear();
    clearGameField(gameTurnElement, pointsPlayerO, pointsPlayerX, gameFields, playerO, playerX);
});

// Continue button listener
continueBtn.addEventListener("click", (event: Event) => {
    winnerContainer.classList.remove('display-winner');
    playerO.resetStatus();
    playerX.resetStatus();
    clearGameField(gameTurnElement, pointsPlayerO, pointsPlayerX, gameFields, playerO, playerX);
});