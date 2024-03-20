import { Visitable } from "./interfaces/visitable-interface";
import { Visitor } from "./interfaces/visitor-interface";

export class ElementB implements Visitable {
    accept(visitor: Visitor): void {
      visitor.visitElementB(this);
    }
    
    operationB(): void {
      console.log("Operation B on Element B");
    }
  }