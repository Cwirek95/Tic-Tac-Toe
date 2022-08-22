import { FieldStatus } from "../enums/FieldStatus.js";
import { Sign } from "../enums/Sign.js";
import { GameFieldInterface } from "../interfaces/GameFieldInterface";

export class GameField implements GameFieldInterface {
    public id : number;
    public status: FieldStatus;

    constructor(id: number) {
        this.id = id;
        this.status = FieldStatus.EMPTY;
    }

    public changeStatus(playerSign: Sign): void {
        if(this.status === FieldStatus.EMPTY) {
            this.status = this.setSign(playerSign);
        }
    }

    public clear(): void {
        this.status = FieldStatus.EMPTY;
    }

    private setSign(playerSign: Sign): FieldStatus {
        if(playerSign === Sign.O) {
            return FieldStatus.O;
        } else {
            return FieldStatus.X;
        }
    }
}