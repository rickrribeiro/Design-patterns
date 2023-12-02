import { BaseHandler } from "./handlers/base-handler";

export class Workflow{

    constructor(){

    }

    test(user, ...handlers){

        BaseHandler.verify(user, ...handlers);
    }
}