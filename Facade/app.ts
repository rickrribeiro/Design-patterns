import { MyLogger } from "./src/logger/my-logger";


const myLogger = new MyLogger();

const level1 = myLogger.createLevel1Logger()
const level2 = myLogger.createLevel2Logger()
const level3 = myLogger.createLevel3Logger()

console.log(level1)
console.log(level2)
console.log(level3)