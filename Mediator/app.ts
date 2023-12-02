import { ComponentA, ComponentB, ComponentC, Mediator, Button } from "./src";


const mediator = new Mediator();
const componentA = new ComponentA(mediator);
const componentB = new ComponentB(mediator);
const componentC = new ComponentC(mediator);
const button = new Button(mediator);

mediator.createForm(componentA, componentB, componentC, button);

button.action()

componentA.action()
button.action()
componentB.action()
button.action()
componentC.action()
button.action()