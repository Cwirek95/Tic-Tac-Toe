import { PlayerInterface } from "../interfaces/PlayerInterface";
import { Sign } from "../enums/Sign.js";
import { PlayerStatus } from "../enums/PlayerStatus.js";

export class Player implements PlayerInterface {
    public sign: Sign;
    public points: number;
    public status: PlayerStatus;

    constructor(sign: Sign, points: number, status: PlayerStatus) {
        this.sign = sign;
        this.points = points;
        this.status = status;
    }

    public addPoint(): void {
        this.points += 1;
    }

    public changeStatus(): void {
        this.status === 0 ? this.status = 1 : this.status = 0;
    }

    public resetStatus(): void {
        this.sign === Sign.O ? this.status = PlayerStatus.TURN : this.status = PlayerStatus.NO_TURN;
    }

    public clear(): void {
        this.points = 0;
        if(this.sign === Sign.O) {
            this.status = PlayerStatus.TURN;
        } else if(this.sign === Sign.X) {
            this.status = PlayerStatus.NO_TURN;
        }
    }
}