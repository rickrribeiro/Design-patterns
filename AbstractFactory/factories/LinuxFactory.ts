import IButton from "../components/interfaces/IButton";
import ICheckBox from "../components/interfaces/ICheckBox";
import IGUIFactory from "./interfaces/IGUIFactory";
import LinuxButton from "../components/linux/LinuxButton";
import LinuxCheckBox from "../components/linux/LinuxCheckBox";


export default class LinuxFactory implements IGUIFactory{
    createButton(): IButton {
        return new LinuxButton();
    }
    createCheckBox(): ICheckBox {
        return new LinuxCheckBox()
    }

}