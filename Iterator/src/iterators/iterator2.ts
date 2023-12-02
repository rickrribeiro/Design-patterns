import { DataSource } from "../data/data-source";
import { IIterator } from "./interfaces/iterator-interface";

export class Iterator2 implements IIterator{
    private table;
    private position = 0;

    constructor(){
        this.table = DataSource.getTable()
    }

    getNext() {
        if (this.position >= this.table.length*2) return undefined;
        
        const row = Math.floor((this.position) / 2);
        const col = (this.position) % 2;

        const result = this.table[row][col];
        this.position += 1;
        return result;
    }
}