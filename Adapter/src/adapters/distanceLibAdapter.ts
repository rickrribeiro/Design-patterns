import {SpeedLib} from '../external_lib/distanceLib'

export class SpeedLibAdapter{

    private speedLib = new SpeedLib();

    getDistanceFromMPH(speedMPH: number, hours: number){
        let speedKMH = speedMPH * 0.6213711922;
        return this.speedLib.getDistanceFromKMH(speedKMH, hours);
    }
}