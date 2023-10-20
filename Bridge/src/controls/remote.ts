import { IDevice } from "../devices/interfaces/device-interface";

export class Remote {
    private device: IDevice

    constructor(device){
        this.device = device
    }

    volumeUp(){
        const currentVolume = this.device.getVolume()
        this.device.setVolume(currentVolume+1);
    }

    volumeDown(){
        const currentVolume = this.device.getVolume()
        this.device.setVolume(currentVolume-1);
    }

    getVolume(){
        return  this.device.getVolume()
    }
}