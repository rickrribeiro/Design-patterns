import { BaseHandler } from "./base-handler";

export class Handler1 extends BaseHandler{

    static apply(user, ...args){
        if(!user.username){
            console.log("Username required");
            return 0;
        }
        this.next(user, ...args);
    }
}