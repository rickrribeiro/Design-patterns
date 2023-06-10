import ICheckBox from "../interfaces/ICheckBox"

export default class LinuxCheckBox implements ICheckBox{
    paint(): void {
        console.log("LinuxCheckBox")
    }
}