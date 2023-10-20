import { IDevice } from "./interfaces/device-interface";

export class Radio implements IDevice{
    private volume: number = 10;

   setVolume(volume: number): void {
        this.volume = volume;
    }
    
    getVolume(): number {
        return this.volume
    }
    
}