import { TreeFactory } from "./tree-factory";
import { TreeType } from "./tree-type";

export class Tree{
    private type: TreeType;
    private age: number;

    constructor(age, typeName, color, maxSize){
        this.age = age;
        this.type = TreeFactory.getTreeType(typeName, color, maxSize);
      
    }

    getTreeInfo(){
        return {
            age: this.age,
            type: this.type.getTypeInfo()
        }
    }
}