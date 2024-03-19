import { Subscriber } from "./src/subscriber";
import { Publisher } from "./src/publisher";

const subscriber1 = new Subscriber();
const subscriber2 = new Subscriber();
const publisher = new Publisher();

publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);   
publisher.notify();
publisher.unsubscribe(subscriber1);
publisher.notify();
