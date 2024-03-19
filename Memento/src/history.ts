import { Memento } from "./memento";

export class StateHistory {
    private mementos: Memento[] = [];

    push(memento: Memento): void {
        this.mementos.push(memento);
        console.log(this.mementos)
    }

    pop(): Memento | undefined {
        return this.mementos.pop();
    }
}