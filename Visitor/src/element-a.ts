import { Visitable } from "./interfaces/visitable-interface";
import { Visitor } from "./interfaces/visitor-interface";

export class ElementA implements Visitable {
    accept(visitor: Visitor): void {
      visitor.visitElementA(this);
    }
    
    operationA(): void {
      console.log("Operation A on Element A");
    }
  }