import { FieldStatus } from "../enums/FieldStatus";
import { Sign } from "../enums/Sign";

export interface GameFieldInterface {
    id: number;
    status: FieldStatus;

    changeStatus(playerSign: Sign): void;
    clear(gameFieldElement: HTMLElement): void;
}