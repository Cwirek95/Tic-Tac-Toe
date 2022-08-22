import { PlayerStatus } from "../enums/PlayerStatus";

export interface PlayerInterface {
    sign: string;
    points: number;
    status: PlayerStatus;

    addPoint(): void;
    changeStatus(): void;
    resetStatus(): void;
    clear(): void;
}