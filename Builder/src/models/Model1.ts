import { IBuilder } from "../interfaces/IBuilder";
// import { IModel } from "../interfaces/IModel";


export class Model1 {// implements IModel {
    private requiredConfig1: string;
    private requiredConfig2: string;
    public optionalConfig1: string;
    public optionalConfig2: string;

    constructor(requiredConfig1: string, requiredConfig2: string){
        this.requiredConfig1 = requiredConfig1;
        this.requiredConfig2 = requiredConfig2;
    }

    getConfiguration(): string {
        return`Configs: ${this.requiredConfig1},${this.requiredConfig2},${this.optionalConfig1},${this.optionalConfig2}`
    }

}