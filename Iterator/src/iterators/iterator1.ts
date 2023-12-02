import { DataSource } from "../data/data-source";
import { IIterator } from "./interfaces/iterator-interface";

export class Iterator1 implements IIterator{
    private list;
    private position = 0;

    constructor(){
        this.list = DataSource.getList()
    }

    getNext() {
        if(this.list.length <= this.position) return undefined;
        this.position +=1
        return this.list[this.position-1]
    }
}