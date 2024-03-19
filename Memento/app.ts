import { Editor } from "./src/editor";
import { StateHistory } from "./src/history";
const editor = new Editor();
const stateHistory = new StateHistory();

editor.setText("Hello, world!");
console.log("print1: "+editor.getText());
stateHistory.push(editor.createMemento());

editor.setText("This is a Memento example.");
console.log("print2: "+editor.getText());
stateHistory.push(editor.createMemento());

editor.setText("Bora bahia minha porra.");
console.log("print3: "+ editor.getText());

editor.restoreFromMemento(stateHistory.pop());
console.log("print4: "+ editor.getText());

editor.restoreFromMemento(stateHistory.pop());
console.log("print5: "+ editor.getText());