export class LibLogger{
    private level =1;
    
    setLoggerLevel(level){
        this.level = level;
    }

    createLogger(){
        return{
            name:'Logger',
            level: this.level
        }
    }
}