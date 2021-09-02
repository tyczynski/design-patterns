import { AtmState } from "./AtmState";
import ReadyState from "./ReadyState";

export default class NoPinState extends AtmState {
    public insertCard() {
        this.context.accessDeniedMessage('Card is already inserted.');
    }

    public insertPin(pin: number) {
        if (pin !== 1234) {
            this.context.accessDeniedMessage('Incorrect PIN number.');
            return;
        }
        
        this.context.accessGrantedMessage('PIN correct. You can withdraw cash.');
        this.context.transitionTo(new ReadyState());
    }

    public takeCash() {
        this.context.accessDeniedMessage('Unauthorized customer.');
    }
}