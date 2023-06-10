import ICheckBox from "../interfaces/ICheckBox"

export default class WindowsCheckBox implements ICheckBox{
    paint(): void {
        console.log("WindowsCheckBox")
    }
}