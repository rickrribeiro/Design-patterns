import { OperationCommander } from "./src/commanders/operation-commander";
import { Component1 } from "./src/components/component1";
import { Component2 } from "./src/components/component2";

const component1 = new Component1()
const component2 = new Component2()
const commander = OperationCommander.getInstance()

component1.doOperation('asd1')
component2.doOperation('asd2')
component1.doOperation('asd3')
component2.doOperation('asd4')

console.log(commander.printHistory())
commander.undo();
commander.undo()
console.log(commander.printHistory())
commander.redo()
console.log(commander.printHistory())
commander.redo()
commander.redo()
console.log(commander.printHistory())