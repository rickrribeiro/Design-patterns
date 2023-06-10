import IButton from "../components/interfaces/IButton";
import ICheckBox from "../components/interfaces/ICheckBox";
import IGUIFactory from "./interfaces/IGUIFactory";
import WindowsButton from "../components/windows/WindowsButton";
import WindowsCheckBox from "../components/windows/WindowsCheckBox";


export default class WindowsFactory implements IGUIFactory{
    createButton(): IButton {
        return new WindowsButton();
    }
    createCheckBox(): ICheckBox {
        return new WindowsCheckBox()
    }

}