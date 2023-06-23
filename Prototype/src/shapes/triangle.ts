import { Shape } from "../prototypes/Shape";

export class Triangle extends Shape{
    
    clone(): Shape {
        return new Triangle(this);
    }
}