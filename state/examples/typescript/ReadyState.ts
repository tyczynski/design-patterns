import { AtmState } from "./AtmState";
import NoCardState from "./NoCardState";
import NoCashState from "./NoCashState";

export default class ReadyState extends AtmState {
    public insertCard() {
        if (this.context.getCash() < 100) {
            this.context.accessDeniedMessage('Not enough cash at Atm.');
            this.context.transitionTo(new NoCashState());
            return;
        }

        this.context.accessDeniedMessage('Card is already inserted.');
    }

    public insertPin() {
        this.context.accessDeniedMessage('Customer is already authorized.');
    }

    public takeCash(value: number) {
        if (value > this.context.getCash()) {
            this.context.accessDeniedMessage('Not enough cash at Atm. Withdraw a smaller amount.');
            return;
        }

        this.context.decreaseCash(value);
        this.context.accessGrantedMessage(`You withdrawn ${value}.`);
        this.context.transitionTo(new NoCardState());
    }
}