import { AtmState } from "./AtmState";
import NoPinState from "./NoPinState";

export default class NoCardState extends AtmState {
    public insertCard() {
        this.context.accessGrantedMessage('Card properly inserted.');
        this.context.transitionTo(new NoPinState());
    }

    public insertPin() {
        this.context.accessDeniedMessage('No card in the Atm.');
    }

    public takeCash() {
        this.context.accessDeniedMessage('No card in the Atm.');
    }
}