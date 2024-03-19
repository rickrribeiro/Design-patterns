import { DocumentEditor } from "./src/document-editor";

const editor = new DocumentEditor();
console.log('Draft state');
editor.publish();
editor.render();

console.log('Moderation state');
editor.render();
editor.publish();

console.log('Published state');
editor.publish();
editor.render();
editor.deleteState();

console.log('Draft state');
editor.publish();
editor.render();