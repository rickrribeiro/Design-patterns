import {SpeedLibAdapter} from '../adapters/distanceLibAdapter'
export class Car{

    private speedMiles = 100;
    private speedAdapter = new SpeedLibAdapter();
    getTotalDistance(time: number): number{
        return this.speedAdapter.getDistanceFromMPH(this.speedMiles, time);
    }
}