import { OperationCommander } from "../commanders/operation-commander";

export class Component1{
    private operationCommander = OperationCommander.getInstance()

    doOperation(operation){
        this.operationCommander.execute(operation);
    }

}