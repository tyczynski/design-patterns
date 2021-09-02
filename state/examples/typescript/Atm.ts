// Context

import { AtmState } from "./AtmState";
import NoCardState from "./NoCardState";

export default class Atm {
    private state!: AtmState;
    private cash: number;

    constructor() {
        this.transitionTo(new NoCardState())
        this.cash = 10000;
    }

    transitionTo(state: AtmState) {
        console.log(`Context: Transition to ${(state as any).constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }

    public insertCard() {
        this.state.insertCard();
    }

    public insertPin(pin: number) {
        this.state.insertPin(pin);
    }

    public takeCash(value: number) {
        this.state.takeCash(value);
    }

    decreaseCash(number: number) {
        this.cash = this.cash - number;
    }

    getCash() {
        return this.cash;
    }

    accessDeniedMessage(message: string) {
        console.log(`Access denied: ${message}`);
    }

    accessGrantedMessage(message: string) {
        console.log(`Access granted: ${message}`);
    }
}