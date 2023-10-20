import {SpeedLibAdapter} from '../adapters/distanceLibAdapter'
export class Bike{

    private speedMiles = 10;
    private speedAdapter = new SpeedLibAdapter();
    getTotalDistance(time: number): number{
        return this.speedAdapter.getDistanceFromMPH(this.speedMiles, time);
    }
}