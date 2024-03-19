import { BikeStrategy, CarStrategy, Navigator } from "./src";

const carStrategy = new CarStrategy();
const bicycleStrategy = new BikeStrategy();

const navigator = new Navigator(carStrategy);
navigator.planRoute("Home", "Work");

navigator.setTransportStrategy(bicycleStrategy);
navigator.planRoute("Home", "Park");