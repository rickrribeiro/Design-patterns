import { LibLogger } from "../concept-lib/lib-logger";

export class MyLogger{

    createLevel1Logger(){
        const libLogger = new LibLogger();
        libLogger.setLoggerLevel(1);
        return libLogger.createLogger()
    }

    createLevel2Logger(){
        const libLogger = new LibLogger();
        libLogger.setLoggerLevel(2);
        return libLogger.createLogger()
    }

    createLevel3Logger(){
        const libLogger = new LibLogger();
        libLogger.setLoggerLevel(3);
        return libLogger.createLogger()
    }
}