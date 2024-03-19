import { DraftState, IState } from "./states";

export class DocumentEditor {
    private state: IState;
    constructor() {
        this.state = new DraftState();
    }

    publish() {
        this.state = new (this.state.publish());
    }

    render() {
        this.state = new (this.state.render());
    }

    deleteState() {
        console.log('Deleting state');
        this.state = new DraftState();
    }
}