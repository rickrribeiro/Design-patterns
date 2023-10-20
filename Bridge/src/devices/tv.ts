import { IDevice } from "./interfaces/device-interface";

export class TV implements IDevice{
    private volume: number = 2;

   setVolume(volume: number): void {
        this.volume = volume;
    }
    
    getVolume(): number {
        return this.volume
    }
    
}