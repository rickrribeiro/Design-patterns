import LinuxFactory from "./factories/LinuxFactory";
import WindowsFactory from "./factories/WindowsFactory";
import IGUIFactory from "./factories/interfaces/IGUIFactory";
const os = require('os');

class App{
    private factory: IGUIFactory;
    constructor(factory){
        this.factory = factory;
    }

    public printComponents(){
        const btn = this.factory.createButton();
        const check = this.factory.createCheckBox();
        btn.paint()
        check.paint()
    }

}

let app: App;
if(os.type().toLowerCase().includes('linux')){
    app = new App(new LinuxFactory())
}else {
    app = new App(new WindowsFactory())
}

app.printComponents()