import { AtmState } from "./AtmState";
import ReadyState from "./ReadyState";

export default class NoCashState extends AtmState {
    public insertCard() {
        this.context.accessDeniedMessage('Card is already inserted.');
    }

    public insertPin(pin: number) {
        this.context.accessDeniedMessage('Customer is already authorized.');
    }

    public takeCash() {
        this.context.accessDeniedMessage('Not enough cash at Atm. Come back again tomorrow.');
    }
}