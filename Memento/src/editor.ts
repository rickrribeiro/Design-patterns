import { Memento } from "./memento";

export class Editor {
    private text: string;

    constructor() {
        this.text = '';
    }

    setText(text: string): void {
        this.text = text;
    }

    getText(): string {
        return this.text;
    }

    createMemento(): Memento {
        return new Memento(this.text);
    }

    restoreFromMemento(memento: Memento): void {
        this.text = memento.getState();
    }
}