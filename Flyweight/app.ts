import { Forest } from "./src/forest";

const forest = new Forest();

forest.addTree('1', 'typeName1', 'color1', '11');
forest.addTree('1', 'typeName1', 'color1', '22');
forest.addTree('1', 'typeName1', 'color2', '33');
forest.addTree('2', 'typeName2', 'color2', '22');
forest.addTree('2', 'typeName2', 'color2', '22');
forest.addTree('3', 'typeName3', 'color3', '33');
console.log(forest.trees)