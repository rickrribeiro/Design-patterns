import { BaseHandler } from "./base-handler";

export class Handler3 extends BaseHandler{

    static apply(user, ...args){
        if(!user.password){
            console.log("password required");
            return 0;
        }
        this.next(user, ...args);
    }
}