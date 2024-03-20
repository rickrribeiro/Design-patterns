import { ElementA } from "./element-a";
import { ElementB } from "./element-b";
import { Visitor } from "./interfaces/visitor-interface";

export class ConcreteVisitor implements Visitor {
    visitElementA(element: ElementA): void {
      console.log("Visitor is processing Element A");
      element.operationA();
    }
    
    visitElementB(element: ElementB): void {
      console.log("Visitor is processing Element B");
      element.operationB();
    }
  }