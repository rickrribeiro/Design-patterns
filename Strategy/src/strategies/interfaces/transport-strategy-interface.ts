export interface TransportStrategy {
    buildRoute(origin: string, destination: string): string[];
}