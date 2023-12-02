export class BaseHandler{

    static next(user, ...args){
        if(args == undefined || args.length === 0) return;
        const nextHandler = args.shift();
        //const handler = new nextHandler();
        // console.log(nextHandler)
        if (!(nextHandler.prototype instanceof BaseHandler)) {
            nextHandler(user); 
        } else {
            nextHandler.apply(user, ...args)
        }
    }

    static verify(user, ...args){
        this.next(user, ...args);
    }
}