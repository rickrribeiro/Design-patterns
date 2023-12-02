import { Mediator } from "../mediator";


export class ComponentA {
    public isFilled = false;
    constructor(private mediator:Mediator) {}
    
    public action(): any{
        this.mediator.notify(this, 'filled');
        this.isFilled = true;
    }
    


}