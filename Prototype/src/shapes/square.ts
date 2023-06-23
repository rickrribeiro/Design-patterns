import { Shape } from "../prototypes/Shape";

export class Square extends Shape{
    clone(): Shape {
        return new Square(this);
    }
}