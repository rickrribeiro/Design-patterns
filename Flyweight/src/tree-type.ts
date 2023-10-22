export class TreeType{
    constructor(private color, private maxSize, public name){}

    getTypeInfo(){
        return{
            color: this.color,
            maxSize: this.maxSize,
            name: this.name
        }
    }
}