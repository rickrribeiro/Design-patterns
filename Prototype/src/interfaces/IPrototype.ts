import { Shape } from "../prototypes/Shape";

export interface IPrototype{
    clone(shape: Shape): Shape
}