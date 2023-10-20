import {Bike, Car} from './src/vehicles'

const car = new Car()
const bike = new Bike();

const distanceCar = car.getTotalDistance(1);
const distanceBike = bike.getTotalDistance(1);

console.log(distanceCar);
console.log(distanceBike);