// Abstract class / Interface
import Atm from './Atm'

export abstract class AtmState {
    protected context!: Atm;

    public setContext(context: Atm) {
        this.context = context;
    }

    // state methods
    public abstract insertCard(): void;
    public abstract insertPin(pin: number): void;
    public abstract takeCash(value: number): void;
}