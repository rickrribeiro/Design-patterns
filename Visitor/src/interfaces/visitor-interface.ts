import { ElementA } from "../element-a";
import { ElementB } from "../element-b";

export interface Visitor {
    visitElementA(element: ElementA): void;
    visitElementB(element: ElementB): void;
  }