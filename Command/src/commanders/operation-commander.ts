import { Application } from "../application/application";
import { BaseCommander } from "./base-commander";
import { ICommander } from "./interfaces/commander-interface";

export class OperationCommander extends BaseCommander implements ICommander{
    private static instance;
   

    public static getInstance(): OperationCommander{
        if(!this.instance) this.instance = new OperationCommander();
        return this.instance
    }

    execute(operation) {
        this.addHistory(operation);
        Application.runOperation(operation)
    }

    
    
}