import { BaseHandler } from "./base-handler";

export class Handler2 extends BaseHandler{

    static apply(user, ...args){
        if(!user.email){
            console.log("email required");
            return 0;
        }
        this.next(user, ...args);
    }
}