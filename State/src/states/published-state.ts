import { DraftState, IState } from ".";

export class PublishedState implements IState{
    
    publish() {
        console.log('A PublishedState cant be published');
        return PublishedState;
    }

    render() {
        console.log('A PublishedState cant be rendered');
        return PublishedState;
    }

}