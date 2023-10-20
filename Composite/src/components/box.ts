import { Component } from "./component";

export class Box extends Component{
    private childrens: Array<Component> = []

    addChildren(children: Component){
        this.childrens.push(children)
    }

    getValue(): number {

        let totalValue = 0
        for(let children of this.childrens){
            totalValue += children.getValue();
        }
        return totalValue;
    }


}