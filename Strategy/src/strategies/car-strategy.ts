import { TransportStrategy } from "./interfaces/transport-strategy-interface";

export class CarStrategy implements TransportStrategy {
    buildRoute(origin: string, destination: string): string[] {
      return [`Taking a car from ${origin} to ${destination}`];
    }
  }