import { Workflow } from "./src/workflow";
import { Handler1 } from "./src/handlers/handler1";
import { Handler2 } from "./src/handlers/handler2";
import { Handler3 } from "./src/handlers/handler3";
const workflow = new Workflow();

const user1 = {

}

const user2 = {
    username : "username123"
}

const user3 = {
    username : "username",
    email: "email123"
}

const user4 = {
    username : "username",
    email: "email123",
    password: "password123"
}


const callBackAuth = (el) => {
    console.log("autenticado")
    console.log(el)
}

console.log("exec 1:")
workflow.test(user1, Handler1, Handler2, Handler3, callBackAuth);
console.log("exec 2:")
workflow.test(user2, Handler1, Handler2, Handler3, callBackAuth);
console.log("exec 3:")
workflow.test(user3, Handler1, Handler2, Handler3, callBackAuth);
console.log("exec 4:")
workflow.test(user4, Handler1, Handler2, Handler3, callBackAuth);