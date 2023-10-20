import { Component } from "./component";

export class Product extends Component {
    constructor(private value: number) {
        super();
    }

    getValue(): number {
        return this.value
    }
}