import { TransportStrategy } from "./interfaces/transport-strategy-interface";

export class BikeStrategy implements TransportStrategy {
    buildRoute(origin: string, destination: string): string[] {
      return [`Cycling from ${origin} to ${destination}`];
    }
  }