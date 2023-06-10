import IButton from "../interfaces/IButton";

export default class WindowsButton implements IButton{
    paint(): void {
        console.log("WindowsButton")
    }
}