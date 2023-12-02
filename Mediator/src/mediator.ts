import { Button, ComponentA, ComponentB, ComponentC } from "./components";

export class Mediator{
    private componentA:ComponentA;
    private componentB:ComponentB;
    private componentC: ComponentC;
    private button: Button;

    public createForm(componentA: ComponentA, componentB: ComponentB, componentC: ComponentC, button: Button){
        this.componentA = componentA;
        this.componentB = componentB;
        this.componentC = componentC;
        this.button = button;
    }

    public notify(component, message){
        if( component instanceof ComponentA && message === 'filled'){
            if(this.componentB.isFilled && this.componentC.isFilled){
                this.button.isLocked = false
            }
        }else if(component instanceof ComponentB && message === 'filled'){
            if(this.componentA.isFilled && this.componentC.isFilled){
                this.button.isLocked = false
            }
        }else if(component instanceof ComponentC && message === 'filled'){
            if(this.componentB.isFilled && this.componentA  .isFilled){
                this.button.isLocked = false
            }
        }else if(component instanceof Button && message === 'click'){
            if(!this.button.isLocked){
                this.button.action2()
            }
        }else if(component instanceof Button && message === 'clicked'){
           console.log("Form sent")
        }
    }
}