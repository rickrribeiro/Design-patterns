import { Printer } from "./src/printer/printer";

const printer = new Printer();
const a = printer.printWithFunction(1,1)
console.log(a)


const b = printer.add(1,2)
console.log(b)
const c = printer.subtract(1,2)
console.log(c)

const d = printer.operation(25,25)
console.log(d)