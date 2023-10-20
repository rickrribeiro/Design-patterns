import {OperationDecorator,AdditionDecorator,SubstractionDecorator, multiplier} from '../decorators'

export class Printer{

    @multiplier(5)
    printWithFunction(a,b){
        console.log("rodando")
        return a+b
    }

    
    add(a,b){
        const operationDecorator = new OperationDecorator();
        return operationDecorator.calc(new AdditionDecorator(), a, b);
    }

    subtract(a,b){
        const operationDecorator = new OperationDecorator();
        return operationDecorator.calc(new SubstractionDecorator(), a, b);
    }
}