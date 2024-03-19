import { TransportStrategy } from "./strategies/interfaces/transport-strategy-interface";

export class Navigator {
    private transportStrategy: TransportStrategy;
  
    constructor(transportStrategy: TransportStrategy) {
      this.transportStrategy = transportStrategy;
    }
  
    public setTransportStrategy(transportStrategy: TransportStrategy): void {
      this.transportStrategy = transportStrategy;
    }
  
    public planRoute(origin: string, destination: string): void {
      const route = this.transportStrategy.buildRoute(origin, destination);
      console.log("Route:");
      route.forEach(step => console.log(step));
    }
  }