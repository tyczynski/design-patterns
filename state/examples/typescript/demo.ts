import Atm from "./Atm";
import ReadyState from "./ReadyState";

function demo() {
    const atm = new Atm();
    atm.insertCard();
    atm.insertPin(1234);
    atm.takeCash(1000);
}

demo();