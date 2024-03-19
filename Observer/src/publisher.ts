import { Subscriber } from "./subscriber";

export class Publisher {
    private subscribers: Subscriber[] = [];

    subscribe(subscriber: Subscriber): void {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: Subscriber): void {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }

    notify(): void {
        console.log('Publisher: I am notifying my subscribers')
        this.subscribers.forEach(subscriber => subscriber.update());
    }
}