import IButton from "../interfaces/IButton";

export default class LinuxButton implements IButton{
    paint(): void {
        console.log("LinuxButton")
    }
}