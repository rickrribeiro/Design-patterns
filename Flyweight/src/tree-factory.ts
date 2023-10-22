import { TreeType } from "./tree-type";

export class TreeFactory{

    private static types: Array<TreeType> = [];
    static getTreeType(name, color, maxSize): TreeType{
        const type = this.types.find(el => el.name == name);
        if(type) return type;
        const newType = new TreeType(color, maxSize, name);
        this.types.push(newType);
        return newType;
    }
}