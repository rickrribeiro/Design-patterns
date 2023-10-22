import { Tree } from "./tree";

export class Forest{
    public trees: Array<Tree>= [];

    addTree(age, typeName, color, maxSize){
        let tree = new Tree(age, typeName, color, maxSize);
        this.trees.push(tree);
    }

   
}