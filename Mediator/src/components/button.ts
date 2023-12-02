import { Mediator } from "../mediator";

export class Button {
    public isLocked = true;
    constructor(private mediator:Mediator) {}

    public action(): any{
        this.mediator.notify(this, 'click');
    }

    public action2(): any{
        this.mediator.notify(this, 'clicked');
    }
    
    
}