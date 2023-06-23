import { IPrototype } from "../interfaces/IPrototype";

export abstract class Shape implements IPrototype{
    private sidesCount;
    private sidesSize;
    
    constructor(sidesCount: number, sidesSize: number);
    constructor(shape: Shape)
    constructor(arg1?: Shape | number, arg2?: number){
        if (typeof arg1 === 'number' && arg2 !== undefined) {
            this.sidesCount = arg1;
            this.sidesSize = arg2;
          } else if (arg1 instanceof Shape && arg2 === undefined) {
            this.sidesCount = arg1.sidesCount;
            this.sidesSize = arg1.sidesSize;
          } else {
            throw new Error('Invalid arguments');
          }
    }

    setSides({sidesCount=this.sidesCount, sidesSize=this.sidesSize}){
        this.sidesCount = sidesCount;
        this.sidesSize = sidesSize;
    }

    getSides(): string{
        return `sidesCount: ${this.sidesCount} - sidesSize: ${this.sidesSize}`
    }

    clone(): Shape {
        throw new Error("Method not implemented.");
    }

}