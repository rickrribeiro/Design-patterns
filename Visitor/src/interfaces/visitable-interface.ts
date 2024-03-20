import { Visitor } from "./visitor-interface";

export interface Visitable {
    accept(visitor: Visitor): void;
  }
  