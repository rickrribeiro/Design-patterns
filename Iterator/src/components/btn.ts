import { IIterator } from "../iterators/interfaces/iterator-interface";

export class Btn{

    constructor (private iterator: IIterator){}

    click(){
        let item = this.iterator.getNext()
        console.log(item)
    }
}