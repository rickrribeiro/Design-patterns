import { IState, PublishedState } from ".";

export class ModerationState implements IState{
    
    publish() {
        console.log('publishing state');
        return PublishedState;
    }

    render() {
        console.log('A ModerationState cant be rendered');
        return ModerationState;
    }

}