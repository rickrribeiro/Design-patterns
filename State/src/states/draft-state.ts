import { IState, ModerationState } from ".";

export class DraftState implements IState{
    
    publish() {
        console.log('A DraftState cant publish');
        return DraftState;
    }

    render() {
        console.log('Rendering');
        return ModerationState;
    }

}