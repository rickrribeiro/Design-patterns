import { IBuilder } from "../interfaces/IBuilder";
import { Model1 } from "../models";


export class BuilderModel1 implements IBuilder{
    private model: Model1;

    constructor(requiredConfig1: string, requiredConfig2: string){
       this.model = new Model1(requiredConfig1, requiredConfig2);
    }

    build(): Model1 {
        return this.model;
    }

    setOptionalConfig1(config: string): IBuilder {
        this.model.optionalConfig1 = config;
        return this;
    }
    
    setOptionalConfig2(config: string): IBuilder {
        this.model.optionalConfig2 = config;
        return this;
    }
   
}