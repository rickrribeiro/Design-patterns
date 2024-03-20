import { ConcreteVisitor } from "./src/concrete-visitor";
import { ElementA } from "./src/element-a";
import { ElementB } from "./src/element-b";

const elementA = new ElementA();
const elementB = new ElementB();
const visitor = new ConcreteVisitor();

elementA.accept(visitor);
elementB.accept(visitor);