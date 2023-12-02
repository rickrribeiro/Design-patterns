export class BaseCommander{
    private history = []
    private removedHistory = []
    
    protected addHistory(operation){
        this.removedHistory = []
        this.history.push(operation)
    }

    printHistory(){
        console.log(this.history)
    }

    undo(){
        const removedHistory = this.history.pop()
        this.removedHistory.push(removedHistory)
    }

    redo(){
        const removedHistory = this.removedHistory.pop()
        if(removedHistory) this.history.push(removedHistory)
    }

}